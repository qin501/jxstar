﻿	//添加自定义查询按钮
		createjs: function(){
			var params = 'funid=fun_texts&pagetype=editgrid&eventcode=createjs&type='+ type +'&lang=zh&projectpath=' + 

			//生成文件后自动加载该文件
			var hdcall = function() {
				Request.loadJS('/public/locale/jxstar-lang-zh.js');
			};

			//发送请求
			Request.postRequest(params, hdcall);
		},
	};