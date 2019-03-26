function movingBox(c){
    var topest_d = positions[20][1];
    var bottomest_d = positions[7][1];
    var leftest_d = positions[13][0];
    var rightest_d = positions[1][0];
    var aboveMouth_d = positions[60][1]-topest_d;
    var chinTop;
    faceLeft[0] = wWidth-leftest_d;
    chinTop = positions[57][1];

    switch(true){
        case c<2:
            $(".resultBox").css("left",faceLeft[0]+"px");
            for(i = 0;i<$(".resultBox").length;i++){
                $("#box"+i).css("top",topest_d+i*h+"px");
            }
            break;

        case c<4:
            var chinFirst = $(".resultBox").length-1;

            $(".resultBox").css("left",faceLeft[0]+"px");
            for(i = 0;i<chinFirst;i++){
                $("#box"+i).css("top",topest_d+i*h+"px");
            }
            $("#box"+chinFirst).css("top",chinTop+"px");
            break;

        case c<7:
            var chinFirst = $(".resultBox").length-2;
            $(".resultBox").css("left",faceLeft[0]+"px");
            for(i = 0;i<chinFirst;i++){
                $("#box"+i).css("top",topest_d+i*h+"px");
            }
            $("#box"+chinFirst).css("top",chinTop+"px");
            $("#box"+(chinFirst+1)).css("top",chinTop+h+"px");
    }

    switch(c){

        case 7:

            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box2").css({"top":topest_d+h+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box5").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});

            $("#box6").css({"top":chinTop+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 8:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});

            $("#box7").css({"top":chinTop+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;
      
        case 9:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});

            $("#box8").css({"top":chinTop+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 10:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});

            $("#box8").css({"top":chinTop+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":chinTop+h+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 11:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box9").css({"top":chinTop+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":chinTop+h+"px","left":faceLeft[0]+"px"});
            $("#box11").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 12:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box10").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box11").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box12").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 13:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box11").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box12").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box13").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 14:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box11").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box12").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box13").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box14").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 15:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box12").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box13").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box14").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box15").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 16:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});

            $("#box13").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box14").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box15").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box16").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 17:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box3").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box4").css({"top":topest_d+h*2+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*6+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box13").css({"top":topest_d+h*9+"px","left":faceLeft[0]+mouthLeft[1]+"px"});

            $("#box14").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box15").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box16").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box17").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            
        case 18:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box14").css({"top":topest_d+h*10+"px","left":faceLeft[0]+mouthLeft[1]+"px"});

            $("#box15").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box16").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box17").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box18").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 19:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*7+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box14").css({"top":topest_d+h*10+"px","left":faceLeft[0]+mouthLeft[1]+"px"});

            $("#box15").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box16").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box17").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box18").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box19").css({"top":chinTop+h*4+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 20:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box14").css({"top":topest_d+h*11+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box15").css({"top":topest_d+h*11+"px","left":faceLeft[0]+mouthLeft[1]+"px"});


            $("#box16").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box17").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box18").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box19").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box20").css({"top":chinTop+h*4+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 21:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box14").css({"top":topest_d+h*11+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box15").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box16").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[1]+"px"});


            $("#box17").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box18").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box19").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box20").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box21").css({"top":chinTop+h*4+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            break;

        case 22:
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box14").css({"top":topest_d+h*11+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box15").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box16").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[1]+"px"});


            $("#box17").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box18").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box19").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box20").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box21").css({"top":chinTop+h*4+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box22").css({"top":chinTop+h*5+"px","left":faceLeft[0]+chinLeft[0]+"px"});

    }
    if(c>=23){ 
            $("#box0").css({"top":topest_d+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box1").css({"top":topest_d+h+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box2").css({"top":topest_d+h*2+"px","left":faceLeft[0]+faceLeft[1]+"px"});
            $("#box3").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[0]+"px"});
            $("#box4").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[1]+"px"});
            $("#box5").css({"top":topest_d+h*3+"px","left":faceLeft[0]+eyeLeft[2]+"px"});
            $("#box6").css({"top":topest_d+h*4+"px","left":faceLeft[0]+"px"});
            $("#box7").css({"top":topest_d+h*5+"px","left":faceLeft[0]+"px"});
            $("#box8").css({"top":topest_d+h*6+"px","left":faceLeft[0]+"px"});
            $("#box9").css({"top":topest_d+h*7+"px","left":faceLeft[0]+"px"});
            $("#box10").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[0]+"px"});
            $("#box11").css({"top":topest_d+h*8+"px","left":faceLeft[0]+noseLeft[1]+"px"});
            $("#box12").css({"top":topest_d+h*9+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box13").css({"top":topest_d+h*10+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box14").css({"top":topest_d+h*11+"px","left":faceLeft[0]+faceLeft[2]+"px"});
            $("#box15").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box16").css({"top":topest_d+h*12+"px","left":faceLeft[0]+mouthLeft[1]+"px"});
            $("#box17").css({"top":topest_d+h*13+"px","left":faceLeft[0]+mouthLeft[0]+"px"});
            $("#box18").css({"top":topest_d+h*13+"px","left":faceLeft[0]+mouthLeft[1]+"px"});
            //  ^ mouth becomes two layers


            $("#box19").css({"top":chinTop+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box20").css({"top":chinTop+h+"px","left":faceLeft[0]+chinLeft[1]+"px"});
            $("#box21").css({"top":chinTop+h*2+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box22").css({"top":chinTop+h*3+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box23").css({"top":chinTop+h*4+"px","left":faceLeft[0]+chinLeft[0]+"px"});
            $("#box24").css({"top":chinTop+h*5+"px","left":faceLeft[0]+chinLeft[0]+"px"});
    }
}