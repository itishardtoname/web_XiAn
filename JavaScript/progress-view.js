function ProgressView(){
	let top = document.getElementById("top");
	let left = document.getElementById("left");
	let top_width=0;
	let left_height=0;
	top.style.width=top_width+"px";
	top.style.height=left_height+"px";

    let Time1 = setInterval(function(){
        top_width+=10;
        top.style.width=top_width+"px";
        if(top_width > 1400){
            clearInterval(Time1);
        }
    },10);

    let Time2 = setInterval(function(){
        left_height+=10;
        left.style.height=left_height+"px";
        if(left_height > 600){
            clearInterval(Time2);
        }
    },22);

}
window.onload = ()=>{
    ProgressView();
};
