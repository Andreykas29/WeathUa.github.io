//arquee text edit
let adv = document.querySelector(".adv");
if (window.innerWidth < 550) {
  adv.innerHTML = "Нехай незгоди не роблять<br>Вам в житті погоди!";
}
if (window.innerWidth < 380) {
  adv.stop()
}

//request
fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=49.838261&lon=24.023239&appid=e0b7f51d5f85c59b573d85a9e1839e8c"
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
    if (currMin < 10) {
      document.querySelector(".time").innerHTML =
        currHour + ":" + "0" + currMin;
    } else {
      document.querySelector(".time").innerHTML = currHour + ":" + currMin;
    }
    //weather in word
    // document.querySelector(".action-description-word").textContent =
    // data.daily[0].weather[0].main;
    //max&min current day
    document.querySelector(".weather-main-temp-max-deg").innerHTML =
    Math.round(data.daily[0].temp.max - kelvinDiff) + "&deg" + "C";
    document.querySelector(".weather-main-temp-min-deg").innerHTML =
    Math.round(data.daily[0].temp.min - kelvinDiff) + "&deg" + "C";
    //assignment image for main day
    document.querySelector(".weather-main-img").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png">`;

    //6 days assignment
    let numOfDay = date.getDay();
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

    let sixDaysNames = document.querySelectorAll(".day-name");
    let sixDaysMaxTemp = document.querySelectorAll(".day-max");
    let sixDaysMinTemp = document.querySelectorAll(".day-min");
    let sixDaysImg = document.querySelectorAll(".day-img");

    //assign6DaysNames
    function assign6DaysNames(k) {
      for (let i = 0; i < sixDaysNames.length; i++) {
        sixDaysNames[i].textContent = namesDays[i + k];
      }
    }

    //assign current Day Name
    function currDayName(i) {
      document.querySelector(".now-day").textContent = namesDays[i];
    }

    //assign6DaysMaxMinTemp
    function maxMinTemp() {
      for (let i = 0; i < 6; i++) {
        sixDaysMaxTemp[i].innerHTML =
          Math.round(data.daily[i + 1].temp.max - kelvinDiff) + "&deg" + "C";
        sixDaysMinTemp[i].innerHTML =
          Math.round(data.daily[i + 1].temp.min - kelvinDiff) + "&deg" + "C";
      }
    }

    //assignment images 6 days
    function assignImages() {
      for (let i = 0; i < 6; i++) {
        sixDaysImg[i].innerHTML = `<img src="https://openweathermap.org/img/wn/${
        data.daily[i + 1].weather[0].icon
        }@2x.png">`;
        
      }
    }

    //assignment all
    for (let i = 0; i < 7; i++) {
      if (numOfDay == i) {
        currDayName(i);
        assign6DaysNames(i + 1);
        maxMinTemp();
        assignImages();
        break;
      }
      
    }
    // switch (numOfDay) {
    //   case 0:
    //     currDayName(0);
    //     assign6DaysNames(1);
    //     maxMinTemp();
    //     break;
    //   case 1:
    //     currDayName(1);
    //     assign6DaysNames(2);
    //     maxMinTemp();
    //     break;
    //   case 2:
    //     currDayName(2);
    //     assign6DaysNames(3);
    //     maxMinTemp();
    //     break;
    //   case 3:
    //     currDayName(3);
    //     assign6DaysNames(4);
    //     maxMinTemp();
    //     break;
    //   case 4:
    //     currDayName(4);
    //     assign6DaysNames(5);
    //     maxMinTemp();
    //     break;
    //   case 5:
    //     currDayName(5);
    //     assign6DaysNames(6);
    //     maxMinTemp();
    //     break;
    //   case 6:
    //     currDayName(6);
    //     assign6DaysNames(7);
    //     maxMinTemp();
    //     break;
    //   default:
    // }
  })
  .catch(function (rej) {
    console.log(rej)
  });
