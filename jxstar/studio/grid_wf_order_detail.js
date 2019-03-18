﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'*序号', width:55, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:10, allowBlank:false
		})}, field:{name:'wf_order_detail__fun_no',type:'string'}},
	{col:{header:'*功能ID', width:164, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:25, allowBlank:false
		})}, field:{name:'wf_order_detail__fun_id',type:'string'}},
	{col:{header:'*信息标题', width:136, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:50, allowBlank:false
		})}, field:{name:'wf_order_detail__fun_name',type:'string'}},
	{col:{header:'列1标题', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'wf_order_detail__col1_title',type:'string'}},
	{col:{header:'列1宽度%', width:75, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:10
		})}, field:{name:'wf_order_detail__col1_width',type:'string'}},
	{col:{header:'列2标题', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'wf_order_detail__col2_title',type:'string'}},
	{col:{header:'列2宽度%', width:73, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:10
		})}, field:{name:'wf_order_detail__col2_width',type:'string'}},
	{col:{header:'列3标题', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'wf_order_detail__col3_title',type:'string'}},
	{col:{header:'列3宽度%', width:69, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:10
		})}, field:{name:'wf_order_detail__col3_width',type:'string'}},
	{col:{header:'审批单ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'wf_order_detail__order_id',type:'string'}},
	{col:{header:'明细ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'wf_order_detail__detail_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '0',
		isedit: '1',
		isshow: '1',
		funid: 'wf_order_detail'
	};
	
	
	config.initpage = function(gridNode){
		
	return new Jxstar.GridNode(config);
}