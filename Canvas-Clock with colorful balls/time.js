var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

canvas.width = 4/5*clientWidth;
canvas.height = 9/10*clientHeight;

var topStart = canvas.height/8+30;
var	leftStart = canvas.width/15;
	
var radius = canvas.width*(4/5)/58/2-1;
var baseColor = "rgba(255,255,255,0.8)";
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

var xSpeed = 5;
var ySpeed = 5;
var vgravity = 1.5;

var numWid = digit[0][0].length;
var numHei = digit[0].length;
var colonWid = digit[10][0].length;
var colonHei = digit[10].length;

var timeshow = document.getElementById("timeshow");
var dateshow = timeshow.getElementsByTagName("span")[0];

var colorballs = [];

window.onload = function(){
		curTime = new Date();
	var curYear = curTime.getFullYear();
	var curMon = curTime.getMonth()+1;
	var curDate = curTime.getDate();
	var curDay = curTime.getDay();
	var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

	dateshow.innerHTML = curYear+" 年 "+curMon+" 月 "+curDate+" 日 "+weekday[curDay]+"：";

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	// var curTime = new Date(); 
		curHour = curTime.getHours();
		curMin = curTime.getMinutes();
		curSec = curTime.getSeconds();
	setInterval(
		function(){
			context.clearRect(0,0,canvas.width,canvas.height);
			showTime(curHour,curMin,curSec,context);
			timeJudger(curHour,curMin,curSec,context);
		},50);
}


function showTime(hour,min,sec,ctx,color){
	
	drawBalls(leftStart,topStart,parseInt(hour/10),ctx);
	drawBalls(leftStart+(numWid+1)*(radius+1)*2,topStart,hour%10,ctx);
	drawBalls(leftStart+(numWid+1)*(radius+1)*4,topStart,10,ctx);
	drawBalls(leftStart+(colonWid+1)*(radius+1)*2+(numWid+1)*(radius+1)*4,topStart,parseInt(min/10),ctx);
	drawBalls(leftStart+(colonWid+1)*(radius+1)*2+(numWid+1)*(radius+1)*6,topStart,min%10,ctx);
	drawBalls(leftStart+(colonWid+1)*(radius+1)*2+(numWid+1)*(radius+1)*8,topStart,10,ctx);
	drawBalls(leftStart+(colonWid+1)*(radius+1)*4+(numWid+1)*(radius+1)*8,topStart,parseInt(sec/10),ctx);
	drawBalls(leftStart+(colonWid+1)*(radius+1)*4+(numWid+1)*(radius+1)*10,topStart,sec%10,ctx);	
}

function drawBalls(x,y,num,ctx,color){
	if(color){
		ctx.fillStyle = color;
	}else{
		ctx.fillStyle = baseColor;
	}
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j]){
				ctx.beginPath();
				ctx.arc(x+(radius+1)+(radius+1)*2*j,y+(radius+1)+(radius+1)*2*i,radius,0,2*Math.PI);
				ctx.closePath();
				ctx.fill();
			}
		}
	}
}

function timeJudger(hour,min,sec,ctx){
	var nextTime = new Date(); 
	var nextHour = nextTime.getHours();
	var nextMin = nextTime.getMinutes();
	var nextSec = nextTime.getSeconds();
	if(curTime!=nextTime){
		if(nextSec!=sec){
			if(nextSec%10!=sec%10){
				addBalls(leftStart+(colonWid+1)*(radius+1)*4+(numWid+1)*(radius+1)*10,topStart,nextSec%10);
				if(parseInt(nextSec/10)!=parseInt(sec/10)){
					addBalls(leftStart+(colonWid+1)*(radius+1)*4+(numWid+1)*(radius+1)*8,topStart,parseInt(nextSec/10));
					if(nextMin%10!=min%10){
						addBalls(leftStart+(colonWid+1)*(radius+1)*2+(numWid+1)*(radius+1)*6,topStart,nextMin%10);
						if(parseInt(nextMin/10)!=parseInt(min/10)){
							addBalls(leftStart+(colonWid+1)*(radius+1)*2+(numWid+1)*(radius+1)*4,topStart,parseInt(nextMin/10));
							if(nextHour%10!=hour%10){
								addBalls(leftStart+(numWid+1)*(radius+1)*2,topStart,nextHour%10);
								if(parseInt(nextHour/10)!=parseInt(hour/10)){
									addBalls(leftStart,topStart,parseInt(nextHour/10));
								}
							}
						}
					}
				}
			}
		}
		curHour = nextHour;
		curMin = nextMin;
		curSec = nextSec;
	}
	update(ctx);
}

function addBalls(x,y,num){
	for(var i = 0;i < digit[num].length;i++){
		for(var j = 0;j < digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				var aBall = {
					x : x + (radius+1) + (radius + 1) * 2 * j,
					y : y + (radius+1) + (radius + 1) * 2 * i,
					vx : Math.pow(-1,Math.floor(Math.random() * 10)) * xSpeed,
					vy : -ySpeed,
					vg : vgravity + Math.random(),
					color : colors[Math.floor(Math.random() * colors.length)]
				}
				
				colorballs.push(aBall);
			}
		}
	}
}

function update(ctx){
	for(var i = 0;i<colorballs.length;i++){
		ctx.beginPath();
		ctx.arc(colorballs[i].x,colorballs[i].y,radius,0,2*Math.PI);
		ctx.closePath();
		ctx.fillStyle=colorballs[i].color;
		ctx.fill();
		
		colorballs[i].x+=colorballs[i].vx;
		colorballs[i].y+=colorballs[i].vy;
		colorballs[i].vy+=colorballs[i].vg;

		if(colorballs[i].y>=canvas.height-radius){
			colorballs[i].y = canvas.height-radius;
			colorballs[i].vy = -(colorballs[i].vy*0.55);
		}
		if(colorballs[i].x>=canvas.width-radius-1){
			colorballs[i].x = canvas.width-radius-1;
			colorballs[i].vx *= -1;
		}

		if(colorballs[i].x<-radius){
			colorballs.splice(i,1);
			i--;
		}
	}
}

