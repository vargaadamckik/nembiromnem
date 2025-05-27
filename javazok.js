var img = document.getElementById("meme");
var counter = document.getElementById("szam");
var count = parseInt(counter.innerHTML, 10);
let ff = false;
var changecount = 0;
document.getElementById("auto1").style.display = "none";
document.getElementById("bc").style.display = "none";
kepcount = 0;

function incrementalok() {
    if (!ff) {
        img.addEventListener("click", function() {
            if (changecount == 0) {
                count++;
            }
            else {
                count += changecount;
            }
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

function upgradek() {
    let arszam = document.getElementById("arszam");
    if (count >= arszam.innerText)  {
        if (changecount == 0) {
            changecount += 2;
        }
        else {
            changecount *= 2;
        }
        arszam.innerText = arszam.innerText * 3;
    }
}