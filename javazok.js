var img = document.getElementById("meme");
var counter = document.getElementById("szam");
var count = parseInt(counter.innerHTML, 10);
let ff = false;
document.getElementById("auto1").style.display = "none";
document.getElementById("bc").style.display = "none";

function incrementalok() {
    if (!ff) {
        img.addEventListener("click", function() {
            count++;
            counter.innerHTML = count;
        });
        ff = true;
    }
}