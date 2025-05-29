var img = document.getElementById("meme");
var counter = document.getElementById("szam");
var count = parseInt(counter.innerHTML, 10);
let ff = false;
let up3 = false;
let arszam = document.getElementById("arszam");
let booster = document.getElementById("boost");
let arszam2 = document.getElementById("arszam2");
let boost2 = document.getElementById("boost2");
let kszam = document.getElementById("kszam");
let kszam2 = document.getElementById("karszam2");
let debuff = document.getElementById("debuff");
let nerftime = false;
let jagerreset = false;
let b3 = document.getElementById("boost3");
var matek = Math.floor((Math.round(Math.log10(count) * 2) * (upbg / 20)));
var changecount = 0;
var smallcountbuff = 1;
var upbg = 0;
var kattosido = 200;
var kaido = 19;
var memorypoint = 0;
const meret = 5;
const doboz = document.getElementById('game');
let tabla = [];
let aktualis = null;
let varjaAKattintast = false;
document.getElementById("auto1").style.display = "none";
document.getElementById("bc").style.display = "none";
document.getElementById("nerf-message").style.display = "none";
document.getElementById("ides").style.display = "none";
document.getElementById("ides2").style.display = "none";
document.getElementById("test").style.display = "none";
document.getElementById("mem").style.display = "none";
document.getElementById("vmiupgrades").style.display = "none";

function incrementalok() {
    if (!ff) {
        let kattido = true;
        img.addEventListener("click", function () {
            if (!kattido) return;
            kattido = false;
            jagerreset = false;
            setTimeout(() => {
                kattido = true;
            }, kattosido);

            if (changecount == 0) {
                count++;
            } else {              
                if (up3) {
                    matek = Math.floor((Math.round(Math.log10(count) * 2) * (upbg / 20)));
                    count += (changecount * matek) * smallcountbuff;
                    b3.innerText = matek;
                }
                else {
                    count += changecount * smallcountbuff;
                }
            }
            if (count >= 1000000) {
                counter.innerHTML = (count / 1000000).toFixed(1) + " M";
            } 
            else {
                counter.innerHTML = Math.floor(Math.round(count));
            }
            if (count >= 50000000) {
                jagerreset = true;
                document.getElementById("ides").style.display = "block";
                document.getElementById("ides2").style.display = "block";
            }
        });
        ff = true;
        designolok()       
    }
}

function jagered() {
    if (jagerreset) {
        count = 0;
        upbg = 0;
        changecount = 0;
        boost2.innerText, booster.innerText, b3.innerText = "0"
        debuff.innerText = "0.2"
        arszam.innerText = 20;
        arszam2.innerText = 1500;
        kszam.innerText = 20000;
        kszam2.innerText = 10000;
        smallcountbuff = 1;
        up3 = false;
        kaido = 20;
        kattosido = 200;
        document.getElementById("test").style.display = "block";
        document.getElementById("nerf-message").style.display = "none";
        document.getElementById("mem").style.display = "block"
        document.getElementById("vmiupgrades").style.display = "block";
        jatek();
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
    if (count >= arszam.innerText)  {
        count -= arszam.innerText;
        upbg += 1;
        if (count <= 100000 && arszam.innerText <= 100000) {           
            if (changecount == 0) {
            changecount += 2;
            }
            else {
                changecount *= 2;
            }
        }
        if (arszam.innerText >= 100000) {
            changecount *= 1.5;
            document.getElementById("nerf-message").style.display = "block";
        } 
        arszam.innerText = Math.floor(Math.round(arszam.innerText * 2.75));
        booster.innerText = changecount;
    }
}

function upgrade2() {
    if (count >= arszam2.innerText) {
        count -= arszam2.innerText;
        upbg += 1;
        arszam2.innerText = Math.floor(Math.round(arszam2.innerText * 2));
        smallcountbuff *= 1.1;      
    }
    boost2.innerText = smallcountbuff.toFixed(2);
}

function upgrade3() {
    if (count >= kszam.innerText)  {
        upbg += 1;
        count -= kszam.innerText;
        kszam.innerText = "Megvéve"
        up3 = true;           
    }
}

function upgrade4() {
    if (count >= kszam2.innerText)  {        
        if (kaido >= 1) {
            upbg += 1;
            count -= kszam2.innerText;
            kszam2.innerText = Math.floor(Math.round(kszam2.innerText *= 1.5));
            if (kattosido > 100) {
                kattosido -= 10;
                debuff.innerText = "0." + kaido;
                kaido -= 1;
            }
            else {
                kattosido -= 10;
                debuff.innerText = "0.0" + kaido;
                kaido -= 1;
            }
        }
        
    }
}

function tablageneralas() {
  doboz.innerHTML = '';
  tabla = [];
  for (let i = 0; i < meret; i++) {
    const tr = document.createElement('tr');
    const sorLista = [];
    for (let j = 0; j < meret; j++) {
      const td = document.createElement('td');
      td.dataset.sor = i;
      td.dataset.oszlop = j;
      td.style.width = '50px';
      td.style.height = '50px';
      td.style.border = '1px solid black';
      td.style.cursor = 'pointer';
      td.addEventListener('click', () => {
        if (varjaAKattintast) kattintas(td);
      });
      sorLista.push(td);
      tr.appendChild(td);
    }
    tabla.push(sorLista);
    doboz.appendChild(tr);
  }
}

function ujRandomTile() {
  let sor, oszlop;
  do {
    sor = Math.floor(Math.random() * meret);
    oszlop = Math.floor(Math.random() * meret);
  } while (aktualis && tabla[sor][oszlop] === aktualis);
  return tabla[sor][oszlop];
}

function mutatTile() {
  if (aktualis) {
    aktualis.classList.remove('zold', 'piros');
  }
  aktualis = ujRandomTile();
  aktualis.classList.add('zold');
  varjaAKattintast = true;
}

function kattintas(td) {
  varjaAKattintast = false;
  if (td === aktualis) {
    aktualis.classList.remove('zold');
    memorypoint++;
    document.getElementById("mempont").innerText = memorypoint;
    setTimeout(() => {
      mutatTile();
    }, 500);
  } else {
    td.classList.add('piros');
    setTimeout(() => {
      td.classList.remove('piros');
      mutatTile();
    }, 700);
  }
}

function jatek() {
  tablageneralas();
  mutatTile();
}

function vup1() {
    let vvar = document.getElementById("varszam");
}