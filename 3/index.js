var hours;

while (true) {
  hours = prompt("Введіть кількість годин:");

  if (!isNaN(hours)) {
    break;
  } else {
    
    alert("Введено некоректне значення. Будь ласка, введіть число годин.");
  }
}

var seconds = hours * 3600;

alert("У " + hours + " годинах є " + seconds + " секунд.");