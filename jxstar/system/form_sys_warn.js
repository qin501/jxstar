﻿Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};
	
	var Datataskstate = Jxstar.findComboData('taskstate');
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
				columnWidth:0.33,
				layout:'form',
				items:[
					{xtype:'trigger', fieldLabel:'功能名称', name:'warn_base__fun_name',
						anchor:'100%', triggerClass:'x-form-search-trigger',
						maxLength:50, allowBlank:false, labelStyle:'color:#0077FF;', labelSeparator:'*', editable:false,
						onTriggerClick: function() {
							var selcfg = {"pageType":"combogrid", "nodeId":"sel_fun", "layoutPage":"/public/layout/layout_tree.js", "sourceField":"fun_base.fun_name;fun_id", "targetField":"warn_base.fun_name;fun_id", "whereSql":"reg_type in ('main', 'treemain')", "whereValue":"", "whereType":"", "isSame":"0", "isShowData":"1", "isMoreSelect":"0","isReadonly":"1","queryField":"","likeType":"","fieldName":"warn_base.fun_name"};
							JxSelect.createSelectWin(selcfg, this, 'node_sys_warn_form');
						}},
					{xtype:'hidden', fieldLabel:'执行间隔时间值', name:'warn_base__run_plan', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'判断间隔时间值', name:'warn_base__time_value', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'触发事件代码', name:'warn_base__event_code', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'邮件模板ID', name:'warn_base__templet_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.33,
				layout:'form',
				items:[
					{xtype:'textfield', fieldLabel:'上报名称', name:'warn_base__warn_name', allowBlank:false, labelStyle:'color:#0077FF;', labelSeparator:'*', anchor:'100%', maxLength:50},
					{xtype:'hidden', fieldLabel:'上次运行时间', name:'warn_base__run_date', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'是否保留日志', name:'warn_base__has_log', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'保留日志条数', name:'warn_base__log_num', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'上报功能ID', name:'warn_base__fun_id', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'上报ID', name:'warn_base__warn_id', anchor:'100%'}
				]
			},{
				border:false,
				columnWidth:0.33,
				layout:'form',
				items:[
					{xtype:'combo', fieldLabel:'任务状态', name:'warn_base__run_state', defaultval:'1',
						anchor:'100%', readOnly:true, editable:false,
						store: new Ext.data.SimpleStore({
							fields:['value','text'],
							data: Datataskstate
						}),
						emptyText: jx.star.select,
						mode: 'local',
						triggerAction: 'all',
						valueField: 'value',
						displayField: 'text',
						value: Datataskstate[0][0]},
					{xtype:'hidden', fieldLabel:'是否待办任务', name:'warn_base__is_assign', defaultval:'1', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'是否发送短信', name:'warn_base__send_sms', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'是否发送邮件', name:'warn_base__send_email', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'根据权限通知', name:'warn_base__use_role', anchor:'100%'},
					{xtype:'hidden', fieldLabel:'上报用途描述', name:'warn_base__warn_memo', anchor:'100%'}
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
					{xtype:'textarea', fieldLabel:'上报条件SQL', name:'warn_base__where_sql', anchor:'100%', height:90, maxLength:200},
					{xtype:'hidden', fieldLabel:'上报消息描述', name:'warn_base__warn_desc', anchor:'100%'}
				]
			}
			]
		}]
	}];
	
	config.param = {
		items: items,
		funid: 'sys_warn'
	};

	config.param.formWidth = '100%';

	config.initpage = function(fnode) {
	
	return new Jxstar.FormNode(config);
}