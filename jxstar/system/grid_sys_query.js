﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'*查询方案', width:108, sortable:true, defaultval:'查询方案1', editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:50, allowBlank:false
		})}, field:{name:'sys_query__query_name',type:'string'}},
	{col:{header:'缺省?', width:44, sortable:true, defaultval:'0', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.Checkbox(),
		renderer:function(value) {
			return value=='1' ? jx.base.yes : jx.base.no;
		}}, field:{name:'sys_query__is_default',type:'string'}},
	{col:{header:'共享?', width:48, sortable:true, defaultval:'1', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.Checkbox(),
		renderer:function(value) {
			return value=='1' ? jx.base.yes : jx.base.no;
		}}, field:{name:'sys_query__is_share',type:'string'}},
	{col:{header:'序号', width:48, sortable:true, defaultval:'1', align:'right',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.NumberField({
			decimalPrecision:0, maxLength:22
		}),renderer:JxUtil.formatInt()}, field:{name:'sys_query__query_no',type:'int'}},
	{col:{header:'创建人', width:75, sortable:true, defaultval:'fun_getUserName()', editable:false,
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'sys_query__user_name',type:'string'}},
	{col:{header:'查询ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query__query_id',type:'string'}},
	{col:{header:'功能ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query__fun_id',type:'string'}},
	{col:{header:'创建人ID', width:100, sortable:true, colindex:10000, hidden:true, defaultval:'fun_getUserId()'}, field:{name:'sys_query__user_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '0',
		isedit: '1',
		isshow: '0',
		funid: 'sys_query'
	};
	
	config.param.noRowNum = true;

	config.param.hidePageTool = true;	
		
	return new Jxstar.GridNode(config);
}