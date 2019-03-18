Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'货位', width:100, sortable:true}, field:{name:'store_outdet__local_code',type:'string'}},
	{col:{header:'出库金额', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_outdet__out_money',type:'float'}},
	{col:{header:'出库数量', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_outdet__out_num',type:'float'}},
	{col:{header:'单价', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_outdet__out_price',type:'float'}},
	{col:{header:'库存ID', width:100, sortable:true, colindex:10000}, field:{name:'store_outdet__store_id',type:'string'}},
	{col:{header:'物资ID', width:100, sortable:true, colindex:10000}, field:{name:'store_outdet__mat_id',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_outdet__out_detid',type:'string'}},
	{col:{header:'出库单ID', width:100, sortable:true, colindex:10000}, field:{name:'store_outdet__out_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'store_outdet'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}