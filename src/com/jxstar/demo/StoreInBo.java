package com.jxstar.demo;
import org.jxstar.dao.DaoParam;
import org.jxstar.service.BusinessObject;
import org.jxstar.util.DateUtil;
import org.jxstar.util.Dec;
import org.jxstar.util.MapUtil;
import org.jxstar.util.key.KeyCreator;

import java.util.List;
import java.util.Map;

/**
 * 入库处理类
 * Created by qin on 2019/3/16
 */
public class StoreInBo extends BusinessObject {
    /**
     * 提交后处理事件，支持一次提交多条入库单
     * @param inIds
     * @param userId
     * @return
     */
    public String onPostAduit(String[] inIds,String userId){
        for(String inid:inIds){
            List<Map<String, String>> lsindet = queryIn(inid);
            _log.showDebug("..........入库ID="+inid+"；明细数量="+lsindet.size());
            /**
             * 入库处理规则：同一个仓库中一种物资只有一条库存记录
             * 如果库存中有此记录则更新库存数量与金额
             * 如果没有此物资，则新增一条库存记录
             */
            for (Map<String,String> mpdet: lsindet) {
//                String matId=mpdet.get("matId");
//                String houseId=mpdet.get("house_id");
                String matId=MapUtil.getValue(mpdet,"mat_id");
                String houseId=MapUtil.getValue(mpdet,"house_id");
                if(hasStore(houseId,matId)){
                    //有库存则更新
                    if(!updateStore(mpdet)){
                        setMessage("更新库存金额出错");
                        return _returnFaild;
                        //没有库存则新增
                    }
                }else {
                    if(!insertStore(mpdet,userId)){
                        setMessage("新增库存记录出错");
                        return _returnFaild;
                    }
                }
            }
        }
        return _returnSuccess;
    }

    /**
     * 新增库存记录
     * @param map
     * @param userId
     * @return
     */
    private boolean insertStore(Map<String, String> map, String userId) {
        String keyid= KeyCreator.getInstance().createKey("store_rec");
        String sql="insert into store_rec("+
                "house_name,house_id,mat_id,mat_code,mat_name,"+
                "mat_size,mat_unit,store_price,store_num,store_money,last_incode,"+
                "last_indate,store_id,add_userid,add_date,tenant_id)"+
                "values(?,?,?,?,?,"+
                "?,?,?,?,?,?,"+
                "?,?,?,?,?)";
        DaoParam param = _dao.createParam(sql);
        param.addStringValue(map.get("house_name"));
        param.addStringValue(map.get("house_id"));
        param.addStringValue(map.get("mat_id"));
        param.addStringValue(map.get("mat_code"));
        param.addStringValue(map.get("mat_name"));

        param.addStringValue(map.get("mat_size"));
        param.addStringValue(map.get("mat_unit"));
        param.addStringValue(map.get("mat_price"));
        param.addStringValue(map.get("in_num"));
        param.addStringValue(map.get("in_money"));
        param.addStringValue(map.get("in_code"));

        param.addDateValue(map.get("in_date"));
        param.addStringValue(keyid);
        param.addStringValue(userId);
        param.addStringValue(DateUtil.getTodaySec());
        param.addCurrTenantId();
        boolean update = _dao.update(param);
        return update;
    }

    /**
     * 更新库存数量与金额
     * @param mpIn
     * @return
     */
    private boolean updateStore(Map<String, String> mpIn) {
        String matId=MapUtil.getValue(mpIn,"mat_id");
        String houseId=MapUtil.getValue(mpIn,"house_id");
        Map<String, String> map = queryStore(houseId, matId);
        if(map.isEmpty()){
            setMessage("没有找到库存记录");
            return false;
        }
        _log.showDebug(".........updateStore,matId="+matId+";houseId="+houseId+";store="+map);
        //库存数量与金额
        double store_num = MapUtil.getDouble(map, "store_num");
        double store_money = MapUtil.getDouble(map, "store_money");
        _log.showDebug(".........updateStore,store_num="+store_num+";store_money="+store_money);
        //入库数量与金额
        double in_num = MapUtil.getDouble(mpIn, "in_num");
        double in_money = MapUtil.getDouble(mpIn, "in_money");
        //用大数据类处理运算，避免精度问题
        store_num = Dec.add(in_num, store_num);
        store_money=Dec.add(in_money,store_money);
        double store_price = Dec.chu(store_money, store_num, 6);
        String sql="update store_rec set store_num=?,store_money=?,store_price=?,"+
                "last_incode=?,last_indate=?"+
                " where house_id=? and mat_id=?";
        DaoParam param = _dao.createParam(sql);
        param.addDoubleValue(Double.toString(store_num));
        param.addDoubleValue(Double.toString(store_money));
        param.addDoubleValue(Double.toString(store_price));
        param.addStringValue(MapUtil.getValue(mpIn,"in_code"));
        param.addDateValue(DateUtil.getToday());
        param.addStringValue(houseId);
        param.addStringValue(matId);
        boolean update = _dao.update(param);
        return update;
    }

    /**
     * 是否存在库存记录
     * @param houseId
     * @param matId
     * @return
     */
    private boolean hasStore(String houseId, String matId) {
        String sql="select count(*) as cnt from store_rec where house_id=? and mat_id=?";
        DaoParam param=_dao.createParam(sql);
        param.addStringValue(houseId);
        param.addStringValue(matId);
        Map<String, String> map = _dao.queryMap(param);
        boolean b = MapUtil.hasRecord(map);
        return b;
    }

    /**
     * 取库存数量与金额
     * @param houseId
     * @param matId
     * @return
     */
    private Map<String,String> queryStore(String houseId,String matId){
        String sql="select store_price,store_num,store_money from store_rec where house_id=? and mat_id=?";
        DaoParam param = _dao.createParam(sql);
        param.addStringValue(houseId);
        param.addStringValue(matId);
        Map<String, String> map = _dao.queryMap(param);
        return map;

    }
    //查询一个入库单的数据
    private List<Map<String,String>> queryIn(String inid){
        String sql="select a.in_id,a.in_code,a.in_date,a.house_id,a.house_name,"+
                "b.mat_id,b.in_num,b.in_money,c.mat_code,c.mat_name,c.mat_size,c.mat_price,c.mat_unit"+
                " from store_in a,store_indet b,store_mat c where a.in_id=b.in_id and "+
                " b.mat_id=c.mat_id and a.in_id=?";
        DaoParam param=_dao.createParam(sql);
        param.addStringValue(inid);
        List<Map<String, String>> query = _dao.query(param);
        return query;
    }

}
