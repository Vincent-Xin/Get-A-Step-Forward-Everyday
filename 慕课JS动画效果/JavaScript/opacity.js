var timerOpa=null;
	var alpha=30;
	function toOpacity(iTarget){
		clearInterval(timerOpa);
		var oOpa=document.getElementById('opa');
		timerOpa=setInterval(function(){
			var speedOpa=0;
			if(alpha>iTarget){
				speedOpa=-2;	
			}else{
				speedOpa=2;
			}
			if(alpha==iTarget){
				clearInterval(timerOpa);
			}else{
				alpha=alpha+speedOpa;
				oOpa.style.opacity=alpha/100;
				oOpa.style.filter='alpha(opacity:'+alpha+')';
			}
		},5)
	}