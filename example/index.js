// let showQ = 0;
// function showQuantity() {
//     console.log(`Show Quantity: ${showQ}`);
// }

// function addToCart() {
//     showQ = showQ + 1;
//     console.log(`Cart Quantity: ${showQ}`);
// }

// function plusTwo() {
//     showQ = showQ + 2;
//     console.log(`Cart Quantity: ${showQ}`);
// }
// function plusThree() {
//     showQ = showQ + 3;
//     console.log(`Cart Quantity: ${showQ}`);
// }

// function minusOne() {
//     showQ = showQ - 1;
//     console.log(`Cart Quantity: ${showQ}`);
// }

// function minusTwo() {
//     showQ = showQ - 2;
//     console.log(`Cart Quantity: ${showQ}`);
// }

// function minusThree() {
//     showQ = showQ - 3;
//     console.log(`Cart Quantity: ${showQ}`);
// }

// function resetCart() {
//     showQ = 0;
//     console.log('Cart was reset.'); console.log(`Cart quantity: ${showQ}`);
// }




function rock() {
    
    const randomNumber = Math.random();
   
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    
    let result = '';
    if (computerMove === 'rock') {
        result = 'Draw.';
    } else if (computerMove === 'paper') {
        result = 'You lose.';
    } else if (computerMove === 'scissors') {
        result ='You win.';
    }
    alert(`You picked rock. Computer picked ${computerMove}.\n ${result}`)
}

function paper() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    
    let result = '';
    if (computerMove === 'rock') {
        result = 'You win.';
    } else if (computerMove === 'paper') {
        result = 'Draw.';
    } else if (computerMove === 'scissors') {
        result ='You lose.';
    }
    alert(`You picked paper. Computer picked ${computerMove}.\n ${result}`)
}

function scissors() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    
    let result = '';
    if (computerMove === 'rock') {
        result = 'You lose.';
    } else if (computerMove === 'paper') {
        result = 'You win.';
    } else if (computerMove === 'scissors') {
        result ='Draw.';
    }
    alert(`You picked scissors. Computer picked ${computerMove}.\n ${result}`)
 }

