const wordArr = ['სახლი', 'ბავშვი', 'სპილო', 'ძაღლი'];
console.log (wordArr);
const randomElement = wordArr [Math.floor(Math.random() * wordArr.length)];
console.log(`გამოსაცნობი სიტყვა - ${randomElement}`);

const guessWord = [];
for (let i=0; i<randomElement.length; i++) {
    guessWord.push('_')
}
console.log(...guessWord)

let numberOfTires = Number(prompt('შეიყვანე ცდების რაოდენობა'));
console.log(`ცდების რაოდენობაა ${numberOfTires}`);
for(let i=1; i<= numberOfTires; i++) {
    let letter = prompt('შეიყვანეთ ასო');
}

for(let i=1; i<= numberOfTires; i++) {
    let letter = prompt('შეიყვანეთ ასო');

    for (let j = 0; j < randomElement.length; j++) {
        if (randomElement[j] === letter) {
            console.log(`შეიცავს (${letter}) - ს, გააგრძელე ცდა`);
            guessWord[j] = letter;
        }
    }

    if (randomElement.indexOf(letter) === -1 ) {
        console.log(`არ შეიცავს (${letter}) - ს, კიდევ სცადე`);
    }

    console.log(...guessWord);
}
