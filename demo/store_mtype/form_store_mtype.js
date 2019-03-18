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
					{xtype:'textfield', fieldLabel:'分类编码', name:'store_mtype__type_code', anchor:'100%', maxLength:20},
					{xtype:'textfield', fieldLabel:'级别', name:'store_mtype__type_level', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'主键', name:'store_mtype__type_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'分类名称', name:'store_mtype__type_name', anchor:'100%', maxLength:50}
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
					{xtype:'textarea', fieldLabel:'分类描述', name:'store_mtype__type_desc', anchor:'100%', height:120, maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'store_mtype'
	};

	
	
	
	return new Jxstar.FormNode(config);
}