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
					{xtype:'textfield', fieldLabel:'仓库编码', name:'store_house__house_code', anchor:'100%', maxLength:20},
					{xtype:'textfield', fieldLabel:'仓库名称', name:'store_house__house_name', anchor:'100%', maxLength:50}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'仓库描述', name:'store_house__house_desc', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'仓库ID', name:'store_house__house_id', anchor:'100%'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_house'
	};

	
	
	
	return new Jxstar.FormNode(config);
}