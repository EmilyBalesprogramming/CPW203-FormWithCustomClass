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
  if(isAllDataValid()){
    let game = getVideoGame();
    displayGame(game);
  }
}
//add validation code
function isAllDataValid(){
    return true;
}

function displayGame(myGame:VideoGame):void{


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