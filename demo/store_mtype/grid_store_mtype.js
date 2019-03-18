Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'分类编码', width:100, sortable:true}, field:{name:'store_mtype__type_code',type:'string'}},
	{col:{header:'分类描述', width:100, sortable:true}, field:{name:'store_mtype__type_desc',type:'string'}},
	{col:{header:'分类名称', width:100, sortable:true}, field:{name:'store_mtype__type_name',type:'string'}},
	{col:{header:'级别', width:100, sortable:true}, field:{name:'store_mtype__type_level',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_mtype__type_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'store_mtype'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}