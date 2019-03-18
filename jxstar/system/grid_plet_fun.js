﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var Datapletcommtype = Jxstar.findComboData('pletcommtype');

	var cols = [
	{col:{header:'功能ID', width:100, sortable:true}, field:{name:'plet_fun__fun_id',type:'string'}},
	{col:{header:'功能名称', width:172, sortable:true}, field:{name:'plet_fun__fun_name',type:'string'}},
	{col:{header:'常用功能分类', width:144, sortable:true, align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Datapletcommtype
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Datapletcommtype[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Datapletcommtype.length; i++) {
				if (Datapletcommtype[i][0] == value)
					return Datapletcommtype[i][1];
			}
		}}, field:{name:'plet_fun__comm_type',type:'string'}},
	{col:{header:'是否快速创建', width:100, sortable:true, defaultval:'0', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.Checkbox(),
		renderer:function(value) {
			return value=='1' ? jx.base.yes : jx.base.no;
		}}, field:{name:'plet_fun__is_fast',type:'string'}},
	{col:{header:'序号', width:100, sortable:true, defaultval:'10', align:'right',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.NumberField({
			decimalPrecision:0, maxLength:22
		}),renderer:JxUtil.formatInt()}, field:{name:'plet_fun__fun_no',type:'int'}},
	{col:{header:'设置类型', width:100, sortable:true, hidden:true}, field:{name:'plet_fun__set_type',type:'string'}},
	{col:{header:'角色ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'plet_fun__role_id',type:'string'}},
	{col:{header:'栏目ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'plet_fun__portlet_id',type:'string'}},
	{col:{header:'明细ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'plet_fun__det_id',type:'string'}},
	{col:{header:'个人ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'plet_fun__owner_user_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '0',
		isedit: '1',
		isshow: '1',
		funid: 'plet_fun'
	};
	
	
	config.eventcfg = {
	};
		
	return new Jxstar.GridNode(config);
}