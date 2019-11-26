window.onload = ()=>{
    const center =document.getElementById("center");
    const imgs = document.getElementsByClassName("bg-img");
    const little_circles = document.getElementsByClassName("little-circle");
    const  covers = document.getElementsByClassName("cover");
    const nav_img = document.getElementsByClassName("nav-img");
    center.style.animation = "circle linear 1s";
    show();
    function show() {
        let time = .5;
        for(let i = 0;i<little_circles.length;i++){
            little_circles[i].onmouseover = function(){
                covers[i].style.display = "block";
            };
            little_circles[i].onmouseout = function(){
                covers[i].style.display = "none";
            };
            little_circles[i].onclick = function () {
                center.style.background =  'url('+ nav_img[i].src + ') center center no-repeat';
                center.style.backgroundSize= "100% 100%";
                center.style.animation = `img linear ${time}s`;
                setTimeout((center)=>{
                    center.style.animation = "";
                },(time+0.1)*1000,center);
                setTimeout(function(){
                    window.location.href="http://www.baidu.com";
                },1200);
            };
        }
    }

    let num = 0;
    setInterval(function () {
        num++;
        num = num % imgs.length ;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = '0';
        }
        imgs[num].style.opacity = '1';
        imgs[num].style.transition = "opacity 1.5s"
    },4000);

};