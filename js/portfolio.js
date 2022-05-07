const txt1 = "Hi,";
const txt2 = "I am Kawther";
const txt3 = "a web developer.";
let index = 0;
function writeText(){
    document.getElementById("demo1").innerText = txt1.slice(0,index);
    document.getElementById("demo2").innerText = txt2.slice(0,index);
    document.getElementById("demo3").innerText = txt3.slice(0,index);
    index++;
}
setInterval(writeText,200);