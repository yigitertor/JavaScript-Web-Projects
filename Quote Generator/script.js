
const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes =[];

// Show New Quote

function newQuote(){
    //Pick a random quote from ApiQuotes array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];
    console.log(quote);
}

// Get Quotes From API

async function getQuotes(){
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        //Catch Error Here
    }
}

// On Load
getQuotes();
