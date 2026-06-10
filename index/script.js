function navigation(){
    x = document.getElementById("myTopNav");
    if(x.classname === "topnav"){
        x.classname +=" responsive";
    } else{
        x.classname ="topnav";
    }
}
function bar(){
    const button = document.getElementById("menubutton");
    const menu = document.getElementById("secretmenu");
    button.addEventListener("click",function(){
    menu.classList.toggle("show");
    });
}