function timer() {
    var date = new Date(),
        hour = date.getHours(),
        minute = checkTime(date.getMinutes()),
        ss = checkTime(date.getSeconds());
  
    function checkTime(i) {
      if( i < 10 ) {
        i = "0" + i;
      }
      return i;
    }
  
  if ( hour > 12 ) {
    hour = hour - 12;
    if ( hour == 12 ) {
      hour = checkTime(hour);
    document.getElementById("time").innerHTML = hour+":"+minute+" AM";
    }
    else {
      hour = checkTime(hour);
      document.getElementById("time").innerHTML = hour+":"+minute+" PM";
    }
  }
  else {
    document.getElementById("time").innerHTML = hour+":"+minute+" AM";;
  }
  var time = setTimeout(timer,1000);
  }

 // function closeWindow() {
 //   var x = document.getElementById("window1");
 //   if (x.style.visibility === "visible") {
 //     x.style.visibility = "hidden";
 //   } else {
 //     x.style.display = "hidden";
 //   }
 // }

 var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  milsec = dateInfo.getMilliseconds();

var hrAngle = hr * 30 + (min * 6 / 12),
  minAngle = min * 6 + (sec * 6 / 60),
  secAngle = sec * 6 + (milsec * 0.36 / 1000);

  function setAngle(wrapper, angle) {
    document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
  }
  setAngle("hr-wrapper", hrAngle);
  setAngle("min-wrapper", minAngle);
  setAngle("sec-wrapper", secAngle);