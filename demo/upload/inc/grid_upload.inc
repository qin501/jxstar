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