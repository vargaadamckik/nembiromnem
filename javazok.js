var img = document.getElementById("meme");
var counter = document.getElementById("szam");
var count = parseInt(counter.innerHTML, 10);
let ff = false;
let up3 = false;
let b3 = document.getElementById("boost3");
var changecount = 0;
var kattosido = 200;
document.getElementById("auto1").style.display = "none";
document.getElementById("bc").style.display = "none";
document.getElementById("nerf").style.display = "none";
kepcount = 0;

function incrementalok() {
    if (!ff) {
        let kattido = true;
        img.addEventListener("click", function () {
            if (!kattido) return;
            kattido = false;
            setTimeout(() => {
                kattido = true;
            }, kattosido);

            if (changecount == 0) {
                count++;
            } else {
                count += changecount;
            }
            counter.innerHTML = count;
        });
        ff = true;
        designolok()       
    }
}

function designolok() {
    img.addEventListener("mouseup", function () {
        img.classList.remove("ac");
    });

    img.addEventListener("mousedown", function () {
        img.classList.add("ac");
    });
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

function upgrade1() {
    let arszam = document.getElementById("arszam");
    let booster = document.getElementById("boost");
    if (count >= arszam.innerText)  {
        count -= arszam.innerText;
        if (count <= 100000) {           
            if (changecount == 0) {
            changecount += 2;
            }
            else {
                changecount *= 2;
            }
        }
        else {
            changecount *= 1.5;
            document.getElementById("nerf").style.display = "block";
        } 
        arszam.innerText = arszam.innerText * 3.5;
        booster.innerText = changecount;
    }
}

function upgrade2() {

}

function upgrade3() {
    let kszam = document.getElementById("kszam");
    if (count >= kszam.innerText)  {
        count -= kszam.innerText;
        kszam.innerText = "Megvéve"
        up3 = true;           
    }
}

function upgrade4() {

}