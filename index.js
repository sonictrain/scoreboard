let homePt = 0
let guestPt = 0
let setNumber = 1

document.getElementById("guest-pt").textContent = guestPt

function addPoints() {
    var class_name = event.target.className
    console.log("The class is: " + class_name)

    var parent_class = event.target.parentElement.className
    console.log("The parent is: " + parent_class)

    if (parent_class == "home-button-container") {
        homePt += Number(class_name)
        document.getElementById("home-pt").textContent = homePt
    } else {
        guestPt += Number(class_name)
        document.getElementById("guest-pt").textContent = guestPt
    }
}

function resetPoints() {
    homePt = 0
    guestPt = 0
    document.getElementById("home-pt").textContent = homePt
    document.getElementById("guest-pt").textContent = guestPt
}

function newSet() {
    resetPoints()
    //addset2logs(setNumber, homePt, guestPt)
}

function newGame() {
    resetPoints()
    //addGame2logs(homePt, guestPt)
}