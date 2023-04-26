let ham = document.querySelector(".ham");
let home = document.querySelector("#home");
let header = document.querySelector("header");
let list = document.querySelector(".ham-ul");
let i=0;
ham.onclick = ()=>{
	if (i == 0) {
		list.style.cssText = "display:block;"
		header = header.offsetHeight + "px;";
		home.style.cssText = "margin-top:"+header;
		i=1;
	}
	else{
		list.style.cssText = "display:none;"
		header = header.offsetHeight + "px;";
		home.style.cssText = "margin-top:"+header;
		i=0;
	}
}