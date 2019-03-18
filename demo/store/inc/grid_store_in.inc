config.eventcfg = {
	newcode: function(){
		var records = this.grid.getSelectionModel().getSelections();
		if (!JxUtil.selectone(records)) return;
		
		var self = this;
		//取选择记录的主键值
		var params = 'funid='+ self.define.nodeid;
		for (var i = 0; i < records.length; i++) {
			params += '&keyid=' + records[i].get(self.define.pkcol);
		}

		//设置请求的参数
		params += '&pagetype=grid&eventcode=newcode';

		//执行处理的内容
		var endcall = function(data) {
			//重新加载数据
			//self.grid.getStore().reload();
            
            alert('创建条码数量：'+data.codenum);
		};

		//发送请求
		Request.postRequest(params, endcall);
	}
}