
    var mytime = setInterval(function(){
        getTime();
    },1000);
    function getTime(){
        var d = new Date();
        var t = d.toLocaleString();
        document.getElementById("time").innerHTML = t;
    }
    function stopTime(){
        clearInterval(mytime);
    }

   function fun() {
       var name = "https://wenku.baidu.com/view/a9048508492fb4daa58da0116c175f0e7cd119d8.html";
       document.getElementById("test").setAttribute("href",name);
       document.getElementById("test").innerHTML = "三年级点我";
       document.getElementById("test").style.color = "springgreen";
   }

    function fun1() {
        var name = "https://wenku.baidu.com/view/a9048508492fb4daa58da0116c175f0e7cd119d8.html";
        document.getElementById("test").setAttribute("href",name);
        document.getElementById("test").innerHTML = "四年级点我";
        document.getElementById("test").style.color = "springgreen";
    }


