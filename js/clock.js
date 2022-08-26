/*
CODED BY FERNANDO MACHADO
https://github.com/fmachadoweb
*/

const clock = document.querySelector("div.clock span")

const renderClock = () => {
    const time = new Date()
    clock.innerHTML = ("0" + time.getHours()).slice(-2) + ":"
    + ("0" + time.getMinutes()).slice(-2) + ":"
    + ("0" + time.getSeconds()).slice(-2)
}

setInterval(() => {
    renderClock()
}, 1000)
