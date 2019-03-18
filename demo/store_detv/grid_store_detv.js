Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'单号', width:100, sortable:true}, field:{name:'v_store_det__order_code',type:'string'}},
	{col:{header:'物资编码', width:100, sortable:true, colindex:10000}, field:{name:'store_mat__mat_code',type:'string'}},
	{col:{header:'物资名称', width:100, sortable:true, colindex:10000}, field:{name:'store_mat__mat_name',type:'string'}},
	{col:{header:'型号', width:100, sortable:true, colindex:10000}, field:{name:'store_mat__mat_size',type:'string'}},
	{col:{header:'单位', width:100, sortable:true, colindex:10000}, field:{name:'store_mat__mat_unit',type:'string'}},
	{col:{header:'仓库ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'v_store_det__house_id',type:'string'}},
	{col:{header:'物资ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'v_store_det__mat_id',type:'string'}},
	{col:{header:'单据ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'v_store_det__order_id',type:'string'}},
	{col:{header:'数量', width:100, sortable:true, colindex:10000}, field:{name:'v_store_det__order_num',type:'string'}},
	{col:{header:'金额', width:100, sortable:true, colindex:10000}, field:{name:'v_store_det__order_money',type:'string'}},
	{col:{header:'单据日期', width:100, sortable:true, colindex:10000}, field:{name:'v_store_det__order_date',type:'string'}},
	{col:{header:'仓库', width:100, sortable:true, colindex:10000}, field:{name:'v_store_det__house_name',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'store_detv'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}