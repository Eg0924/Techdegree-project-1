/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'SUCCESS IS NOT FINAL; FAILURE IS FATAL: IT IS THE COURAGE TO CONTINUE THAT COUNTS',
    source: 'Winston Churchill',
    citation: 'Commencement Speech Miami University ',
    year: '1946'
  },
  {
    quote: 'Learn as if you will live forever, live like you will die tomorrow.',
    source: 'Mahatma Gandhi'
  },
  {
    quote: 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    source: 'Dale Carnegie'
  },
  {
    quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
    source: 'Thomas Edison'
  },
  {
    quote: 'He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.',
    source: 'Epictetus',
    citation: 'Greece',
    year: '110'
  },
  {
    quote: 'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.',
    source: 'Zig Ziglar'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomQuote = Math.floor(Math.random() * arr.length);
  return arr[randomQuote];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let quoteObj = getRandomQuote(quotes);

  let html = `<p class = "quote" >${quoteObj.quote}</p> 
              <p class = 'source'>${quoteObj.source}`;

  if (quoteObj.hasOwnProperty('citation') && quoteObj.hasOwnProperty('year')) {
    html += `<span class = 'citation'>${quoteObj.citation}</span>
             <span class = 'year'>${quoteObj.year}</span>
             </p>`;
  } else {
    html += `</p>`;
  }

  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);