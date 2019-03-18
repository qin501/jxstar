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
					{xtype:'textfield', fieldLabel:'入库金额', name:'store_indet01__in_money', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'货位', name:'store_indet01__local_code', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'主键', name:'store_indet01__indet_id', anchor:'100%', maxLength:25}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'入库数量', name:'store_indet01__in_num', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'物资ID', name:'store_indet01__mat_id', anchor:'100%', maxLength:50},
					{xtype:'textfield', fieldLabel:'入库单ID', name:'store_indet01__in_id', anchor:'100%', maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_indet01'
	};

	
	
	
	return new Jxstar.FormNode(config);
}