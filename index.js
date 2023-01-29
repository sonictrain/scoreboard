let homePt = 0
let guestPt = 0

document.getElementById("guest-pt").textContent = GuestPt

function add1() {
    console.log("Home +1 clicked")
    homePt += 1
    document.getElementById("home-pt").textContent = homePt
}

function add2() {
    console.log("Home +2 clicked")
    homePt += 2
    document.getElementById("home-pt").textContent = homePt
}

function add3() {
    console.log("Home +3 clicked")
    homePt += 3
    document.getElementById("home-pt").textContent = homePt
}

