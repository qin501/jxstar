Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};
	
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
					{xtype:'textfield', fieldLabel:'状态', name:'store_in01__auditing', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'仓库', name:'store_in01__house_name', anchor:'100%', maxLength:50},
					{xtype:'datefield', fieldLabel:'入库日期', name:'store_in01__in_date', format:'Y-m-d', anchor:'100%'},
					{xtype:'textfield', fieldLabel:'入库金额', name:'store_in01__in_money', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'送货人', name:'store_in01__send_user', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'主键', name:'store_in01__in_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'仓库ID', name:'store_in01__house_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'仓管员', name:'store_in01__edit_user', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'单号', name:'store_in01__in_code', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'入库说明', name:'store_in01__in_desc', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'制单员', name:'store_in01__pur_user', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'制单员ID', name:'store_in01__pur_userid', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'仓管员ID', name:'store_in01__edit_userid', anchor:'100%'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_in01'
	};

	JxFormSub.formAddSub(config);

	
	
	return new Jxstar.FormNode(config);
}