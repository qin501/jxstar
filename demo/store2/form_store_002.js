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
					{xtype:'textfield', fieldLabel:'仓库', name:'store_in002__house_name', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'单号', name:'store_in002__in_code', anchor:'100%', maxLength:50},
					{xtype:'numberfield', fieldLabel:'入库金额', name:'store_in002__in_money', anchor:'100%', maxLength:22},
					{xtype:'hidden', fieldLabel:'仓管员ID', name:'store_in002__edit_userid', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'主键', name:'store_in002__in_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'combo', fieldLabel:'状态', name:'store_in002__in_auditing',
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
					{xtype:'datefield', fieldLabel:'入库日期', name:'store_in002__in_date', defaultval:'fun_getToday()', format:'Y-m-d', anchor:'100%'},
					{xtype:'textfield', fieldLabel:'仓管员', name:'store_in002__edit_user', defaultval:'fun_getUserName()', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'送货人', name:'store_in002__send_user', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'仓库ID', name:'store_in002__house_id', anchor:'100%'}
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
				columnWidth:0.9487,
				layout:'form',
				items:[
					{xtype:'textarea', fieldLabel:'入库说明', name:'store_in002__in_desc', anchor:'100%', height:90, maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_002'
	};

	
	
	
	return new Jxstar.FormNode(config);
}