var img = document.getElementById("meme");
var counter = document.getElementById("szam");
var count = parseInt(counter.innerHTML, 10);
let ff = false;
document.getElementById("auto1").style.display = "none";
document.getElementById("bc").style.display = "none";
kepcount = 0;

function incrementalok() {
    if (!ff) {
        img.addEventListener("click", function() {
            count++;
            counter.innerHTML = count;
        });
        ff = true;
        img.addEventListener("mouseup", function() {
            img.classList.remove("ac");
        })
        img.addEventListener("mousedown", function() {
            img.classList.add("ac");
        })
    }
}

function kepcsere() {
    if (kepcount != 1) {
        kepcount++;
    }
    else {
        kepcount--;
    }
    const kepturn = document.getElementById("kepeses");
    if (kepcount === 1) {
        kepturn.classList.remove("darkmode");
        kepturn.classList.add("lightmode");
    }
    else {
        kepturn.classList.remove("lightmode");
        kepturn.classList.add("darkmode");
    }
}