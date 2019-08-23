const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "John Cena",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", " Italian", " French", " Portuguese", " Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
    },
    countriesSpoken: [
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Equador",
      "El Salvador",
      "Equatorial Guinea",
      "Guetemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Mali",
      "Monaco",
      "Paraguay",
      "Peru",
      "Puerto Rico",
      "Spain",
      "Uruguay",
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };

  // Use the language data in your JavaScript file. Your job is to print it to the DOM when the user clicks on the appropriate link in the nav bar. For example, when the user clicks on "Hindi" in the nav bar, only the information about the Hindi language should print to the DOM. If the user then clicks on "French" in the nav bar, the DOM component representing Hindi should disappear and be replaced by the DOM component representing French.

  // You should plan on writing a seperate printer function for each property in your language object

// *******************************************************************************************************************************
 


// Add click event to Spanish button
const spanishLink = document.querySelector("#spanish");
spanishLink.addEventListener("click" , function(){
   document.querySelector("#language-container").innerHTML = `<h1 class="text-center">Spanish</h1>`;



// **********************Notable People*******************************

let container = document.querySelector("#language-container")

let spanishPeopleElement = singlePeopleObject => {
  return `
  <p style="background-color:#aaa;">
  ${singlePeopleObject}
  </p>
  `;
}

let renderSpanishPeopleElement = arrayOfAllPeople => {
  let spanishPeople = `<div class="left" style="background-color:#aaa;"><h4 style="background-color:#aaa;">Notable People:</h4>
  `
  for (let i = 0; i < arrayOfAllPeople.length; i++){
    spanishPeople += spanishPeopleElement(arrayOfAllPeople[i]);
  }
  spanishPeople += "</div>"
  container.innerHTML += spanishPeople;
}

renderSpanishPeopleElement(spanishData.notablePeople)

// *************************Fun Facts********************************

// const spanishFunFactsHeader = `<h4 id="spanish-facts-header">Fun Facts:</h4>`;
	const printSpanishFunFactsString = () => {
		let spanishFunFactsString = `<div class="middle" style="background-color:#bbb;"><h4 style="background-color:#bbb;">Fun Facts:</h4>`;
		spanishFunFactsString += `
      <p>Related Languages: ${spanishData.funFacts.relatedLanguages}</p>
      <p>Letters in Alphabet: ${spanishData.funFacts.lettersInAlphabet}</p>
      <p>Number of Speakers: ${spanishData.funFacts.numberOfSpeakers}</p>
      </div>`;
		return spanishFunFactsString;
  };
  
	container.innerHTML += printSpanishFunFactsString();



// ********************Countries Spoken******************************

// const spanishCountriesHeader = `<h4 id="spanish-countries-header">Countries Spoken:</h4>`;

let countriesSpokenElement = countriesSpokenObject => {
  return `
  <p>
  ${countriesSpokenObject}
  </p>`;
}

let renderCountriesElement = arrayOfCountries => {
  let spanishCountries = `<div class="right" style="background-color:#ccc;"><h4 style="background-color:#ccc;">Countries Spoken:</h4>`;
  for (let i = 0; i < arrayOfCountries.length; i++){
    spanishCountries += countriesSpokenElement(arrayOfCountries[i]);
  }
  container.innerHTML += spanishCountries;

spanishCountries += "</div>"
}
renderCountriesElement(spanishData.countriesSpoken)


// Add a section at the bottom of your page for a translator. The section should have an text input and a button that says "Translate".
// When the user enters a phrase and clicks the "Translate" button, they should see either the translated phrase from that language's dictionary or, if the entered phrase is not in the dictionary, a helpful error message.

document.querySelector("#language-container").innerHTML += `

<div class="text-center">
<input type="text" name="spanish-translate" id="spanish-translator">
<button id="spanish-translate-button">Translate</button>
<p class="output-field"></p>

</div>
`

})



document.querySelector("#language-container").addEventListener("click" , function(){
  const spanishButton = document.querySelector("#spanish-translator")
  if (event.target.id === "spanish-translate-button"){
    // console.log(spanishData.dictionary[spanishButton.value])

    if (spanishData.dictionary[spanishButton.value] != null){
      document.querySelector(".output-field").innerHTML = spanishData.dictionary[spanishButton.value]
    }
    else {
      document.querySelector(".output-field").innerHTML = "I don't know that word!"
    }
  }
})
