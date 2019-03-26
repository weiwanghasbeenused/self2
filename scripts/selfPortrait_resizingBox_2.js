console.log("loading 3:resizingBox.js");

function resizingBox(c){
    // top = 20 bottom = 7 right = 1 left = 13
    // mouth top = 20~60 mouth bottom = 60~7 or 57~7
    var topest = positions[20][1];
    var bottomest = positions[7][1];
    var aboveMouth = positions[60][1]-topest;
    var leftest = positions[13][0];

    w[0] = leftest-positions[1][0];
    console.log("w[0] = "+w[0]);
    // setting h 
    if(c<2){
        h = (bottomest-topest)/(c+1);
    }else if(c>=2&&c<4){
        h = aboveMouth/c;
    }else if(c>=4&&c<7){
        h = aboveMouth/(c-1);
    }else if(c>=7&&c<9){
        h = aboveMouth/5;
    }else if(c>=9&&c<11){
        h = aboveMouth/6;
    }else if(c==11){
        h = aboveMouth/7;
    }else if(c>=12&&c<15){
        h = aboveMouth/8;
    }else if(c == 15){
        h = aboveMouth/9;
    }else if(c>=16&&c<18){
        h = aboveMouth/10;
    }else if(c>=18&&c<20){
        h = aboveMouth/11;
    }else if(c == 20){
        h = aboveMouth/12;
    }else if (c >= 21 &&c < 23 ){
        h = aboveMouth/13;
    }else if (c ==23 ){
        h = aboveMouth/14;
    }

    // setting w & face
    if(c>=7){
        w[1] = positions[14][0]-positions[0][0];
        faceLeft[1] = leftest-positions[14][0];
    }
    if(c>=11){
        w[2] = positions[11][0]-positions[3][0];
        faceLeft[2] = leftest-positions[11][0];
    }
    
    // setting eyes
    if(c==7){
        eyeWidth[0] = positions[28][0]-positions[30][0];
        eyeWidth[1] = positions[25][0]-positions[23][0];
        eyeLeft[0] = leftest-positions[28][0];
        eyeLeft[1] = leftest-positions[25][0];
            
    }else if(c>=8){
        eyeWidth[0] = positions[14][0]-positions[28][0];
        eyeWidth[1] = positions[30][0]-positions[25][0];
        eyeWidth[2] = positions[23][0]-positions[0][0];
        eyeLeft[0] = leftest-positions[14][0];
        eyeLeft[1] = leftest-positions[30][0];
        eyeLeft[2] = leftest-positions[23][0];
    }
    
    // setting chin
    if(c>=7){
        chinWidth[0] = positions[9][0]-positions[5][0];
        chinLeft[0] = leftest-positions[9][0];
    }
    if(c>=11){
        chinWidth[1] = positions[10][0]-positions[4][0];
        chinLeft[1] = leftest-positions[10][0];
    }
    if(c>=14){
        chinWidth[2] = positions[8][0]-positions[6][0];
        chinLeft[2] = leftest-positions[8][0];
    }

    // setting nose
    if(c>=13){
        noseWidth[0] = positions[12][0]-positions[39][0];
        noseWidth[1] = positions[35][0]-positions[2][0];
        noseLeft[0] = leftest-positions[12][0];
        noseLeft[1] = leftest-positions[35][0];
    }
    

    // setting mouth
    if(c>=17){
        mouthWidth[0] = positions[11][0]-positions[50][0];
        mouthWidth[1] = positions[44][0]-positions[3][0];
        mouthLeft[0] = leftest-positions[11][0];
        mouthLeft[1] = leftest-positions[44][0];
        
    }

    $(".resultBox").css("height",h+"px");

    switch(true){
        case c<7:
            $(".resultBox").css("width",w[0]+"px");
    }

    switch(c){
        case 7:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",eyeWidth[0]+"px");
            $("#box2").css("width",eyeWidth[1]+"px");
            $("#box3").css("width",w[0]+"px");
            $("#box4").css("width",w[0]+"px");
            $("#box5").css("width",w[0]+"px");

            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",chinWidth[0]+"px");
            break;

        case 8:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");

            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",chinWidth[0]+"px");
            break;

        case 9:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");

            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",chinWidth[0]+"px");
            break;
            
        case 10:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");

            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",chinWidth[0]+"px");
            break;
        case 11:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[2]+"px");
            $("#box8").css("width",w[2]+"px");

            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",w[0]+"px");
            $("#box11").css("width",chinWidth[0]+"px");
            break;

        case 12:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[2]+"px");
            $("#box9").css("width",w[2]+"px");

            $("#box10").css("width",chinWidth[1]+"px");
            $("#box11").css("width",chinWidth[1]+"px");
            $("#box12").css("width",chinWidth[0]+"px");
            break;

        case 13:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",noseWidth[0]+"px");
            $("#box9").css("width",noseWidth[1]+"px");
            $("#box10").css("width",w[2]+"px");

            $("#box11").css("width",chinWidth[1]+"px");
            $("#box12").css("width",chinWidth[1]+"px");
            $("#box13").css("width",chinWidth[0]+"px");
            break;

         case 14:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",noseWidth[0]+"px");
            $("#box9").css("width",noseWidth[1]+"px");
            $("#box10").css("width",w[2]+"px");

            $("#box11").css("width",chinWidth[1]+"px");
            $("#box12").css("width",chinWidth[1]+"px");
            $("#box13").css("width",chinWidth[0]+"px");
            $("#box14").css("width",chinWidth[2]+"px");
            break;

        case 15:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",noseWidth[0]+"px");
            $("#box9").css("width",noseWidth[1]+"px");
            $("#box10").css("width",w[2]+"px");
            $("#box11").css("width",w[2]+"px");

            $("#box12").css("width",chinWidth[1]+"px");
            $("#box13").css("width",chinWidth[1]+"px");
            $("#box14").css("width",chinWidth[0]+"px");
            $("#box15").css("width",chinWidth[2]+"px");
            break;

        case 16:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",noseWidth[0]+"px");
            $("#box9").css("width",noseWidth[1]+"px");
            $("#box10").css("width",w[2]+"px");
            $("#box11").css("width",w[2]+"px");
            $("#box12").css("width",w[2]+"px");

            $("#box13").css("width",chinWidth[1]+"px");
            $("#box14").css("width",chinWidth[1]+"px");
            $("#box15").css("width",chinWidth[0]+"px");
            $("#box16").css("width",chinWidth[2]+"px");
            break;

        case 17:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",eyeWidth[0]+"px");
            $("#box3").css("width",eyeWidth[1]+"px");
            $("#box4").css("width",eyeWidth[2]+"px");
            $("#box5").css("width",w[0]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",noseWidth[0]+"px");
            $("#box9").css("width",noseWidth[1]+"px");
            $("#box10").css("width",w[2]+"px");
            $("#box11").css("width",w[2]+"px");
            $("#box12").css("width",mouthWidth[0]+"px");
            $("#box13").css("width",mouthWidth[1]+"px");

            $("#box14").css("width",chinWidth[1]+"px");
            $("#box15").css("width",chinWidth[1]+"px");
            $("#box16").css("width",chinWidth[0]+"px");
            $("#box17").css("width",chinWidth[2]+"px");
            break;

        case 18:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",noseWidth[0]+"px");
            $("#box10").css("width",noseWidth[1]+"px");
            $("#box11").css("width",w[2]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",mouthWidth[0]+"px");
            $("#box14").css("width",mouthWidth[1]+"px");

            $("#box15").css("width",chinWidth[1]+"px");
            $("#box16").css("width",chinWidth[1]+"px");
            $("#box17").css("width",chinWidth[0]+"px");
            $("#box18").css("width",chinWidth[2]+"px");
            break;

        case 19:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",noseWidth[0]+"px");
            $("#box10").css("width",noseWidth[1]+"px");
            $("#box11").css("width",w[2]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",mouthWidth[0]+"px");
            $("#box14").css("width",mouthWidth[1]+"px");

            $("#box15").css("width",chinWidth[1]+"px");
            $("#box16").css("width",chinWidth[1]+"px");
            $("#box17").css("width",chinWidth[0]+"px");
            $("#box18").css("width",chinWidth[0]+"px");
            $("#box19").css("width",chinWidth[2]+"px");
            break;

        case 20:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",noseWidth[0]+"px");
            $("#box11").css("width",noseWidth[1]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",w[2]+"px");
            $("#box14").css("width",mouthWidth[0]+"px");
            $("#box15").css("width",mouthWidth[1]+"px");

            $("#box16").css("width",chinWidth[1]+"px");
            $("#box17").css("width",chinWidth[1]+"px");
            $("#box18").css("width",chinWidth[0]+"px");
            $("#box19").css("width",chinWidth[0]+"px");
            $("#box20").css("width",chinWidth[2]+"px");
            break;

        case 21:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",noseWidth[0]+"px");
            $("#box11").css("width",noseWidth[1]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",w[2]+"px");
            $("#box14").css("width",w[2]+"px");
            $("#box15").css("width",mouthWidth[0]+"px");
            $("#box16").css("width",mouthWidth[1]+"px");

            $("#box17").css("width",chinWidth[1]+"px");
            $("#box18").css("width",chinWidth[1]+"px");
            $("#box19").css("width",chinWidth[0]+"px");
            $("#box20").css("width",chinWidth[0]+"px");
            $("#box21").css("width",chinWidth[2]+"px");
            break;

        case 22:
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",noseWidth[0]+"px");
            $("#box11").css("width",noseWidth[1]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",w[2]+"px");
            $("#box14").css("width",w[2]+"px");
            $("#box15").css("width",mouthWidth[0]+"px");
            $("#box16").css("width",mouthWidth[1]+"px");

            $("#box17").css("width",chinWidth[1]+"px");
            $("#box18").css("width",chinWidth[1]+"px");
            $("#box19").css("width",chinWidth[0]+"px");
            $("#box20").css("width",chinWidth[0]+"px");
            $("#box21").css("width",chinWidth[2]+"px");
            $("#box22").css("width",chinWidth[2]+"px");
            

    }
    if(c>=23){
            $("#box0").css("width",w[1]+"px");
            $("#box1").css("width",w[1]+"px");
            $("#box2").css("width",w[1]+"px");
            $("#box3").css("width",eyeWidth[0]+"px");
            $("#box4").css("width",eyeWidth[1]+"px");
            $("#box5").css("width",eyeWidth[2]+"px");
            $("#box6").css("width",w[0]+"px");
            $("#box7").css("width",w[0]+"px");
            $("#box8").css("width",w[0]+"px");
            $("#box9").css("width",w[0]+"px");
            $("#box10").css("width",noseWidth[0]+"px");
            $("#box11").css("width",noseWidth[1]+"px");
            $("#box12").css("width",w[2]+"px");
            $("#box13").css("width",w[2]+"px");
            $("#box14").css("width",w[2]+"px");
            $("#box15").css("width",mouthWidth[0]+"px");
            $("#box16").css("width",mouthWidth[1]+"px");
            $("#box17").css("width",mouthWidth[0]+"px");
            $("#box18").css("width",mouthWidth[1]+"px");

            $("#box19").css("width",chinWidth[1]+"px");
            $("#box20").css("width",chinWidth[1]+"px");
            $("#box21").css("width",chinWidth[0]+"px");
            $("#box22").css("width",chinWidth[0]+"px");
            $("#box23").css("width",chinWidth[2]+"px");
            $("#box24").css("width",chinWidth[2]+"px");

    }
}