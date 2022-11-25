const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalID 


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    intervalID=setInterval(updateTimes, 1000)

    function updateTimes() {
      if (seconds >= 1) {
      
        let time=seconds
        let interval=0

        //получаем целое количество часов количество часов
        interval= Math.floor(time/(60*60))
        //получаем остаток без часов
        time -= interval * 60 * 60
      
      let hours = interval

        //получаем целое количество минут
        interval=Math.floor(time/60)
        //получаем остаток
        time -= interval*60

        let minutes = interval


      let second = time


      hours = hours < 10? '0'+hours : hours
      minutes = minutes < 10? '0'+minutes : minutes
      second = second < 10? '0'+second : second
      
      timerEl.innerHTML = `${hours}:${minutes}:${second}`

      --seconds
    }   else {

          let hours = 0 
          let minutes = 0
          let second = 0

          hours = hours < 10? '0'+hours : hours
          minutes = minutes < 10? '0'+minutes : minutes
          second = second < 10? '0'+second : second

          timerEl.innerHTML = `${hours}:${minutes}:${second}`
      }
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, '')

  console.log(inputEl.value.replace(/[^0-9]/g, ''))
});

buttonEl.addEventListener('click', () => {
  clearInterval(intervalID)

  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
