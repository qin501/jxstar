Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var Dataaudit = Jxstar.findComboData('audit');

	var cols = [
	{col:{header:'状态', width:100, sortable:true, align:'center',
		editable:false,
		editor:new Ext.form.ComboBox({
			store: new Ext.data.SimpleStore({
				fields:['value','text'],
				data: Dataaudit
			}),
			emptyText: jx.star.select,
			mode: 'local',
			triggerAction: 'all',
			valueField: 'value',
			displayField: 'text',
			editable:false,
			value: Dataaudit[0][0]
		}),
		renderer:function(value){
			for (var i = 0; i < Dataaudit.length; i++) {
				if (Dataaudit[i][0] == value)
					return Dataaudit[i][1];
			}
		}}, field:{name:'store_out__auditing',type:'string'}},
	{col:{header:'单号', width:100, sortable:true}, field:{name:'store_out__out_code',type:'string'}},
	{col:{header:'出库日期', width:100, sortable:true, align:'center',
		renderer:function(value) {
			return JxUtil.renderDate(value, 'Y-m-d');
		}}, field:{name:'store_out__out_date',type:'date'}},
	{col:{header:'仓库', width:100, sortable:true}, field:{name:'store_out__house_name',type:'string'}},
	{col:{header:'仓管员', width:100, sortable:true}, field:{name:'store_out__edit_user',type:'string'}},
	{col:{header:'出库说明', width:100, sortable:true, hidden:true}, field:{name:'store_out__out_desc',type:'string'}},
	{col:{header:'领料人', width:100, sortable:true}, field:{name:'store_out__send_user',type:'string'}},
	{col:{header:'出库金额', width:100, sortable:true}, field:{name:'store_out__out_money',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_out__out_id',type:'string'}},
	{col:{header:'仓管员ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_out__edit_userid',type:'string'}},
	{col:{header:'仓库ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_out__house_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'store_out'
	};
	
	
	
		
	return new Jxstar.GridNode(config);
}