var banlistUrl = "https://hyphen-ated.github.io/toadbans/banlist.txt";
var output = document.getElementById("output");
function checkList() {
    
    fetch(banlistUrl)
    .then(function(response) {
        response.text().then(doCheck);
    });
}

function doCheck(text) {
    output.value = "";
    var banlist = {};
    var banlines = text.split('\n');
    for(var i = 0; i < banlines.length; ++i) {
        var card = banlines[i].toLowerCase().trim();
        if(!card.startsWith("//") && card.length > 1) {
            banlist[card] = 1;      
        }               
    }
    var textarea = document.getElementById("deck");
    var decklines = textarea.value.split('\n');
    for(var i = 0; i < decklines.length; ++i) {
        var card = decklines[i].toLowerCase().trim();
        if (card in banlist) {
            output.value += card + " is banned\n";
        }
    }
    output.value += "Done with check";
}