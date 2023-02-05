let homePt = 0
let guestPt = 0
let parent = ""

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

function newSet() {
    document.getElementById("home-pt").textContent = 0
    document.getElementById("guest-pt").textContent = 0
}

function newMatch() {
    document.getElementById("home-pt").textContent = 0
    document.getElementById("guest-pt").textContent = 0
}