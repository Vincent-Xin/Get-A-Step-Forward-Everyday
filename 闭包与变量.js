var lis=menu.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
   	lis[i].onmouseover=function(){
       	lis[i].style.background="#ccc";
   	}
}
//可能由于闭包的关系，alert（i）==5；
//此函数事件for循环不能正确执行，也可能由于闭包

//用this替代lis[i]
//this.style.background="#ccc";