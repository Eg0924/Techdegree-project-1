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
    year: '110',
    tags: 'Wisdom'
  },
  {
    quote: 'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.',
    source: 'Zig Ziglar'
  },
  {
    quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    source: 'Albert Einstein'
  },
  {
    quote: 'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.',
    source: 'Walter Anderson'
  },
  {
    quote: 'Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.',
    source: 'John Wooden'
  }
];


/***
 * `getRandomQuote` function
 * @returns {object} Returns an object by returning an index location inside the array.
***/

function getRandomQuote(arr) {
  let randomQuote = Math.floor(Math.random() * arr.length);
  return arr[randomQuote];
}

// // Function to modify the background color for each quote
// @ returns {number} Returns a random number between 0 and 256!
// Function to get a random value!
function getRandomValue() {

  const randNum = Math.floor(Math.random() * 256);

  return randNum;
}


//Function to return an RBG value by calling the Random Value function.
// @ returns {string literal} returns a string literal with 3 random rgb values!
function getRandomRGB() {

  const color = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;

  return color;
}


/***
 * `printQuote` function
 *  Prints an object and its properties from an array into the HTML.
 *  calls the getRandomRGB function to change the background color on the HTML.
***/
function printQuote() {
  let quoteObj = getRandomQuote(quotes);

  let html = `<p class = "quote" >${quoteObj.quote}</p> 
              <p class = 'source'>${quoteObj.source}`;

  if (quoteObj.hasOwnProperty('citation') && quoteObj.hasOwnProperty('year') && quoteObj.hasOwnProperty('tags')) {
    html += `<span class = 'citation'>${quoteObj.citation}</span>
             <span class = 'year'>${quoteObj.year}</span>
             <span class = 'tags'><strong>${quoteObj.tags}</strong></span>
             </p>`;
  } else {
    html += `</p>`;
  }

  document.getElementById('quote-box').innerHTML = html;

  document.body.style.background = getRandomRGB();

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);