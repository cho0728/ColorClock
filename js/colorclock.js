$(function(){
    var h,m,s;
    var note=['IT WILL ROCK','GOT IT','COPIED'];
    var client = new ZeroClipboard($(".hex"));
    var client1 = new ZeroClipboard($(".rgb"));

    client.on( "copy", function(event){
        client.setText("#"+h+""+m+""+s+"");
    });

    client.on( "afterCopy", function(event){
        copied();
    });

    client1.on( "copy", function(event){
        client.setText("rgb("+h+","+m+","+s+")");
    });

    client1.on( "afterCopy", function(event){
        copied();
    });

    setInterval(function(){ 
        var t = new Date();
        h = ('0'+t.getHours()).slice(-2);
        m = ('0'+t.getMinutes()).slice(-2);
        s = ('0'+t.getSeconds()).slice(-2);
        $(".hex").text("# "+h+" "+m+" "+s);
        $(".rgb").text("RGB "+h+" "+m+" "+s);
        if($(".rgb").css("display")!="none"){
            $(".container").css("background-color","rgb("+h+","+m+","+s+")");
        }else{
            $(".container").css("background-color","#"+h+""+m+""+s+"");            
        }         
    }, 100);
    $(".question").bind("click",function(){
        if($(".rgb").css("display")!="none"){
            $(".rgb").css("display","none");
            $(".hex").css("display","block");
            $(".question a").text("HEX");
        }else{
            $(".rgb").css("display","block");
            $(".hex").css("display","none");
            $(".question a").text("RGB");            
        }
    });

    function copied(){
        var randNote = note[Math.round(Math.random() * (note.length - 1))];
        $(".copy").text(randNote);
        $(".box").css("visibility","hidden");
        $(".copy").fadeIn();
        setTimeout(function(){
            $(".copy").fadeOut(200,function(){
                $(".box").css("visibility","visible");  
            });          
        },1000)
    }
});
