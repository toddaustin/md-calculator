var calc,num,operator,screen,inputString;calc=document.getElementsByTagName("button"),screen=document.querySelector("input[name=numScreen]"),num=[0,1,2,3,4,5,6,7,8,9],operator=["*","/","+","-","."],inputString="";for(var calculate={number:function(e){inputString+=e,screen.value=inputString},operator:function(e){inputString+=e,screen.value=inputString},percent:function(e){inputString=parseFloat(inputString/100)+"*",screen.value=inputString},clear:function(){inputString="",screen.value=0},"delete":function(){0===inputString||""===inputString?(inputString="",screen.value=0):(inputString=inputString.substring(0,inputString.length-1),""===inputString&&(inputString=0),screen.value=inputString)},equal:function(){screen.value=eval(screen.value),inputString=screen.value}},i=0;i<calc.length;i++)calc[i].addEventListener("click",function(){var e=parseInt(this.value);isNaN(e)?(e=this.value,"clear"===e?calculate.clear():"delete"===e?calculate["delete"]():"percent"===e?calculate.percent():-1!==operator.indexOf(e)?calculate.operator(e):"="===e&&calculate.equal()):-1!==num.indexOf(e)&&calculate.number(e)});