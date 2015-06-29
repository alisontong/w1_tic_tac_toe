// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function(event) {
	event.preventDefault();
  alert("page loaded");
});
function click() {
    if (this.id == "cell1") {
        document.getElementById("cell1").innerHTML = "X";
    } else if (this.id == "cell2") {
        document.getElementById("cell2").innerHTML = "X";
    } else if (this.id == "cell3") {
        document.getElementById("cell3").innerHTML = "X";

    } else if (this.id == "cell4") {
        document.getElementById("cell4").innerHTML = "X";
    } else if (this.id == "cell5") {
        document.getElementById("cell5").innerHTML = "X";
    } else if (this.id == "cell6") {
        document.getElementById("cell6").innerHTML = "X";

    } else if (this.id == "cell7") {
        document.getElementById("cell7").innerHTML = "X";
    } else if (this.id == "cell8") {
        document.getElementById("cell8").innerHTML = "X";
    } else if (this.id == "cell9") {
        document.getElementById("cell9").innerHTML = "X";

    }
}

document.getElementById("cell1").onclick = click;
document.getElementById("cell2").onclick = click;
document.getElementById("cell3").onclick = click;
document.getElementById("cell4").onclick = click;
document.getElementById("cell5").onclick = click;
document.getElementById("cell6").onclick = click;
document.getElementById("cell7").onclick = click;
document.getElementById("cell8").onclick = click;
document.getElementById("cell9").onclick = click;

