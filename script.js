// Function to open a specific tab
function openTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Initial function call to open the default tab
document.getElementById("ViewSamples").style.display = "block";
document.getElementsByClassName("tablink")[0].classList.add("active");

