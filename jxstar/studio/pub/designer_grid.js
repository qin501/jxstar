/*
 * Copyright 2011 Guangzhou Donghong Software Technology Inc.
 * Licensed under the www.jxstar.org
 */
Jxstar.currentPage={nodeId:"",target:"",createDesign:function(nodeId,target){if(nodeId==null||nodeId.length==0){JxHint.alert(jx.star.noid);return}this.nodeId=nodeId;this.target=target;var a=(new Date()).getTime();var self=this;var hdCall=function(f){var node=(eval(f))();node.config.eventcfg=self.createEventCfg(nodeId);node.setState("1");var page=node.showPage();if(page==null){return}var subpage=target.getComponent(0);if(subpage!=null){target.remove(subpage,true)}var store=page.getStore();var record=new (store.reader.recordType)({});store.add(record);target.add(page);target.doLayout();var b=(new Date()).getTime();JxHint.hint("use time(ms): "+(b-a))};var params="funid=sys_fun_base&eventcode=query_griddes&projectpath="+Jxstar.session.project_path;params+="&selfunid="+nodeId;Request.dataRequest(params,hdCall,{type:"xml",wait:true})},createEventCfg:function(c){var i=this;var e=function(){var j=function(){var l="funid=sys_fun_base&eventcode=deletegd";l+="&selfunid="+c+"&selpagetype=grid";var k=function(){i.createDesign(i.nodeId,i.target)};Request.postRequest(l,k)};Ext.Msg.confirm(jx.base.hint,jx.fun.delyes,function(k){if(k=="yes"){j()}})};var g=function(){var k="funid=sys_fun_base&eventcode=savegd";k+="&selfunid="+c+"&selpagetype=grid";var j=this.grid.getState();var q=this.grid.colModel;var m=j.columns;var o="";if(m){for(var l=0,n=m.length;l<n;l++){var r=m[l];var p=q.getColumnById(r.id);if(p){if(!(p.dataIndex)||p.dataIndex.length==0){continue}o+="{";o+="n:"+p.dataIndex+",";o+="w:"+r.width+",";o+="h:"+(r.hidden?"true":"false");o+="}-"}}if(m.length>0){o=o.substring(0,o.length-1)}}k+="&content="+o;Request.postRequest(k,null)};var a=function(){var j="funid=sys_fun_base&eventcode=creategd";j+="&selfunid="+c+"&selpagetype=grid&projectpath="+Jxstar.session.project_path;Request.postRequest(j,null)};var f=function(){var j={where_sql:"fun_attr.attr_type = ? and fun_attr.fun_id = ?",where_type:"string;string",where_value:"grid;"+c};var k=function(m){JxUtil.delay(500,function(){m.fkValue=c;m.attr_type="grid";Jxstar.loadData(m,j)})};var l=Jxstar.findNode("fun_attrdes");Jxstar.showData({filename:l.gridpage,title:l.nodetitle,width:760,height:350,nodedefine:l,callback:k})};var d=function(){JxUtil.extcode(c,"grid")};var h=function(){var k="funid=sys_fun_base&des_funid="+c;k+="&dataType=byte&eventcode=expdesg&user_id="+Jxstar.session.user_id;var j=Jxstar.path+"/fileAction.do?"+k+"&_dc="+(new Date()).getTime();Request.postFormURL(j)};var b=function(){var k="funid=sys_fun_base&eventcode=impdesg&des_funid="+c;var j=function(l){i.createDesign(i.nodeId,i.target)};JxUtil.showImpWin(k,j)};return{deletegd:e,savegd:g,creategd:a,setattr:f,extcode:d,expdes:h,impdes:b}}};