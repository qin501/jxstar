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
					{xtype:'textfield', fieldLabel:'单号', name:'store_out__out_code', anchor:'100%', maxLength:20},
					{xtype:'datefield', fieldLabel:'出库日期', name:'store_out__out_date', defaultval:'fun_getToday()', format:'Y-m-d', anchor:'100%'},
					{xtype:'combo', fieldLabel:'仓管员', name:'store_out__edit_user',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:20, editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('store_out', combo, 'node_store_out_form');
						}}},
					{xtype:'textfield', fieldLabel:'出库金额', name:'store_out__out_money', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'主键', name:'store_out__out_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'仓库ID', name:'store_out__house_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'combo', fieldLabel:'状态', name:'store_out__auditing',
						anchor:'100%', editable:false,
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
					{xtype:'combo', fieldLabel:'仓库', name:'store_out__house_name',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('store_out', combo, 'node_store_out_form');
						}}},
					{xtype:'textfield', fieldLabel:'领料人', name:'store_out__send_user', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'仓管员ID', name:'store_out__edit_userid', defaultval:'fun_getUserId()', anchor:'100%'}
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
					{xtype:'textarea', fieldLabel:'出库说明', name:'store_out__out_desc', anchor:'100%', height:120, maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_out'
	};

	JxFormSub.formAddSub(config);

	
	
	return new Jxstar.FormNode(config);
}