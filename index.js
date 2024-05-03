//setTimeout(addRing, 5000)
//select element 
//create a function to add a class to the element

const alarmEl = document.querySelector('.alarm');

const time = prompt('set the alarm for how many seconds: ')

const audioEl = document.querySelector('audio');

const addRing = () => {
  alarmEl.classList.add('alarm--ring');
  audioEl.play()
}

const ringTimer = setTimeout(addRing, time * 1000)

//enabling cancel
const cancelEl = document.querySelector('.cancel');

const cancelTimer = () => {
  clearTimeout(ringTimer);
};

cancelEl.addEventListener('click', cancelTimer)
