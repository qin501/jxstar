﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'表名称', width:131, sortable:true}, field:{name:'dm_table__table_name',type:'string'}},
	{col:{header:'表标题', width:159, sortable:true}, field:{name:'dm_table__table_title',type:'string'}},
	{col:{header:'表ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'dm_table__table_id',type:'string'}},
	{col:{header:'状态', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'dm_table__state',type:'string'}},
	{col:{header:'数据源', width:100, sortable:true, hidden:true}, field:{name:'dm_table__ds_name',type:'string'}},
	{col:{header:'表类型', width:100, sortable:true, hidden:true}, field:{name:'dm_table__table_type',type:'string'}},
	{col:{header:'表空间', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'dm_table__table_space',type:'string'}},
	{col:{header:'表说明', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'dm_table__table_memo',type:'string'}},
	{col:{header:'表主键', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'dm_table__key_field',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '0',
		isedit: '0',
		isshow: '0',
		funid: 'sel_table'
	};
	
	
	//不需要复选模式
		
	return new Jxstar.GridNode(config);
}