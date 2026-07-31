console.clear()
let s = document.querySelector(".seconds")
console.log(s)
let m = document.querySelector(".minutes")
console.log(m)
let h = document.querySelector(".hours")
console.log(h)

setInterval(function (){
    let date = new Date()
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hs = date.getHours()
    console.log(hs,min,sec)

s.style.transform = `rotate(${sec * 6}deg)`
m.style.transform = `rotate(${min * 6 + hs * 0.5}deg)`
h.style.transform = `rotate(${hs * 30 + min *0.5}deg)`
},1000)




