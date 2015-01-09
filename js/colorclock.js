$(function(){
    var h,m,s;
    var note=['IT\'LL ROCK','GOT IT','COPIED','PASTE ME'];
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

    $(document).on("mousemove",function(event){
        $(".fullscreen").css("visibility","visible");
        setTimeout(function(){
            if(!($(".fullscreen").is(":hover"))){
                $(".fullscreen").css("visibility","hidden");
            }            
        },500)
    });

    $(".fullscreen").on("click",function(event){
        if(document.webkitIsFullScreen || document.fullScreen || document.mozfullScreen){
            $(this).removeClass("fullscreened");
            exitFullscreen();
        }else{
            $(this).addClass("fullscreened");
            requestFullscreen();
        }
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
    $(".question").on("click",function(){
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

    function requestFullscreen() {
      if(document.body.requestFullscreen) {
        document.body.requestFullscreen();
      } else if(document.body.mozRequestFullScreen) {
        document.body.mozRequestFullScreen();
      } else if(document.body.webkitRequestFullscreen) {
        document.body.webkitRequestFullscreen();
      }
    }

    function exitFullscreen() {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
});
