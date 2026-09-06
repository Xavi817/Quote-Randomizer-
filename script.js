const quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
{text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
     {text: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
{text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein"},
{text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
{text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
{text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
{text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
{text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
{text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis"},
{text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou"},
{text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson"},
{text: "Alone we can do so little; together we can do so much.", author: "Helen Keller"},
{text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas Edison"},
{text: "It always seems impossible until it's done.", author: "Nelson Mandela"},
  ];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteBtn');
let lastIndex = -1;
newQuoteButton.addEventListener('click', () => {
let randomIndex;
do {
  randomIndex = Math.floor(Math.random() * quotes.length);
} while (randomIndex === lastIndex);
quoteText.textContent = quotes[randomIndex].text;
quoteAuthor.textContent = quotes[randomIndex].author;
lastIndex = randomIndex;
});