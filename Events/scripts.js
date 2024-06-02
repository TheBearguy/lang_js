let intervalId
document.querySelector('#start').addEventListener('click', function() {
    if(!intervalId) {
        intervalId = setInterval(changeColor, 1000)
    }
    function changeColor () {
        document.body.style.backgroundColor = randomColor()
    }
})


document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null; //just for memory optimization
})


function randomColor() {
    const hex = "123456789ABCDEF"
    let color = '#'
    for (let i = 0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};