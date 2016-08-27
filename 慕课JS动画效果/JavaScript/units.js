	function extMove(obj,iTarget1,iTarget2){
		clearInterval(obj.unTimer1);
		clearInterval(obj.unTimer2);
		obj.unTimer1=setInterval(function(){
			var speed=(iTarget1-obj.offsetWidth)/20;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(obj.offsetWidth==iTarget1){
				clearInterval(obj.unTimer);
			}else{
				obj.style.width=obj.offsetWidth+speed+'px';
			}
		},20)
			
			obj.unTimer2=setInterval(function(){
			var speed2=(iTarget2-obj.alpha)/20;
			speed2=speed2>0?Math.ceil(speed2):Math.floor(speed2);
			// var speed2=0;
			// if (iTarget2>obj.alpha) {
			// 	speed2=10;
			// } else {
			// 	speed2=-10;
			// }
			if(obj.alpha==iTarget2){
				clearInterval(unTimer2);
			}else{
				obj.alpha=obj.alpha+speed2;
				obj.style.opacity=obj.alpha/100;
				obj.style.filter='obj.alpha(opacity:'+obj.alpha+')';
			}
		},20)	
	}

