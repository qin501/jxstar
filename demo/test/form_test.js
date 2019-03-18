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
					{xtype:'textfield', fieldLabel:'地址', name:'test__address', anchor:'100%', maxLength:50},
					{xtype:'combo', fieldLabel:'用户名', name:'test__username',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('test', combo, 'node_test_form');
						}}}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'combo', fieldLabel:'密码', name:'test__password',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, editable:true,
						listeners:{afterrender: function(combo) {
							JxSelect.initCombo('test', combo, 'node_test_form');
						}}},
					{xtype:'hidden', fieldLabel:'主键', name:'test__user_id', anchor:'100%'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'test'
	};

	
	
	
	return new Jxstar.FormNode(config);
}