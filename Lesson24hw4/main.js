let player1 = prompt ('პირველი მოთამაშე ირჩევს: ქვა, მაკრატელი, ქაღალდი ');
if (player1 === 'მაკრატელი' || player1 === 'ქვა' || player1 === 'ქაღალდი') {
    console.log(player1);
}

else {
    console.log ('არასწორი მცდელობაა');
}

let player2 = prompt ('მეორე მოთამაშე ირჩევს - ქვა, მაკრატელი, ქაღალდი');
if (player2 === 'მაკრატელი' || player2 === 'ქვა' || player2 === 'ქაღალდი'){
    console.log(player2);
}

else {
    console.log ('არასწორი მცდელობაა');
}

if (player1 === player2) {
    console.log ('ფრე');
}
if (player1 === 'ქვა' && player2 === 'მაკრატელი' || player1 === 'ქაღალდი' && player2 === 'ქვა' || player1 === 'მაკრატელი' && player2 === 'ქაღალდი') {
    console.log(`გამარჯვებულია ${player1}`);
}

else {
    console.log(`გამარჯვებულია ${player2}`);
}
