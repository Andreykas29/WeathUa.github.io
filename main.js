//arquee text edit
let adv = document.querySelector(".adv");
if (window.innerWidth < 550) {
  adv.innerHTML = "Нехай незгоди не роблять<br>     Вам в житті погоди!";
}
if (window.innerWidth < 380) {
  adv.stop()
  
}
//request
fetch(
  "http://api.openweathermap.org/data/2.5/onecall?lat=49.838261&lon=24.023239&appid=e0b7f51d5f85c59b573d85a9e1839e8c"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let kelvinDiff = 273.15;
    //current day
    //degree
    document.querySelector(".today-temp").innerHTML =
      Math.round(data.current.temp - kelvinDiff) + "&deg" + "C";
    //NumberDay
    let date = new Date();
    document.querySelector(".month-number").innerHTML = date.getDate();
    //Time
    let currHour = date.getHours();
    let currMin = date.getMinutes();
    document.querySelector(".time").innerHTML = currHour + ":" + currMin;

    //names of week days
    let nameOfDay = 4//date.getDay();
    let namesDays = [
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
    ];

    //Days assignment
    let sixDays = document.querySelectorAll(".day-name");
    console.log(sixDays);

    function assign6Days(k) {
      for (let i = 0; i < sixDays.length; i++) {
        sixDays[i].textContent = namesDays[i + k];
      }
    }

    function currDay(i) {
      document.querySelector(".now-day").textContent = namesDays[i];
    }

    switch (nameOfDay) {
      case 0:
        currDay(0);
        assign6Days(1);
        break;
      case 1:
        currDay(1);
        assign6Days(2);
        break;
      case 2:
        currDay(2);
        assign6Days(3);
        break;
      case 3:
        currDay(3);
        assign6Days(4);     
        break;
      case 4:
        currDay(4);
        assign6Days(5);
        break;
      case 5:
        currDay(5);
        assign6Days(6);
        break;
      case 6:
        currDay(6);
        assign6Days(7); 
        break;
      default:
    }


  })
  .catch(function (rej) {
    console.log(rej)
  });
