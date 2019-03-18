Jxstar.currentPage = function() {
	var config = {param:{},initpage:function(page, define){},eventcfg:{}};

	var cols = [
	{col:{header:'上传文件名', width:100, sortable:true, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:50
		})}, field:{name:'upload__upload_name',type:'string'}},
	{col:{header:'主键', width:100, sortable:true, colindex:10000, editable:true, hcss:'color:#2E6DA4;',
		editor:new Ext.form.TextField({
			maxLength:25
		})}, field:{name:'upload__upload_id',type:'string'}}
	];
	
	config.param = {
		cols: cols,
		sorts: null,
		hasQuery: '1',
		isedit: '1',
		isshow: '1',
		funid: 'upload'
	};
	
	
	cols[cols.length] = {
	col: {
		header: '上传',
		width: 50,
		xtype: 'actioncolumn',
		align: 'center',
		items: [{
				icon: 'resources/images/icons/button/upload.gif',
				tooltip: '上传图片',
				handler: function (grid, rowIndex, colIndex) {
					var sm = grid.getSelectionModel();
					if (sm.selectRow) {
						sm.selectRow(rowIndex);
					} else {
						sm.select(rowIndex, colIndex);
					}
					var ge = grid.gridNode.event;
					//在这里写业务处理代码
					ge.addAttach('img_file');
				}
			}
		]
	}
};

/**
	cols[cols.length] = {col:
		{
            header:jx.bus.text48,
            width:50, xtype:'actioncolumn', 
            align:'center',
            items:[{
                //'上传'
				icon: 'resources/images/icons/button/upload.gif',
				tooltip: jx.bus.text49,//'上传图片',
				handler: function(grid, rowIndex, colIndex) {
					var sm = grid.getSelectionModel();
					if (sm.selectRow) {
						sm.selectRow(rowIndex);
					} else {
						sm.select(rowIndex, colIndex);
					}
					var ge = grid.gridNode.event;
					ge.addAttach('img_file');
				}
			}]
		}
	};
*/
		
	return new Jxstar.GridNode(config);
}