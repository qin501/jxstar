Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};
	
	var Dataaudit = Jxstar.findComboData('audit');
	var items = [{
		border:false,
		layout:'form',
		autoHeight:true,
		cls:'x-form-main',
		items:[{
			anchor:'100%',
			border:false,
			layout:'column',
			autoHeight:true,
			items:[{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'单号', name:'store_in__in_code', anchor:'100%', maxLength:50},
					{xtype:'datefield', fieldLabel:'入库日期', name:'store_in__in_date', defaultval:'fun_getToday()', format:'Y-m-d', anchor:'100%'},
					{xtype:'combo', fieldLabel:'仓管员', name:'store_in__edit_user',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, allowBlank:false, labelStyle:'color:#0077FF;', labelSeparator:'*', editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('store_in', combo, 'node_store_in_form');
						}}},
					{xtype:'textfield', fieldLabel:'入库金额', name:'store_in__in_money', readOnly:true, anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'主键', name:'store_in__in_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'仓库ID', name:'store_in__house_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'combo', fieldLabel:'状态', name:'store_in__auditing',
						anchor:'100%', readOnly:true, editable:false,
						store: new Ext.data.SimpleStore({
							fields:['value','text'],
							data: Dataaudit
						}),
						emptyText: jx.star.select,
						mode: 'local',
						triggerAction: 'all',
						valueField: 'value',
						displayField: 'text',
						value: Dataaudit[0][0]},
					{xtype:'combo', fieldLabel:'仓库', name:'store_in__house_name',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, allowBlank:false, labelStyle:'color:#0077FF;', labelSeparator:'*', editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('store_in', combo, 'node_store_in_form');
						}}},
					{xtype:'textfield', fieldLabel:'送货人', name:'store_in__send_user', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'制单员', name:'store_in__pur_user', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'制单员ID', name:'store_in__pur_userid', defaultval:'fun_getUserId()', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'仓管员ID', name:'store_in__edit_userid', anchor:'100%'}
				]
			}
			]
		},{
			anchor:'100%',
			border:false,
			layout:'column',
			autoHeight:true,
			items:[{
				border:false,
				columnWidth:0.99,
				layout:'form',
				items:[
					{xtype:'textarea', fieldLabel:'入库说明', name:'store_in__in_desc', anchor:'100%', height:120, maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_in'
	};

	JxFormSub.formAddSub(config);

	﻿
	
	return new Jxstar.FormNode(config);
}