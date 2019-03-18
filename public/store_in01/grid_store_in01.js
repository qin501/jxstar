Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'单号', width:100, sortable:true}, field:{name:'store_in01__in_code',type:'string'}},
	{col:{header:'状态', width:100, sortable:true}, field:{name:'store_in01__auditing',type:'string'}},
	{col:{header:'入库日期', width:100, sortable:true, align:'center',
		renderer:function(value) {
			return JxUtil.renderDate(value, 'Y-m-d');
		}}, field:{name:'store_in01__in_date',type:'date'}},
	{col:{header:'仓库', width:100, sortable:true}, field:{name:'store_in01__house_name',type:'string'}},
	{col:{header:'仓管员', width:100, sortable:true}, field:{name:'store_in01__edit_user',type:'string'}},
	{col:{header:'送货人', width:100, sortable:true}, field:{name:'store_in01__send_user',type:'string'}},
	{col:{header:'入库说明', width:100, sortable:true}, field:{name:'store_in01__in_desc',type:'string'}},
	{col:{header:'入库金额', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_in01__in_money',type:'float'}},
	{col:{header:'制单员', width:100, sortable:true}, field:{name:'store_in01__pur_user',type:'string'}},
	{col:{header:'制单员ID', width:100, sortable:true, colindex:10000}, field:{name:'store_in01__pur_userid',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_in01__in_id',type:'string'}},
	{col:{header:'仓管员ID', width:100, sortable:true, colindex:10000}, field:{name:'store_in01__edit_userid',type:'string'}},
	{col:{header:'仓库ID', width:100, sortable:true, colindex:10000}, field:{name:'store_in01__house_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'store01'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}