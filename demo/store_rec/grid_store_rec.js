Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'仓库名称', width:100, sortable:true}, field:{name:'store_rec__house_name',type:'string'}},
	{col:{header:'最近入库单号', width:100, sortable:true}, field:{name:'store_rec__last_incode',type:'string'}},
	{col:{header:'最近入库日期', width:100, sortable:true, align:'center',
		renderer:function(value) {
			return JxUtil.renderDate(value, 'Y-m-d');
		}}, field:{name:'store_rec__last_indate',type:'date'}},
	{col:{header:'物资编码', width:100, sortable:true}, field:{name:'store_rec__mat_code',type:'string'}},
	{col:{header:'物资名称', width:100, sortable:true}, field:{name:'store_rec__mat_name',type:'string'}},
	{col:{header:'型号', width:100, sortable:true}, field:{name:'store_rec__mat_size',type:'string'}},
	{col:{header:'单位', width:100, sortable:true}, field:{name:'store_rec__mat_unit',type:'string'}},
	{col:{header:'仓库编码', width:100, sortable:true, hidden:true}, field:{name:'store_rec__house_code',type:'string'}},
	{col:{header:'库存金额(元)', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_rec__store_money',type:'float'}},
	{col:{header:'库存数量', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_rec__store_num',type:'float'}},
	{col:{header:'库存单价(元)', width:100, sortable:true}, field:{name:'store_rec__store_price',type:'string'}},
	{col:{header:'仓库id', width:100, sortable:true, colindex:10000}, field:{name:'store_rec__house_id',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_rec__store_id',type:'string'}},
	{col:{header:'物资id', width:100, sortable:true, colindex:10000}, field:{name:'store_rec__mat_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'store_rec'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}