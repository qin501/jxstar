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