var skrungles = 0;
var cursors = 0;
var trappers = 0;
var dens = 0;
var sps = 0;
var nextCursorCost = 0;
var nextTrapperCost = 0;
var nextDenCost = 0;

function skrungClick(number) {
    skrungles = skrungles + number;
    document.getElementById("skrungles").innerHTML = Math.floor(skrungles);
}

function buyCursor() {
    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));     //works out the cost of this cursor
    if (skrungles >= cursorCost) {                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        skrungles = skrungles - cursorCost;                          //removes the currency spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('skrungles').innerHTML = Math.floor(skrungles);  //updates the amount of currency for the user
        calculateSPS();
    };
    nextCursorCost = Math.floor(10 * Math.pow(1.1, cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorCost;  //updates the cursor cost for the user
};

function buyTrapper() {
    var trapperCost = Math.floor(100 * Math.pow(1.2, trappers));
    if (skrungles >= trapperCost) {
        trappers = trappers + 1;
        skrungles = skrungles - trapperCost;
        document.getElementById('trappers').innerHTML = trappers;
        document.getElementById('skrungles').innerHTML = Math.floor(skrungles);
        calculateSPS();
    }
    nextTrapperCost = Math.floor(100 * Math.pow(1.2, trappers));
    document.getElementById('trapperCost').innerHTML = nextTrapperCost
}

function buyDen() {
    var denCost = Math.floor(10000 * Math.pow(1.3, dens));
    if (skrungles >= denCost) {
        dens = dens + 1;
        skrungles = skrungles - denCost;
        document.getElementById('dens').innerHTML = dens;
        document.getElementById('skrungles').innerHTML = Math.floor(skrungles);
        calculateSPS();
    }
    nextDenCost = Math.floor(10000 * Math.pow(1.3, dens));
    document.getElementById('denCost').innerHTML = nextDenCost
}

function calculateSPS() { 
    sps = Math.floor(cursors * 1 + trappers * 10 + dens * 100);
    document.getElementById('sps').textContent = sps;
}

window.setInterval(function save() {
    localStorage.setItem("skrungles", skrungles);
    localStorage.setItem("cursors", cursors);
    localStorage.setItem("trappers", trappers);
    localStorage.setItem("dens", dens);

    localStorage.setItem("nextCursorCost", nextCursorCost);
    localStorage.setItem("nextTrapperCost", nextTrapperCost);
    localStorage.setItem("nextDenCost", nextDenCost);
}, 5000)

function load() {
    skrungles = localStorage.getItem("skrungles");
    skrungles = parseInt(skrungles);
    cursors = localStorage.getItem("cursors");
    cursors = parseInt(cursors);
    trappers = localStorage.getItem("trappers");
    trappers = parseInt(trappers);
    dens = localStorage.getItem("dens");
    dens = parseInt(dens);

    nextCursorCost = localStorage.getItem("nextCursorCost");
    nextCursorCost = parseInt(nextCursorCost);
    nextTrapperCost = localStorage.getItem("nextTrapperCost");
    nextTrapperCost = parseInt(nextTrapperCost);
    nextDenCost = localStorage.getItem("nextDenCost");
    nextDenCost = parseInt(nextDenCost);

    document.getElementById("skrungles").innerHTML = Math.floor(skrungles);
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("trappers").innerHTML = trappers;
    document.getElementById("dens").innerHTML = dens;

    document.getElementById("cursorCost").innerHTML = nextCursorCost;
    document.getElementById("trapperCost").innerHTML = nextTrapperCost;
    document.getElementById("denCost").innerHTML = nextDenCost;
}

window.onload = load;

window.setInterval(function () {
    skrungClick(cursors * .1);
    skrungClick(trappers * 1);
    skrungClick(dens * 10);
    calculateSPS();
}, 100);