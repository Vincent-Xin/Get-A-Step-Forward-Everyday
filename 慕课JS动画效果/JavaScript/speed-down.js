	var timerSpd=null;
	function speedDownMove(iTarget){
		clearInterval(timerSpd);
		var oSpd=document.getElementById('spd');
		timerSpd=setInterval(function(){
			var speed=(iTarget-oSpd.offsetLeft)/100;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(oSpd.offsetLeft==iTarget){
				clearInterval(timerSpd);
			}else{
				oSpd.style.left=oSpd.offsetLeft+speed+'px';
			}
		},5)
	}