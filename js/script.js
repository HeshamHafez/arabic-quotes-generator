

function displayQuote(){
    var randomQuote = Number.parseInt(Math.random()*quoteList.length + 1);
    document.getElementById("quoteP").innerHTML = `\"${quoteList[randomQuote].quote}\"`;
}


