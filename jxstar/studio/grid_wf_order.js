﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var Dataregstatus = Jxstar.findComboData('regstatus');

	var cols = [
	{col:{header:'序号', width:59, sortable:true}, field:{name:'wf_order__order_no',type:'string'}},
	{col:{header:'功能ID', width:175, sortable:true}, field:{name:'wf_order__fun_id',type:'string'}},
	{col:{header:'审批标题', width:182, sortable:true}, field:{name:'wf_order__fun_name',type:'string'}},
	{col:{header:'审批单ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'wf_order__order_id',type:'string'}},
	{col:{header:'状态', width:100, sortable:true, align:'center',
		editable:false,
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Dataregstatus
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Dataregstatus[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Dataregstatus.length; i++) {
				if (Dataregstatus[i][0] == value)
					return Dataregstatus[i][1];
			}
		}}, field:{name:'wf_order__order_audit',type:'string'}},
	{col:{header:'外部系统代号', width:100, sortable:true}, field:{name:'wf_order__sys_code',type:'string'}},
	{col:{header:'外部系统名称', width:162, sortable:true}, field:{name:'wf_order__sys_name',type:'string'}},
	{col:{header:'扩展脚本', width:100, sortable:true, hidden:true}, field:{name:'wf_order__order_inc',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'wf_order'
	};
	
	
	config.initpage = function(gridNode){
		
	return new Jxstar.GridNode(config);
}