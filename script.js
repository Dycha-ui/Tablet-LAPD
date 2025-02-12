function showSection(sectionId) {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("verdict").style.display = "none";
    document.getElementById("scanner").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}
