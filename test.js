const rollsB = (num) => {
    let rolls = [];

    for (let i = 0; i < num; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    } 
    console.log(rolls);
}

rollsB(6);