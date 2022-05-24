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
    const holidays = document.getElementsByClassName("holiday");
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
    // const bgcolor = holidays[0].style.backgroundColor;
    // if (bgColor !== "Red") {
    //     document.getElementById("btn-holiday").addEventListener("click", function () {
    //         const holidays = document.getElementsByClassName("holiday");
    //         for (let index = 0; index < holidays.length; index += 1) {
    //             holidays[index].style.backgroundColor = "Red";
    //         }
    //     });
    // } else {
    //     document.getElementById("btn-holiday").addEventListener("click", function () {
    //         const holidays = document.getElementsByClassName("holiday");
    //         for (let index = 0; index < holidays.length; index += 1) {
    //             holidays[index].style.backgroundColor = "White";
    //         }
    //     });
    // }
}

highlightHolidays();
// holidays[index].style.backgroundColor = "Red";