console.log("loading 5: prompt.js");

// 0 = initial, 1 = recording, 2 = stoped, 3 = reset, 4 = print, 5 = maximum

// start speech
$(document).jkey('d',function (){
	startRec();
});

function startRec() {
	if(current<maxCurrent){
		rec.onResult = showResult;
		if(status==0){
			console.log("initial");
			resizingBox(current);
			status = 1;
			$("#prompt").fadeOut(500);
			$("#sign_pause").stop().fadeOut(200);
			$("#sign_start").stop().fadeIn(200,
				function(){
					$(this).delay(3000).fadeOut(200);
			});
		}else if(status == 2){
			resizingBox(current);
			$("#sign_pause").stop().hide();
			$("#sign_start").stop().fadeIn(200,
				function(){
					$(this).delay(3000).fadeOut(200);
			});
		}else if(status==3){
			$("#warning_reset").stop().fadeOut(200);
		}else if(status==4){
			$("#warning_printing").stop().fadeOut(200);
			
			tempStatus = 5;
		}
		rec.start();
		status = 1;
	}else{
		$("#warning_ending").fadeIn(200);
	}
}

// pause speech
$(document).jkey('w',function(){
	pauseRec();
	
});

function pauseRec() {
	if(status==1){
		status = 0;
		$("#sign_pause").stop().fadeIn(200);
		$("#sign_start").stop().hide();
		rec.onResult = pauseResult;
	}
	status = 2;
}

// restart
$(document).jkey('a',function(){
	restart();
});

function restart() {
	if(status==1||status == 2||status == 4){
		$("#warning_reset").stop().fadeIn(200);
		rec.onResult = pauseResult;
		status = 3;
	}else if(status == 3){
		$("#warning_reset").html("<h2>Restarting...</h2>");
		location.reload();
	}
}

$(document).jkey('s',function (){
	printing();
});

function printing() {
	if(status==1||status == 2){
		$("#warning_printing").stop().fadeIn(200);
		tempStatus = status;
		status = 4;
	}else if(status == 4){
			console.log("shot!");
			html2canvas(document.getElementById('container')).then(function(canvas) {
	    	$("#saveImg").empty();
	    	document.getElementById('saveImg').appendChild(canvas);
	    	
	    	var cid = "imgCanvas"+cv;
	    	$("#saveImg canvas").attr("id",cid);
	    	cid = document.getElementById(cid);
	    	console.log(ranNum+" is so cool");
	    	var dataUrl = cid.toDataURL();
	    	$.ajax({
			  type: "POST",
			  url: "script.php",
			  data: { 
			     imgSent: dataUrl,
			     imgName: ranNum+cv,
			     subFolder:subFolder
				  }
				}).done(function(o) {
				  console.log('saved'); 
				});		    	
		    	console.log("cv = "+cv);
		    	cv++;
			});
		var tempP = $("#warning_printing").html();
		var imgSavedurl = "https://wei-haowang.com/XD/selfPortrait/images/"+ranNum+cv+".png";
		$("#warning_printing").html("<h2>Printing...</h2>");
		$("#warning_printing").html("<h2>You can find your saved image at</br>"+imgSavedurl+"</h2>").stop().show();
		
	}
}



startVideo(); //start face
