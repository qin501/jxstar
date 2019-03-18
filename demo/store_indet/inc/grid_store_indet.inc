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