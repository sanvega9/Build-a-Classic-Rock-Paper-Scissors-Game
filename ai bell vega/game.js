//game coding function
function gameplaying(userchoices){
    const choices = ['rock','paper','scissors'];
    const randomi = Math.floor(Math.random()*3);
    const aicomputerrandom = choices[randomi];
    
    if(userchoices === aicomputerrandom){
        displayresults('draw',userchoices, aicomputerrandom);
    } else if (
        (userchoices === 'rock' && aicomputerrandom ==='scissors') ||
        (userchoices === 'paper'&&aicomputerrandom ==='rock') ||
        (userchoices ==='scissor'&& aicomputerrandom === 'paper')
    ){
        updateScore('user')
        displayresults('win', userchoices,aicomputerrandom);
    } else{
        updateScore('ai-computer')
        displayresults('lose',userchoices,aicomputerrandom);
    }

}
function updateScore(winner){
    if (winner === 'user'){
        let userScore = parseInt(document.getElementById('users').textContent);
        document.getElementById('users').textContent = userScore + 1;
    } else if (winner ==='ai-computer'){
        let userScore = parseInt(document.getElementById('ai-computer').textContent);
        document.getElementById('ai-computer').textContent = userScore + 1;
    }
}

function displayresults(results,userchoices, aicomputerrandom){
    let resultsText;
    switch (results){
        case 'win':
            resultsText = `You win ${userchoices}beats ${aicomputerrandom}.`
            break;
        case 'lose':
            resultsText = `You lose ${aicomputerrandom}beats ${userchoices}.`           
            break;
        case 'draw':      
            resultsText = `It's draw! You both ${userchoices}.`     
            break;
    }
    document.getElementById('result-text').textContent = resultsText;
}
document.getElementById('rock').addEventListener('click',function() {
    gameplaying('rock');
    });
document.getElementById('paper').addEventListener('click',function() {
    gameplaying('paper');
    });
document.getElementById('scissors').addEventListener('click',function() {
    gameplaying('scissors');
    });