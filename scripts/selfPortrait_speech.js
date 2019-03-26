console.log("loading 4:speech.js");
var rec;
var savedTextTemp;
var savedText =[];
var k = 0;

var cv = 0;
var tempStatus;
var correctedText;
var extraText;

current = 0;
rec = new p5.SpeechRec(); 
rec.continuous = false;
rec.onResult = showResult;
rec.onError = restartRec;
rec.onEnd = restartRec;


function restartRec(){
	console.log("restart!");
	if(status == 1){
		rec.start();
	}
}

function showResult(){
	var rs = rec.resultString;
	savedTextTemp = rs.split(" ");
	for(i = 0; i<savedTextTemp.length ; i++){	
		savedText.push(savedTextTemp[i]+" ");
	}
	if(current<=maxCurrent){
		pushingText();
	}
	
}
function pauseResult(){
	console.log("paused");
}

function pushingText(){
	$(".resultBox").empty().append("<h1></h1>");
	adjustSize(current);
	k = 0;
	var boxH = [],
		textH = [];

	for(j = 0;j<savedText.length;j++){
		$("#box"+k+" h1").append(savedText[j]);
		boxH[k] = $("#box"+k).height();
		textH[k] = $("#box"+k+" h1").height();
		console.log("boxH = "+boxH[k],"textH = "+textH[k]);
		if(textH[k]>boxH[k]){
			console.log("change box");
			var tempText = $("#box"+k+" h1").text().substring(0,$("#box"+k+" h1").text().length-1);
			var lastIndex = tempText.lastIndexOf(" ");
			var correctText = tempText.substring(0,lastIndex);
			console.log("correctText = "+correctText);
	        var extraText = savedText[j];
	        $("#box"+k+" h1").text(correctText);
	        k++;

	        console.log("k++, k = "+k);
	        if($("#box"+k).length){
	            $("#box"+k+" h1").append(extraText);
	        }else{
	        	console.log("addingBox");
	            $("#container").append("<div id = 'box"+k+"' class = 'resultBox'><h1></h1></div>");
	            current++;
	            adjustSize(current);
	        	resizingBox(current);
	        	pushingText();
	        }
	    }
	}
}



function adjustSize(c){
	$("h1").css({"font-size":h*0.8+"px","line-height":h*0.8+"px"});
}


