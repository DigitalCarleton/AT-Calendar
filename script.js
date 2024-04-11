const schedules = document.querySelectorAll(".schedulee")
const calendars = document.querySelectorAll(".calendar")

schedules.forEach((schedule, i) => {
    schedule.addEventListener('click', () => {
        show_i = i
        calendars[show_i].style.display="block"
        schedules[show_i].classList.toggle("selected");

        for(i_hide = 0; i_hide < calendars.length; i_hide++) {
            if (i_hide !== i) {
                calendars[i_hide].style.display="none";
                schedules[i_hide].classList.remove("selected");
            }
        }
    });
});

calendars[0].style.display="block";
schedules[0].classList.toggle("selected");