
var quoteList = [
    {
        quote: "في قلبي صدى ما بحبش حدى.",
        quoteCountry: "فلسطين"
    },
    {
        quote: "سيدي مليح زاده الهوى والريح.",
        quoteCountry: "الجزائر"
    },
    {
        quote: "اللي باعك بالفول بيعه بالقشور.",
        quoteCountry: "الجزائر"
    },
    {
        quote: "إمشي في جنازة ولا تمشي في جوازة.",
        quoteCountry: "أم الدنيا"
    },
    {
        quote: "أعمِلْ كيف جارك وإلا حول باب دارك.",
        quoteCountry: "تونس"
    },
    {
        quote: "إن كنتم نسيتوا اللي جرى، هاتوا الدفاتر تنقرا.",
        quoteCountry: "أم الدنيا"
    },
    {
        quote: "اللي خدته القرعه، تاخده أم الشعور.",
        quoteCountry: "أم الدنيا"
    },
    {
        quote: "بصلة المحب خروف.",
        quoteCountry: "أم الدنيا"
    },
    {
        quote: "إيش ياخد الريح من البلاط؟.",
        quoteCountry: "أم الدنيا"
    },
]

function displayQuote(){
    var randomQuote = Number.parseInt(Math.random()*quoteList.length + 1);
    document.getElementById("quoteP").innerHTML = `\"${quoteList[randomQuote].quote}\"`;
    document.getElementById("quotePlace").innerHTML = `${quoteList[randomQuote].quoteCountry}`;
}


