function seemore(){
    document.getElementById("shop__session2").style.display = "block";
    document.getElementById("seemore__btn").style.display="none";
    document.getElementById("seeless__btn").style.display = "inline";
}
function seeless(){
    document.getElementById("shop__session2").style.display = "none";
    document.getElementById("seemore__btn").style.display="inline";
    document.getElementById("seeless__btn").style.display = "none";
}
/* */
var num = 0;
var maintoggle = document.getElementById("toggle__item");
var menuetoggle = document.getElementById("toggle");
const notif = document.getElementById('notif__container');
maintoggle.innerHTML = "&nbsp"+num+" items";
function addcart(){
    ++num;
    maintoggle.innerHTML = "&nbsp"+num+" items";
    var newp = document.createElement("p");
    var contentpara = document.createTextNode(" 1 new t-shirt");
    newp.appendChild(contentpara);
    newp.setAttribute("id","lastparag");
    menuetoggle.appendChild(newp);
    var newnotif = document.createElement("div");
    var contentnotif = document.createTextNode("one item added.");
    newnotif.appendChild(contentnotif);
    notif.appendChild(newnotif);
    newnotif.classList.add('notif');
    setTimeout(() => {
        newnotif.remove();
    },1000);
}
/* */
function dashcart(){
    if(num==0){
        num=0;
    }else{
        --num;
    }
    maintoggle.innerHTML = "&nbsp"+num+" items";
    var lastp = document.getElementById("lastparag");
    menuetoggle.removeChild(lastp);
}