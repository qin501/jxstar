Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'入库金额', width:100, sortable:true}, field:{name:'store_indet01__in_money',type:'string'}},
	{col:{header:'入库数量', width:100, sortable:true}, field:{name:'store_indet01__in_num',type:'string'}},
	{col:{header:'货位', width:100, sortable:true}, field:{name:'store_indet01__local_code',type:'string'}},
	{col:{header:'物资ID', width:100, sortable:true, colindex:10000}, field:{name:'store_indet01__mat_id',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_indet01__indet_id',type:'string'}},
	{col:{header:'入库单ID', width:100, sortable:true, colindex:10000}, field:{name:'store_indet01__in_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'store_indet01'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}