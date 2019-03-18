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
					{xtype:'textfield', fieldLabel:'密码', name:'user__password', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'主键', name:'user__user_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'用户名', name:'user__username', anchor:'100%', maxLength:50}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'user'
	};

	
	
	
	return new Jxstar.FormNode(config);
}