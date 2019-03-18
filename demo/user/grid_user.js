Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'密码', width:100, sortable:true}, field:{name:'user__address',type:'string'}},
	{col:{header:'密码', width:100, sortable:true}, field:{name:'user__password',type:'string'}},
	{col:{header:'用户名', width:100, sortable:true}, field:{name:'user__username',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'user__user_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '0',
		isshow: '1',
		funid: 'user'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}