Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'物资编码', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TriggerField({
			maxLength:50,
			editable:false,
			triggerClass:'x-form-search-trigger', 
			onTriggerClick: function() {
				var selcfg = {"pageType":"combogrid", "nodeId":"store_mat", "layoutPage":"/public/layout/layout_tree.js", "sourceField":"", "targetField":"", "whereSql":"", "whereValue":"", "whereType":"", "isSame":"1", "isShowData":"1", "isMoreSelect":"0","isReadonly":"1","queryField":"","likeType":"","fieldName":"store_mat.mat_code"};
				JxSelect.createSelectWin(selcfg, this, 'node_store_indet_editgrid');
			}
		})}, field:{name:'store_mat__mat_code',type:'string'}},
	{col:{header:'物资名称', width:100, sortable:true}, field:{name:'store_mat__mat_name',type:'string'}},
	{col:{header:'型号', width:100, sortable:true}, field:{name:'store_mat__mat_size',type:'string'}},
	{col:{header:'入库数量', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_indet__in_num',type:'string'}},
	{col:{header:'单位', width:100, sortable:true}, field:{name:'store_mat__mat_unit',type:'string'}},
	{col:{header:'单价(元)', width:100, sortable:true, align:'right',renderer:JxUtil.formatNumber(2)}, field:{name:'store_mat__mat_price',type:'float'}},
	{col:{header:'入库金额', width:100, sortable:true}, field:{name:'store_indet__in_money',type:'string'}},
	{col:{header:'货位', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_indet__local_code',type:'string'}},
	{col:{header:'备注', width:100, sortable:true}, field:{name:'store_mat__mat_desc',type:'string'}},
	{col:{header:'物资ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_indet__mat_id',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_indet__indet_id',type:'string'}},
	{col:{header:'入库单ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_indet__in_id',type:'string'}},
	{col:{header:'分类编码', width:100, sortable:true, hidden:true}, field:{name:'store_mat__type_code',type:'string'}},
	{col:{header:'分类名称', width:100, sortable:true, hidden:true}, field:{name:'store_mat__type_name',type:'string'}},
	{col:{header:'分类ID', width:100, sortable:true, colindex:10000, hidden:true}, field:{name:'store_mat__type_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'store_indet'
	};
	
	
	config.initpage=function(gridNode){
     var grid=gridNode.page;
     grid.on('afteredit',function(event){
    	 
         if(event.field=='store_indet__in_num'){
           
             var r=event.record;
             var num1=r.get('store_indet__in_num');
             var num2=r.get('store_mat__mat_price');
             var num3=parseFloat(num1)*parseFloat(num2);
             r.set('store_indet__in_money',num3);
             r.set('store_in__in_money',num3);

         }
     })
 }﻿
		
	return new Jxstar.GridNode(config);
}