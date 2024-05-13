function selectWinner() {
    const teams = ['Islamabad United', 'Karachi Kings', 'Quetta Gladiators', 'Peshawar Zalmi', 'Lahore Qalandars', 'Multan Sultan'];
    const winnerIndex = Math.floor(Math.random() * teams.length);
    const winner = teams[winnerIndex];
    document.getElementById('result').innerHTML = 'The Winner of the Trophy is: ' + winner;
}
