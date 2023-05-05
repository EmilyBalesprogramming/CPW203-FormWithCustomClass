class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly: boolean;
}



window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;

}
function addVideoGame(){
    
  if(isAllDataValid("price-required", "This is required")){
    let game = getVideoGame();
    displayGame(game);
  }
}
//add validation code
function isAllDataValid(id:string, errMsg:string):boolean{
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}



function displayGame(myGame:VideoGame):void{
    let displayDiv = document.getElementById("display");
    let notDigitDisplay = "not";
    if(myGame.isDigitalOnly){
        notDigitDisplay = "";
    }

    //create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //create paragraph with game details
    let gameInfo = document.createElement("p");
    
    
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $ ${myGame.price.toFixed(2)}. It is ${notDigitDisplay} digital only`;
    //add <h2> in <div id="display">
    displayDiv.appendChild(gameHeading);

    //Add <p> game info
    displayDiv.appendChild(gameInfo);

}
/**
 * Gets all game data from the form
 * @returns  VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    
    //title
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    //price
    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    //rating
    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    //Online only
    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    
    return game;
}