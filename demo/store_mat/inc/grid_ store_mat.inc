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