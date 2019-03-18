Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'数字一', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'number__num1',type:'string'}},
	{col:{header:'数字二', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'number__num2',type:'string'}},
	{col:{header:'数字三', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'number__num3',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:25
		})}, field:{name:'number__number_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'number'
	};
	
	
	config.initpage=function(gridNode){
    var grid=gridNode.page;
    grid.on('afteredit',function(event){
        var r=event.record;
        if(event.field=='number__num2'){
            var num1=r.get('number__num1');
            var num2=r.get('number__num2');
            var num3=parseFloat(num1)+parseFloat(num2);
            r.set('number__num3',num3);
        }
    })
    
    
}
		
	return new Jxstar.GridNode(config);
}