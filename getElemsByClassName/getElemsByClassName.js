function getElemsByClassName(cls,obj){
			var allEles=obj?obj.getElementsByTagName("*"):document.body.getElementsByTagName("*");
			var result=[];
			for(var i in allEles){
				if(allEles[i].className){
					var clsName=allEles[i].className.split(" ");
					for(var j in clsName){
						if(clsName[j]==cls){
							result.push(allEles[i]);
							break;
						}
					}
				
				}
					
			}
			return result;
		}