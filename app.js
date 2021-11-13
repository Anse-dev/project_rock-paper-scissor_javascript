const start= ()=>{
    
    //Les elements du DOM
    let compteur="";
    let compteurC="";
    let compteurP="";
    const computerHand= document.querySelector(".computer_hand");
    const computerValue= document.querySelector(".value_computer")
    const ComputerScore= document.querySelector(".computer_score")
    const PlayerScore= document.querySelector(".player_score")
    const result= document.querySelector(".resul h3")
    //Function élémentaire
    
    function win(Pchoice, computerChoice){
        
        compteurP ++
        PlayerScore.innerHTML= compteurP;
        result.innerHTML= Pchoice+" gagne face à "+computerChoice+"!  Player est rapportant"
    }
    
    function lose(Pchoice, computerChoice){
       compteurC ++
       ComputerScore.innerHTML= compteurC;
       result.innerHTML= computerChoice+" gagne face à "+Pchoice+"!  Computer est gagant"
    }
    function same(Pchoice, computerChoice){
      result.innerHTML= computerChoice+" est égal "+Pchoice+"!  Réjouer"
        
    }
    
    
    function getComputerChoice(){
        let Choices= ["pierre","papier", "ciseaux"]
        const randomChoice= Math.floor(Math.random()*3);
        return  Choices[randomChoice];
        
    }
    
    //Le jeu en question ;l'action 
    let run= function(Pchoice){
        let computerChoice= getComputerChoice();
        computerValue.innerHTML= computerChoice;
        computerHand.src="assets/"+computerChoice+".png";
        
        switch(Pchoice + computerChoice){
            case"pierreciseaux":
            case"ciseauxpapier":
            case"papierpierre":
                win(Pchoice, computerChoice)
                break;
            case"ciseauxpierre":
            case"papierciseaux":
            case"pierrepapier":
                lose(Pchoice, computerChoice);
                break;
            case"ciseauxciseaux":
            case"pierrepierre":
            case"papierpapier":
                same(Pchoice, computerChoice)
                break;
        }
            
        
        
    }
    
    //Ecouteur sur les bouttons de choix du playeur
    const buttons= document.querySelectorAll(".play_value button");
    buttons.forEach(element => {
        element.addEventListener("click",function(event){
            const value_player= document.querySelector(".value_player");
            const player_image= document.querySelector(".player-images img");
            const pChoice= this.innerHTML;
            value_player.innerHTML= pChoice;
            player_image.src="assets/"+this.innerHTML+".png"
            
            run(pChoice)
        
            
        })
    });
}
start();