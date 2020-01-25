
document.addEventListener('DOMContentLoaded',start, {passive:false});

//$(window).on('wheel', scrolldirectiondetect);
document.body.addEventListener('wheel', wheeldirectiondetect, {passive:false});
document.addEventListener('keydown',keydetect);
bgmusicid.addEventListener('ended',replay);

var wheel = 0;
var currentslide = 0;
//Variables for scroll:
var triggerelement = null;
var cursorY, startY, deltaY, diff, swipelenY = 0;
var minSwipeLen = 50;
var playing = 0;
var firsttimevisitingpage1 = 1;

function start(){
  setTimeout(function(){
    startinganimation(0);
    setTimeout(function(){
      page0(); 
      //document.getElementsByClassName('p1t1')[0].style.animation = 'right100 1s forwards';
    }, 1500);
  },3000);

  //document.getElementsByClassName('titletext')[0].style.left =


}
function playpausebg(){
  if (playing == 0){
    document.getElementById('bgmusicid').play();
    playing = 1;
    document.getElementsByClassName('musicicon')[0].style.animation = 'audioplay 2s linear infinite';
  }
  else if (playing == 1){
    document.getElementById('bgmusicid').pause();
    playing = 0;
    document.getElementsByClassName('musicicon')[0].style.removeProperty("animation");
  }
}
function replay(){
  document.getElementById('bgmusicid').play();
}

function page0(){
  document.getElementsByClassName('a2020img-wrapper')[0].style.animation = 'expand1 1.5s forwards';
  document.getElementsByClassName('p1t1')[0].style.animation = 'expand2 1.5s forwards';

  setTimeout(function(){
    document.getElementsByClassName('a2020img-wrapper')[0].style.transform = 'scale(1)';
  });

  setTimeout(function(){
    document.getElementsByClassName('p1t1')[0].style.animation = 'fadeout 2s forwards';
  },2000);

  setTimeout(function(){
    document.getElementsByClassName('p1t1')[1].style.animation = 'left0 1s forwards';
    document.getElementsByClassName('p1t1')[2].style.animation = 'left0 1s forwards';
  },2500);

  setTimeout(function(){
    document.getElementsByClassName('p1t1outer')[1].style.animation = 'left100 2s forwards';
    document.getElementsByClassName('p1t1outer')[2].style.animation = 'left-100 2s forwards';
  },4500);

  setTimeout(function(){
    document.getElementsByClassName('p1t1')[3].style.animation = 'left0 1s forwards';
    document.getElementsByClassName('p1t1')[4].style.animation = 'left0 1s forwards';
  },5000);

  setTimeout(function(){
    document.getElementsByClassName('p1t1outer')[3].style.animation = 'left100 2s forwards';
    document.getElementsByClassName('p1t1outer')[4].style.animation = 'left-100 2s forwards';
  },7000);

  setTimeout(function(){
    document.getElementsByClassName('p1t1')[5].style.animation = 'left0 1s forwards';
    document.getElementsByClassName('p1t1')[6].style.animation = 'left0 1s forwards';
  },7500);

  setTimeout(function(){
    document.getElementsByClassName('p1t1outer')[5].style.animation = 'left100 2s forwards';
    document.getElementsByClassName('p1t1outer')[6].style.animation = 'left-100 2s forwards';
    document.getElementsByClassName('a2020img-wrapper')[0].style.animation = 'verticallycentre 1s forwards';
  },9500);
  setTimeout(function(){
    document.getElementsByClassName('a2020img-wrapper')[0].style.top = '50%';
    document.getElementsByClassName('a2020img-wrapper')[0].style.transform = 'translateY(-50%)';
  },10600);

}

function touchStart(event, element){
  //temporarily disable touch
  //event.preventDefault();
  //when one finger touch, if more than one finger, it may be gesture
  if (event.touches.length == 1){
    startY = event.touches[0].pageY;
    //pass the triggerelementid
    triggerelement = element;
  }
  else{
    cancelTouch(event);
  }
}

function touchMove(event){
  //temp. disable touch
  event.preventDefault();
  //when one finger touch and scroll
  if(event.touches.length == 1){
    cursorY = event.touches[0].pageY;
  }
  else{
    touchCancel(event);
  }
}

function touchEnd(event){
  //event.preventDefault();
  if (event.touches.length <= 1){
    swipelenY = Math.abs(cursorY - startY);
    if (swipelenY >= minSwipeLen){
      if(cursorY > startY){
        goprevious();
      }
      if(cursorY < startY){
        gonext();
      }
      touchCancel(event);
    }
    else{
      touchCancel(event);
    }
  }
  else{
    touchCancel(event);
  }
}

function touchCancel(event){
  var triggerelement = null;
  var cursorY, startY, deltaY, diff, swipelenY = 0;
}

function wheeldirectiondetect(event){
  event.preventDefault();
/*
  var wheeldelta = null;
  //works with most browsers.
  if (event.wheelDelta){
    wheeldelta = event.wheelDelta;
  }
  //failback for firefox browsers
  else if (event.detail){
    wheeldelta = -event.detail;
  }
  if(wheeldelta!== null){
    if (wheeldelta > 0){
      goprevious();
    }
    else if (wheeldelta < 0){
      gonext();
    }
  }
  */
}

