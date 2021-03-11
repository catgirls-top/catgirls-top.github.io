let clickable = false;
let i = 0;
document.getElementById("text").innerHTML = rnd(0)
setTimeout(() => {
    const int = setInterval(() => {
        console.log(rnd(i) + "catgirls.top".substring(12 - i))
        document.getElementById("text").innerHTML = rnd(i) + "catgirls.top".substring(12 - i);
        i++;
        if (i == 13) {
            clickable = true;
           return clearInterval(int)
        }
    }, 100)
}, 300)

function rnd(l) {
    var length = 12 - l;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
let clicked = false;
function bruh() {
    if(clickable){
    if(clicked) return window.open("https://github.com/catgirls-top", "");
    clicked = true;
    document.getElementById("text").innerHTML = "Click again for github";
    setTimeout(()=>{
        clicked = false;
        document.getElementById("text").innerHTML = "catgirls.top";
    },1000)
}
}