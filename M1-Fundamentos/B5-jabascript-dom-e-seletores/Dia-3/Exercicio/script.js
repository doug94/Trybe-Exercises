function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.getElementById('days');
    for (let day of dezDaysList) {
        const dayListItem = document.createElement("li");
        if (day === 25) {
            dayListItem.className = "day holiday friday";
        } else if (day === 24 || day === 31) {
            dayListItem.className = "day holiday";
        } else if (day === 4 || day === 11 || day === 18) {
            dayListItem.className = "day friday";
        } else {
            dayListItem.className = "day";
        }
        dayListItem.innerHTML = day;
        daysList.appendChild(dayListItem);
    }
}

createDaysOfTheMonth();

function buttonHolidays(holiday) {
    const buttonHoliday = document.createElement("button");
    buttonHoliday.setAttribute("id", "btn-holiday");
    buttonHoliday.innerText = holiday;
    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(buttonHoliday);
}

buttonHolidays("Feriados");

function highlightHolidays() {
    document.getElementById("btn-holiday").addEventListener("click", function() {
        const holidays = document.getElementsByClassName("holiday");
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === '') {
                holidays[index].style.backgroundColor = "Red";
            } else {
                holidays[index].style.backgroundColor = '';
            }
        }
    });
}

highlightHolidays();

function createFridayButton(buttonName) {
    const button = document.createElement("button");
    button.setAttribute('id', 'btn-friday');
    button.innerText = buttonName;
    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);
}

createFridayButton("Sexta-feira");

function changeFridayText(){
    const button = document.getElementById("btn-friday");
    button.addEventListener("click", function() {
        const fridays = document.getElementsByClassName("friday");
        const fridayDays = ["4", "11", "18", "25"];
        for (let index = 0; index < fridays.length; index += 1) {
            let value = fridays[index].innerText;
            if (fridayDays.includes(value)) {
                fridays[index].innerText = "Sextou";
            } else {
                fridays[index].innerText = fridayDays[index];
            }
        }
    });
}

changeFridayText();

function zoomIn(){
    const days = document.getElementsByClassName("day");
    for (const day of days) {
        day.addEventListener("mouseover", function () {
            day.style.fontSize = "2em";
        });
    }

}

function zoomOut(){
    const days = document.getElementsByClassName("day");
    for (const day of days) {
        day.addEventListener("mouseleave", function () {
            day.style.fontSize = "1.5em";
        });
    }

}

zoomIn();
zoomOut();