console.log("loading 1:variables.js");
var positions;
var chinWidth = [],
	chinLeft = [];
var eyeWidth = [],
	eyeLeft = [];
var noseWidth = [],
	noseLeft = [];
var mouthWidth = [],
	mouthLeft = [];
var w = [],
	h;
var faceLeft = [];

var maxCurrent = 23;
// var maxSteps = 26;
var focusCounter = 0;

var subFolder =  Math.random().toString(36).substr(2, 9);
console.log("subFolder = "+subFolder);

var current;
// 0 = initial, 1 = recording, 2 = stoped, 3 = reset warning, 4 = print, 5 = maximum
var status = 0; 


var prompts = ["Tell me"," who do you want to be,"," a lie,"," a secret,"," or anything you want to.","Press Right Arrow to start."];
$("#prompt h3").append(prompts[0]);
var whichPrompt = parseInt(3*Math.random())+1;
console.log(whichPrompt);
$("#prompt h3").append(prompts[whichPrompt]+"</br>");
$("#prompt h3").append(prompts[prompts.length-2]);
$("#prompt h3").append("</br></br>"+prompts[prompts.length-1]);
