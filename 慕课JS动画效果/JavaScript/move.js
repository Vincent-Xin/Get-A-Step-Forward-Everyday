	var timer=null;
	function startMove(iTarget){
		clearInterval(timer);
		var oDiv=document.getElementById('div1');
		timer=setInterval(function(){
			var speed=0;
			if(oDiv.offsetLeft>iTarget){
				speed=-2;	
			}else{
				speed=2;
			}
			if(oDiv.offsetLeft==iTarget){
				clearInterval(timer);
			}else{
				oDiv.style.left=oDiv.offsetLeft+speed+'px';
			}
		},5)
	}