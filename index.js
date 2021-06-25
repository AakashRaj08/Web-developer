const like_btn = document.querySelector('#like_btn');
const like_count = document.querySelector('#like_count');
const date_ = document.querySelector('#date_');
const timer = document.querySelector('#timer');
const light = document.querySelector('#light');
const innerlight = document.querySelector('#innerlight');
const switch_ = document.querySelector('#switch');
const achievement_wrapper = document.querySelector('#achievement_wrapper');
const achievement = document.querySelector('.achievement');
const glow_inner = document.querySelector('.glow_inner');
const glow_outer = document.querySelector('.glow_outer');
const reset = document.querySelector('#reset');

like_btn.addEventListener('click' , function(){
     like_count.textContent = parseInt(like_count.textContent) + 1
})

days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let date = (new Date())
date_.innerHTML = days[date.getDay()];

function increase_timer(){
    timer.textContent = parseInt(timer.textContent) + 1
}

setInterval(() => {
    increase_timer();
},1000)

reset.addEventListener('click', function(){
    timer.textContent = 0;
})

innerlight.addEventListener('click', function(){
    if(switch_.textContent === 'Off'){
        switch_.textContent = 'On';
        achievement.style.opacity = "1";
        light.classList.add('glow_outer');
    }
    else {
        switch_.textContent = 'Off'
        achievement.style.opacity = "0";
        light.classList.remove('glow_outer');
    }
})