function keydetect(event){
  if(event.keyCode == 40){
    event.preventDefault();
    gonext();
  }
  else if(event.keyCode == 38){
    event.preventDefault();
    goprevious();
  }
}

function gonext(){
  // one less than total slide cause start with 0th child
  if(currentslide < 4){
    console.log("on" + currentslide);
    document.getElementsByClassName('page')[currentslide+1].scrollIntoView();
    restartinganimation(currentslide+1);
    currentslide = currentslide + 1;

  }

}
function goprevious(){
  if(currentslide>0){
    console.log("on" + currentslide);
    document.getElementsByClassName('page')[currentslide-1].scrollIntoView();
    restartinganimation(currentslide-1);
    currentslide = currentslide - 1;

  }

}
function restartinganimation(page){
  document.getElementsByClassName('men-1')[page].style.removeProperty("animation");
  document.getElementsByClassName('men-1')[page].style.removeProperty("animation");
  document.getElementsByClassName('men-2')[page].style.removeProperty("animation");
  //document.getElementsByClassName('content-background')[page].style.removeProperty("animation");
  document.getElementsByClassName('content')[page].style.removeProperty("animation");
  document.getElementsByClassName('kaimen')[page].style.display = "block";
  startinganimation(page);
  /*
  document.getElementsByClassName('men-1')[page].style.left = '0px';
  document.getElementsByClassName('men-1')[page].style.opacity = '1';
  document.getElementsByClassName('men-2')[page].style.left = '50%';
  document.getElementsByClassName('men-2')[page].style.opacity = '1';
  document.getElementsByClassName('content-background')[page].style.opacity = '0';
  document.getElementsByClassName('content')[page].style.top = '-100%';
  document.getElementsByClassName('content')[page].style.opacity = '0';
  document.getElementsByClassName('kaimen')[page].style.display = "block";
  */


}
function startinganimation(page){
  timetillevent();
  document.getElementsByClassName('men-1')[page].style.animation = 'kaimen1 1s forwards';
  document.getElementsByClassName('men-2')[page].style.animation = 'kaimen2 1s forwards';
  setTimeout(function(){
    //document.getElementsByClassName('content-background')[page].style.animation = 'fadeincontent 1s forwards';
  }, 500);
  setTimeout(function(){
    document.getElementsByClassName('content')[page].style.animation = 'slideinfadeincontent 1s forwards';
  }, 500);
  setTimeout(function(){
    document.getElementsByClassName('kaimen')[page].style.display = "none";
  },1200);
  setTimeout(function(){
    if(page == 1){
      page1();
    }
    else if(page == 2){
      page2();
    }
    else if(page == 3){
      page3();
    }
    else if(page == 4){
      page4();
    }

  },1200);

}
function page1(){
  if(firsttimevisitingpage1 == 1){
    document.getElementById("bgmusicid").play();
    playing = 1;
    document.getElementsByClassName('musicicon')[0].style.animation = 'audioplay 2s linear infinite';
    firsttimevisitingpage1 = 0;
  }
  document.getElementsByClassName('logo')[0].style.animation = 'zoomout 2s forwards';
  document.getElementsByClassName('goldstroke2020')[0].style.animation = 'zoomin 2s forwards';
  setTimeout(function(){
    document.getElementsByClassName('logo')[0].style.removeProperty("animation");
    document.getElementsByClassName('goldstroke2020')[0].style.removeProperty("animation");
  },3000);
}
function page2(){
  document.getElementsByClassName('logo')[1].style.animation = 'zoomout 2s forwards';
  setTimeout(function(){
    document.getElementsByClassName('logo')[1].style.removeProperty("animation");
  },3000);
}
function page3(){
  document.getElementsByClassName('logo')[2].style.animation = 'zoomout 2s forwards';
  setTimeout(function(){
    document.getElementsByClassName('logo')[2].style.removeProperty("animation");
  },3000);
}
function page4(){
  document.getElementsByClassName('logo')[3].style.animation = 'zoomout 2s forwards';
  setTimeout(function(){
    document.getElementsByClassName('logo')[3].style.removeProperty("animation");
  },3000);
}

function timetillevent(){
  var timer = setInterval(function(){
    var currenttime = Date.now();
    var eventtime = 1580020200000;
    var deltatime = eventtime - currenttime;

    var days = Math.floor(deltatime/86400000);
    var hours = Math.floor((deltatime-days*86400000)/3600000);
    var min = Math.floor((deltatime - days*86400000 - hours*3600000)/60000);
    var sec = Math.floor((deltatime - days*86400000 - hours*3600000 - min*60000)/1000);
    var timeleft = days.toString() + "日" + hours.toString() + "时" + min.toString() + "分" + sec.toString() + "秒";
    document.getElementsByClassName('deltatext')[1].innerHTML = timeleft;
    if(deltatime < 0){
      clearInterval(timer);
      document.getElementsByClassName('deltatext')[1].innerHTML = "0日0时0分0秒!!!";
    }
  },1000);

}
