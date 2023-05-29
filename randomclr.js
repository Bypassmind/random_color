const getcolor = () => {
    const randomnumber =Math.floor(Math.random() * 1677215);
    
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    
}
document.getElementById('btn').addEventListener('click', getcolor)
function hell(){
    document.getElementById('btn').click;
}
setInterval(() => {
    document.getElementById('btn').addEventListener('click', hell)
}, 1000);
getcolor();



