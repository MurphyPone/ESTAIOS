function selectPlayer() {
    var chooseBtn = document.getElementById("btn-select")
    var player = document.getElementById("player")
    var showHide = document.getElementById("show-hide")

    chooseBtn.style = "display: none"
    player.style = "display: inline"
    showHide.style = "display: inline; float: right"

    player.innerHTML = getPlayer()
}

function getPlayer() {
    if (Math.random() < 0.3) {
        return "Alien";
    } else {
        return "Astronaut"
    }
}

function toggleStatus() {
    console.log(document.getElementById("player").style.display)
    if (document.getElementById("player").style.display == "inline" ) {
        document.getElementById("player").style.display = "none"
    } else {
        document.getElementById("player").style.display = "inline"
    }
}

function genTile() {
    var num = Math.random()
    console.log(num)
    if(num < 0.33) {
        document.getElementById("tile").style.background = "red"
        console.log(document.getElementById("tile").style.background)
        return 
    }
    if (num < 0.66) {
        document.getElementById("tile").style.background = "green"
        console.log(document.getElementById("tile").style.background)
        return 
    }
    document.getElementById("tile").style.background = "white"
    console.log(document.getElementById("tile").style.background)
    return 
}