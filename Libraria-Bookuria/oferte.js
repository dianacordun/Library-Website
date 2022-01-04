window.onload=function ()
{
    document.getElementById("t1").onmouseover = function() {mouseOver1()};
    document.getElementById("t1").onmouseout = function() {mouseOut1()};
    document.getElementById("t2").onmouseover = function() {mouseOver2()};
    document.getElementById("t2").onmouseout = function() {mouseOut2()};
    document.getElementById("t3").onmouseover = function() {mouseOver3()};
    document.getElementById("t3").onmouseout = function() {mouseOut3()};


    function mouseOver1() {
        var of = document.getElementById("t2");
        var prop = window.getComputedStyle(of,null).getPropertyValue("color");
        document.getElementById("t1").style.color = prop;
        document.getElementById("t1").style.fontSize = "250%";
    }

    function mouseOut1() {
        document.getElementById("t1").style.color = "rgb(212, 90, 131)";
        document.getElementById("t1").style.fontSize = "190%";

    }
    function mouseOver2() {
        var of = document.getElementById("t3");
        var prop = window.getComputedStyle(of,null).getPropertyValue("color");
        document.getElementById("t2").style.color = prop;
        document.getElementById("t2").style.fontSize = "250%";
    }

    function mouseOut2() {
        document.getElementById("t2").style.color = "saddlebrown";
        document.getElementById("t2").style.fontSize = "190%";
    }
    function mouseOver3() {
        var of = document.getElementById("t1");
        var prop = window.getComputedStyle(of,null).getPropertyValue("color");
        document.getElementById("t3").style.color = prop;
        document.getElementById("t3").style.fontSize = "250%";
    }

    function mouseOut3() {
        document.getElementById("t3").style.color = "rgb(71, 117, 111)";
        document.getElementById("t3").style.fontSize = "190%";
    }


}
