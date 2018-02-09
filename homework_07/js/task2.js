for(let i = 0; ; i++) {
    let game = confirm("Do you want to play a game?");
    let startPrize = 10;
    let attempts = 3;
    let startPeriod = 0;
    let endPeriod = 5;
    let prize = 10;
    let totalPrize = 0;
    let answer = null;

    let rand = startPeriod - 0.5 + Math.random() * (endPeriod - startPeriod + 1);
        rand = Math.round(rand);

    // console.log(rand);

    if(game) {
        for(let j = 0; ; j++) {
            let level1 = prompt(`Enter a number from ${startPeriod} to ${endPeriod} \nAttempts left: ${attempts}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize}$`, "");
            answer = parseInt(level1);

            if(answer === rand) {
                let gameContinue = confirm("Do you want to continue a game?");
                totalPrize += prize;

                if(gameContinue) {
                    attempts = 3;
                    startPrize *= 3;
                    prize = startPrize;
                    endPeriod *= 2;
                    rand = startPeriod - 0.5 + Math.random() * (endPeriod - startPeriod + 1);
                    rand = Math.round(rand);
                    // console.log(rand);
                } else {
                    console.log(`Thank you for a game. Your prize is: ${totalPrize}$`);
                    break;
                }
            } else {
                attempts--;
                prize = Math.floor(prize / 2);
            }

            if(attempts < 1) {
                console.log(`Thank you for a game. Your prize is: ${totalPrize}$`);
                break;
            }
        }



    } else {
        console.log("You did not become a millionaire");
        break;
    }
}
