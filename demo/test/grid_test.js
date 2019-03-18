Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var Dataagreenum = Jxstar.findComboData('agreenum');

	var cols = [
	{col:{header:'地址', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'test__address',type:'string'}},
	{col:{header:'密码', width:100, sortable:true, align:'center',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Dataagreenum
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Dataagreenum[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Dataagreenum.length; i++) {
				if (Dataagreenum[i][0] == value)
					return Dataagreenum[i][1];
			}
		}}, field:{name:'test__password',type:'string'}},
	{col:{header:'用户名', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TriggerField({
			maxLength:50,
			editable:false,
			triggerClass:'x-form-search-trigger', 
			onTriggerClick: function() {
				var selcfg = {"pageType":"combogrid", "nodeId":"store_house", "layoutPage":"/public/layout/layout_tree.js", "sourceField":"store_house.house_name", "targetField":"test.username", "whereSql":"", "whereValue":"", "whereType":"", "isSame":"1", "isShowData":"1", "isMoreSelect":"0","isReadonly":"1","queryField":"","likeType":"all","fieldName":"test.username"};
				JxSelect.createSelectWin(selcfg, this, 'node_test_editgrid');
			}
		})}, field:{name:'test__username',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:25
		})}, field:{name:'test__user_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'test'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}