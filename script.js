document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("right").addEventListener("click", rightClick);
let imagesList = ["./завантаження (1).jpg","./завантаження.jpg","./roughing-it-in-an-rv.jpg","./TowerB.jpg","./TDS.jpg","./escapist.jpg"];
let i = 0;
function leftClick() {
    if(i <= imagesList.length && i > 0){
        i--;
        document.getElementById("image").src = imagesList[i];
    }
    else{
        i = imagesList.length-1;
        document.getElementById("image").src = imagesList[i];
    }
}
function rightClick() {
    if(i < imagesList.length - 1 && i >= 0){
        i++;
        document.getElementById("image").src = imagesList[i];
    }
    else{
        i = 0;
        document.getElementById("image").src = imagesList[i];
    }
}
