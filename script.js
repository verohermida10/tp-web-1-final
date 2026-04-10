let contadores = {
    df2: 0,
    sinister: 0,
    gonjiam: 0,
    wer: 0,
    sinister2: 0,
    martyrs: 0,
};

function like(peli) {
    contadores[peli]++;
    document.getElementById(peli).innerText = "Likes: " + contadores[peli];
}
