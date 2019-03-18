Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'*物资名称', width:100, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:50, allowBlank:false
		})}, field:{name:'store_mat__mat_name',type:'string'}},
	{col:{header:'单价(元)', width:100, sortable:true, align:'right',
		editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.NumberField({
			maxLength:22
		}),renderer:JxUtil.formatNumber(2)}, field:{name:'store_mat__mat_price',type:'float'}},
	{col:{header:'型号', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_mat__mat_size',type:'string'}},
	{col:{header:'单位', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_mat__mat_unit',type:'string'}},
	{col:{header:'分类编码', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_mat__type_code',type:'string'}},
	{col:{header:'*物资编码', width:100, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TextField({
			maxLength:50, allowBlank:false
		})}, field:{name:'store_mat__mat_code',type:'string'}},
	{col:{header:'备注', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_mat__mat_desc',type:'string'}},
	{col:{header:'*物资分类', width:100, sortable:true, editable:true, hcss:'color:#0077FF;',
		editor:new Ext.form.TriggerField({
			maxLength:50,
			editable:false, allowBlank:false,
			triggerClass:'x-form-search-trigger', 
			onTriggerClick: function() {
				var selcfg = {"pageType":"combogrid", "nodeId":"store_mtype", "layoutPage":"/public/layout/layout_tree.js", "sourceField":"", "targetField":"", "whereSql":"", "whereValue":"", "whereType":"", "isSame":"1", "isShowData":"1", "isMoreSelect":"0","isReadonly":"1","queryField":"","likeType":"","fieldName":"store_mat.type_name"};
				JxSelect.createSelectWin(selcfg, this, 'node_store_mat_editgrid');
			}
		})}, field:{name:'store_mat__type_name',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000}, field:{name:'store_mat__mat_id',type:'string'}},
	{col:{header:'分类ID', width:100, sortable:true, colindex:10000, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'store_mat__type_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'store_mat'
	};
	
	config.param.notNullFields = 'store_mat__mat_code;store_mat__mat_name;store_mat__type_name;';
	
	config.eventcfg = {  
     myevebt: function(){ 
       var params = 'funid=store_mat&eventcode=myevebt&testdata=1231678212121212131312321342141321321321312';
       var endcall = function(data){
           console.log(data);
           alert(data);
       }
         
       Request.postRequest(params, endcall); 
     }
 }
		
	return new Jxstar.GridNode(config);
}