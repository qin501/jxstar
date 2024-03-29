﻿<%@ page contentType="text/html; charset=UTF-8"%>
<%
	String contextpath = request.getContextPath();
	String printparam = request.getParameter("printparam");
	if (printparam == null) printparam = "";
	String printurl = contextpath + "/reportAction.do?" + printparam;
%>
<html>
<head>
<title>打印窗口</title>
	<style media="print">
	.noprint {
		display:none;
	}
	</style>

	<style type="text/css">
	body {
		font-size:14px; text-align:left; margin:0px; background-color:#fafdff;
	}
	.printDiv {
		border-bottom:#336699 2px solid; padding:10px 0 2px 0; text-align:center; background-color:#deecfd;
	}
	.printBody {
		padding:10px 0 0 0; text-align:center; 
	}
	.printFrm {
		background-color:#ffffff; border:#336699 0px solid; width: 710px; height: 700px;
	}
	</style>
</head>
<body onload="loadIframeDiv();">
	<div class="printDiv noprint">
		<input onclick="printReport();" type="button" value="打印">
		<input onclick="javascript:window.close();" type="button" value="关闭">
		<div id="waitdiv" style="padding:10px 0 0 0; text-align:center; position:absolute; left:10px;">正在加载，请稍后......</div>
	</div>
	<div id="iframediv" class="printBody">
		<iframe id="printIframe" class="printFrm" frameborder=0 scrolling="no" src="<%=printurl%>">
		</iframe>
	</div>

	<script type="text/javascript">
	function load(){
		var win = window.opener;
		if (win && win.tmp_print_title) {
			document.title = win.tmp_print_title;
		}
		if (win && win.tmp_print_params) {
			var ifrm = $("printIframe");
			ifrm.src = "<%=printurl%>"+win.tmp_print_params;
		}
	}
	load();
	function isIE(){
		var ua = navigator.userAgent.toLowerCase();
		return ua.indexOf('msie') > 0;
	}
	function $(id){
		return document.getElementById(id);
	}
	function printReport(){
		if (isIE()) {
			//用$("printIframe").focus();方式也会打印iframe边框
			printIframe.focus();   
			window.print();
		} else {
			$("printIframe").contentWindow.print();
		}
	}
	function loadIframeDiv(){
		var ifbody = $("printIframe").contentWindow.document.body;
		if(ifbody){
			//printIframe初始隐藏会造成报表中图片不能显示
			resizeIframe();
			setTimeout(function(){
				$("waitdiv").style.display = 'none';
			}, 100);
		}else{
			setTimeout("loadIframeDiv()", 100);
		}
	}
	function resizeIframe(){
		var ifrm = $("printIframe");
		var ifbody = ifrm.contentWindow.document.body;
		
		var width = ifbody.scrollWidth;
		var height = ifbody.scrollHeight;
		//alert(width+';'+height);
		ifrm.style.width = width;
		ifrm.style.height = height;
	}
	</script>
</body>
</html>
