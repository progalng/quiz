function addEvent(elem, evtType, func) {
         if (elem.addEventListener) {
            elem.addEventListener(evtType, func, false);
         } else if (elem.attachEvent) {
            elem.attachEvent("on"+evtType, func);
         } else {
            elem["on"+evtType]=func;
         }
      }

 Object.prototype.hide=function(bool){
    	if(bool)
    		this.style.visibility='hidden';
    	else
    		this.style.display='none';
    };

    Object.prototype.show=function(bool){
    	if(bool)
    		this.style.visibility='visible';
    	else
    	 this.style.display='block';
    };

String.prototype.isEmpty=function(){
    	if(this.trim()=='' || this.trim()==null) {
    		return true;
    		}
    		return false;
    };
    
     var isDefined=function(obj){
    	if(obj==null || typeof obj=="undefined"){
    		return false;
    	}
    	return true;
    };

function getElem(elem) {
	return document.getElementById(elem);
}

function template(tmpl,data){
   return tmpl.replace(/%(\w*)%/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
}
function json2array(data){
			var arr=[];
			for(var x in data){
				if(typeof data[x] != 'function'){
					arr.push((typeof data[x]==typeof {})?(json2array(data[x])):(data[x]));
				}
			}
			return arr;
		}

Array.prototype.array_sum=function(){
		var sum=0;
		for (var i=0;i<this.length;i++){
			sum += Number(this[i]);
		}
		return sum;
	};
	
	
	 function rand(min,max){
    	  return Math.floor(min+(Math.random()*(max-min+1)));
      }
      
      function uniqueRandNums(lim,n){
    	  var arr=[],i=n,v;
    	  while(i>0){
    		  v=rand(lim[0],lim[1]);
    		  if(!arr.in_array(v)){
    			  arr.push(v);
    			  i--;
    		  }
    	} 
    	  return arr;
      }
      
      Array.prototype.in_array=function(v){
		 var bool=false;
		for(var i=0;i<this.length;i++){
			if(this[i]==v){
				 bool=true;
				 }
		}
		return (bool==true)?(true):(false);
	 };
	 
	 Object.prototype.getObjN2=function(o,func){
	   var arr=[],c=0,obj=this.getElementsByTagName(o);
	   for(var i=0;i<obj.length;i++){
			if ((isDefined(func) && func(obj[i])) || !isDefined(func)){
			arr[c++]=obj[i];
			}
		}
	   return arr;
	   };