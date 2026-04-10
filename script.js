let contadores = {
    df2: 0,
    sinister: 0
};

function like(peli) {
    contadores[peli]++;
    document.getElementById(peli).innerText = "Likes: " + contadores[peli];
}
