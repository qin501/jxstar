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
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'}
				]
			},{
				border:false,
				columnWidth:0.495,
				layout:'form',
				items:[
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'},
					{xtype:'emptybox'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'xxx'
	};

	
	
	
	return new Jxstar.FormNode(config);
}