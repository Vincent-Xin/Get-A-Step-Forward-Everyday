window.onload = function(){
	waterfall('main','box');

	var dataJson={
		"images":[
				{"name":"1.jpg"},
				{"name":"2.jpg"},
				{"name":"3.jpg"},
				{"name":"4.jpg"},
				{"name":"5.jpg"},
				{"name":"6.jpg"},
				{"name":"7.jpg"},
				{"name":"8.jpg"},
				{"name":"9.jpg"},
				{"name":"10.jpg"},
				{"name":"11.jpg"},
				{"name":"12.jpg"},
				{"name":"13.jpg"},
				{"name":"14.jpg"},
				{"name":"15.jpg"},
				{"name":"16.jpg"},
				{"name":"17.jpg"},
				{"name":"18.jpg"},
				{"name":"19.jpg"},
				{"name":"20.jpg"},
				{"name":"21.jpg"},
				{"name":"22.jpg"}
		]
	};

	window.onscroll=function(){
		if(checkScrollSlide()){
			var oParent=document.getElementById('main');
			for(var i=0;i<dataJson.images.length;i++){
				var oImg=document.createElement('img');
				oImg.src="images/"+dataJson.images[i].name;
				var pic=document.createElement('div');
				pic.className='pic';
				var box=document.createElement('div');
				box.className='box';
				pic.appendChild(oImg);
				box.appendChild(pic);
				oParent.appendChild(box);
				// if(i=dataJson.images.length){
				// 	window.removeEventListener('onscroll',onScrl,false);
				// }
			}
			waterfall('main','box');
		}
	
	}
}



function waterfall(parent,box){
	//取出main下所有class为box的元素
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';
	var oArr=[];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			oArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,oArr);
			var index=getMinhIndex(oArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxW*index+'px';
			oArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array();
		oEles=parent.getElementsByTagName("*");
		for(var i=0;i<oEles.length;i++){
			if(oEles[i].className==clsName){
				boxArr.push(oEles[i]);
			}
		}
		return boxArr;
}

function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val)
			return i;
	}
}

function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var	oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var	scollT=document.body.scollTop || document.documentElement.scollTop;
	var	clientH=document.body.clientHeight || document.documentElement.clientHeight;
		return (lastBoxH<scollT+clientH)?true:false;
}