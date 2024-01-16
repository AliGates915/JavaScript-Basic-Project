document.querySelector('#start')
.addEventListener('click', startChangingColor);
  
document.querySelector('#stop')
.addEventListener('click', stopChangingColor);
  
//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (intervalId === 'null') {
      // This is reason for storing function into variable.
        intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    // This is for Efficient Memory 
    intervalId = null;
  };