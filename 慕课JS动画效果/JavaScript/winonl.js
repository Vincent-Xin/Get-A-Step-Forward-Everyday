window.onload=function(){
		
		var oDiv=document.getElementById('div1');
		oDiv.onmouseover = function (){
			startMove(0);
		}
		oDiv.onmouseout = function(){
			startMove(-200);
		}

		var oOpa=document.getElementById('opa');
		oOpa.onmouseover = function (){
			toOpacity(100);
		}
		oOpa.onmouseout = function(){
			toOpacity(30);
		}

		var oSpd=document.getElementById('spd');
		oSpd.onmouseover = function (){
			speedDownMove(0);
		}
		oSpd.onmouseout = function(){
			speedDownMove(-200);
		}

		var oLi=document.getElementsByTagName('li');
		for(var i=0;i<oLi.length;i++){
			oLi[i].alpha=100;
			oLi[i].unTimer1=null;
			oLi[i].unTimer2=null;
			oLi[i].onmouseover=function(){
				extMove(this,300,30);
			}
			oLi[i].onmouseout=function(){
				extMove(this,100,100);
			}
		}


	}
	


	