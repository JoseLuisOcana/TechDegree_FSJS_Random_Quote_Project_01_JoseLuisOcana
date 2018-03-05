// Puerto Rico My beautiful Island: http://http://www.seepuertorico.com/
// Jose Luis Ocaña Project 01 Techdegree FSJS Monday March 5 2018 8:41pm Eastern Time
// jlocana@gmail.com 305-799-7230 http://JoseLuisOcana.com

// Interval for new quote learned in https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval 

var intervalID = window.setInterval(printQuote, 10000);

var quotes = [
    {
        quote: "La ciencia no es solo una disciplina de razón, sino también de romance y pasión.",
        source: "Stephen Hawking",
        citation: "Science",
        year: 2015,
        tags: ["Cosmologo"]
    },
    {
        quote: "Las características del trabajo científico es escoger.",
        source: "G.Pasquali.",
        tags: ["Sabiduria"]
    },
    {
        quote: "Son vanas y están plagadas de errores las ciencias que no han nacido del experimento, madre de toda incertidumbre.",
        source: "Leonardo Da Vinci",
        tags: ["Ganar", "Aprender"]
    },
    {
        quote: "La ciencia es un cementerio de ideas muertas, aunque de ellas puede salir la vida.",
        source: "Unamuno",
        citation: "Unamuno: Gotitas del saber",
        tags: ["Metaficica"]
    },
    {
        quote: "La ciencia no es más que sentido común amaestrado y organizado.",
        source: "Thomas Huxley",
        tags: ["Sentido Comun"]
    },
    {
        quote: "La ciencia es el alma de la prosperidad de las naciones y la fuente de vida de todo progreso.",
        source: "Louis Pasteur",
        tags: ["El Alma"]
    },
    {
        quote: "La mayoría de la gente dicen que el intelecto es lo que hace a un gran científico. Están equivocados: es el carácter.",
        source: "Albert Einstein",
        citation: "Universidad en Germany",
        tags: ["Ideas", "Mocion"]
    },
    {
        quote: "Debemos llamar ciencia sólo al conjunto de las fórmulas que triunfan siempre. Todo el resto es literatura.",
        source: "Paul Valéry",
        tags: ["Literatura"]
    },
    {
        quote: "La ciencia no puede nunca atrapar lo irracional, por esa razón no tiene futuro ante sí en este mundo.",
        source: "Oscar Wilde",
        tags: ["Irracional", "Locura"]
    },
    {
        quote: "Lo más incomprensible acerca de este mundo es que es comprensible.",
        source: "Albert Einstein",
        tags: ["Sicologia"]
    },
    {
        quote: "La ciencia no conoce su deuda a la imaginación.",
        source: "Ralph Waldo Emerson",
        tags: ["Creacion", "Excelencia"]
    },
    {
        quote: "El aspecto más triste de la vida en este momento es que la ciencia reúne el conocimiento más rápidamente que la sociedad reúne la sabiduría.",
        source: "Isaac Asimov",
        tags: ["Sabiduria", "Excelencia"]
    },
    {
        quote: "Una ciencia, es decir, un conocimiento imaginario de la verdad absoluta.",
        source: "León Tolstoi",
        tags: ["Teologia", "Decisiones"]
    },
    {
        quote: "La ciencia rivaliza con la mitología en milagros.",
        source: "La Realidad"
    }

];

// Hold the quotes on it.
let usedQuotes = []

function getRandomQuote() {
    if (quotes.length === 0) {
        // Quotes is empty, we need to reset the arrays
        quotes = usedQuotes;
        usedQuotes = [];
        return getRandomQuote(); // It's necessary to recurse and go again now it's in the proper state
    } else {
        const selection = quotes.splice(Math.floor(Math.random() * quotes.length), 1)[0]; // This simultaneously gets the object at a random index and removes it from the quotes array
        usedQuotes.push(selection);
        return selection;
    }
}

// HTML print the appropriate place
function printQuote() {
    let html = "";  // Empty string avoiding problems with undefined when concatenating
    let selectedQuote = getRandomQuote();

    // Adding these two paragraphs
    html += `<p class="quote">${selectedQuote["quote"]}</p>`;
    html += `<p class="source">${selectedQuote["source"]}`;

    // Quote, all of these properties, add them to the HTML
    if (selectedQuote.hasOwnProperty("citation")) {
        html += `<span class="citation">${selectedQuote["citation"]}</span>`;
    }
    if (selectedQuote.hasOwnProperty("year")) {
        html += `<span class="year">${selectedQuote["year"]}</span>`;
    }
    html += "</p>";
    if (selectedQuote.hasOwnProperty("tags")) {
        html += `<p>`;
        for (var i = 0; i < selectedQuote["tags"].length; i++) {
            html += `<span>#${selectedQuote["tags"][i]}  </span>`;
        }
        html += `</p>`;
    }

    // HTML setting the ìnnerHTML property
    document.getElementById('quote-box').innerHTML = html;

    // Bakcground color to a random color
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    // Random rgb color changing background color
    // Range limited white text shows up
    let color = `rgb(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}`;
    return color;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

