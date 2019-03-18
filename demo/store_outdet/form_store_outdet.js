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
					{xtype:'textfield', fieldLabel:'货位', name:'store_outdet__local_code', anchor:'100%', maxLength:50},
					{xtype:'numberfield', fieldLabel:'出库数量', name:'store_outdet__out_num', anchor:'100%', maxLength:22},
					{xtype:'hidden', fieldLabel:'库存ID', name:'store_outdet__store_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'主键', name:'store_outdet__out_detid', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'numberfield', fieldLabel:'出库金额', name:'store_outdet__out_money', anchor:'100%', maxLength:22},
					{xtype:'numberfield', fieldLabel:'单价', name:'store_outdet__out_price', anchor:'100%', maxLength:22},
					{xtype:'hidden', fieldLabel:'物资ID', name:'store_outdet__mat_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'出库单ID', name:'store_outdet__out_id', anchor:'100%'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_outdet'
	};

	
	
	
	return new Jxstar.FormNode(config);
}