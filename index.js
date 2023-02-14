let homePt = 0
let guestPt = 0
let set = 1
let log = ""
let spacer = "<br>"
let setNumber = 5
let setTarget = 25
let lastSetTarget = 21
let homeWin = 0
let guestWin = 0

document.getElementById("guest-pt").textContent = guestPt

function addPoints() {
    var class_name = event.target.className
    // console.log("The class is: " + class_name)

    var parent_class = event.target.parentElement.className
    // console.log("The parent is: " + parent_class)

    if (parent_class == "home-button-container") {
        homePt += Number(class_name)
        document.getElementById("home-pt").textContent = homePt
        checkScore(homePt, guestPt, setTarget, set)
    } else {
        guestPt += Number(class_name)
        document.getElementById("guest-pt").textContent = guestPt
        checkScore(homePt, guestPt, setTarget, set)
    }
}

function resetPoints() {
    homePt = 0
    guestPt = 0
    document.getElementById("home-pt").textContent = homePt
    document.getElementById("guest-pt").textContent = guestPt
}

function addset2logs() {
    log = "#" + set + ": " + homePt + " - " + guestPt + "<br>"
    document.getElementById("set-log").innerHTML += log
    document.getElementById("match-log").innerHTML += spacer
    log = homeWin + " - " + guestWin + "<br>"
    document.getElementById("set-point").innerHTML += log 
    set++
}

function addgame2logs() {
    if (homePt > guestPt) {
        log = "Home wins!"
    } else {
        log = "Guest wins!"
    }
    document.getElementById("match-log").innerHTML += log
    log = "#" + set + ": " + homePt + " - " + guestPt + "<br>"
    document.getElementById("set-log").innerHTML += log
    log = homeWin + " - " + guestWin + "<br>"
    document.getElementById("set-point").innerHTML += log 
    set = 1
    homeWin = 0
    guestWin = 0
}

function newSet() {
    addset2logs()
    resetPoints()
}

function newGame() {
    addgame2logs()
    resetPoints()
}


function checkScore(homePt, guestPt, setTarget, set) {
    if (homePt == setTarget) {
        if (guestPt <= homePt-2) {
            if (homeWin < setNumber/2 - 1) {
                console.log("Home team wins set #: " + set)
                homeWin++
                newSet()
            } else if (homeWin > setNumber/2 - 1) {
                homeWin++
                console.log("Home team wins the game")
                newGame()
            }
            
        } else {
            setTarget = guestPt + 2
        }
    } else if (guestPt == setTarget) {
        if (homePt <= guestPt-2) {
            if (guestWin < setNumber - 1) {
                console.log("Guest team wins set #: " + set)
                guestWin++
                newSet()
            } else if (guestWin > setNumber/2 - 1) {
                guestWin++
                console.log("Guest team wins the game")
                newGame()
            }
        } else {
            setTarget = guestPt + 2
        }
    } else {
        console.log(homePt + " - " + guestPt)
    }
}