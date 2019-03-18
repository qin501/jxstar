﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var Datacondtype = Jxstar.findComboData('condtype');
	var Datarowno = Jxstar.findComboData('rowno');
	var Dataandor = Jxstar.findComboData('andor');

	var cols = [
	{col:{header:'左括', width:44, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:20
		})}, field:{name:'sys_query_det__left_brack',type:'string'}},
	{col:{header:'*字段标题', width:142, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:50, allowBlank:false
		})}, field:{name:'sys_query_det__colname',type:'string'}},
	{col:{header:'字段名', width:145, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query_det__colcode',type:'string'}},
	{col:{header:'条件', width:107, sortable:true, defaultval:'like', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Datacondtype
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Datacondtype[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Datacondtype.length; i++) {
				if (Datacondtype[i][0] == value)
					return Datacondtype[i][1];
			}
		}}, field:{name:'sys_query_det__condtype',type:'string'}},
	{col:{header:'查询值', width:140, sortable:true, hidden:true}, field:{name:'sys_query_det__cond_value',type:'string'}},
	{col:{header:'序号', width:43, sortable:true, align:'right',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.NumberField({
			decimalPrecision:0, maxLength:22
		}),renderer:JxUtil.formatInt()}, field:{name:'sys_query_det__col_no',type:'int'}},
	{col:{header:'行号', width:53, sortable:true, defaultval:'1', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Datarowno
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Datarowno[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Datarowno.length; i++) {
				if (Datarowno[i][0] == value)
					return Datarowno[i][1];
			}
		}}, field:{name:'sys_query_det__row_no',type:'string'}},
	{col:{header:'逻辑符', width:84, sortable:true, defaultval:'and', align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Dataandor
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Dataandor[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Dataandor.length; i++) {
				if (Dataandor[i][0] == value)
					return Dataandor[i][1];
			}
		}}, field:{name:'sys_query_det__andor',type:'string'}},
	{col:{header:'右括', width:53, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:20
		})}, field:{name:'sys_query_det__right_brack',type:'string'}},
	{col:{header:'数据类型', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query_det__coltype',type:'string'}},
	{col:{header:'查询ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query_det__query_id',type:'string'}},
	{col:{header:'明细ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'sys_query_det__query_detid',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '0',
		isedit: '1',
		isshow: '0',
		funid: 'sys_qrydet'
	};
	
	config.param.selectModel = 'nocheck';
	config.param.noRowNum = true;

	config.param.hidePageTool = true;	
		
	return new Jxstar.GridNode(config);
}