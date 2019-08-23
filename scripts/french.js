const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", " Spanish", " Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// 1. Add a section at the bottom of your page for a translator. The section should have an text input and a button that says "Translate".
// 1. When the user enters a phrase and clicks the "Translate" button, they should see either the translated phrase from that language's dictionary or, if the entered phrase is not in the dictionary, a helpful error message.




// Print information to the DOM
// id = language-container class =container on a section element
const frenchContainer = document.querySelector("#language-container");

// MAIN FUNCTION TO OPEN WEB PAGE VIA CLICK - ALL CONTENT GOES IN THIS FUNCTION

const frenchLink = document.querySelector("#french");
frenchLink.addEventListener("click", function () {
  frenchContainer.innerHTML += `<h1 class="text-center">French</h1> <section class="info-container">`;



  // NOTABLE PEOPLE COLUMN - LEFT SIDE OF PAGE //
  const frenchFolks = singleObject => {
    return `
  <p> ${singleObject}
  </p>
`;
  }



  const frenchFunction = frenchPeopleArray => {
    let notableFrenchPeople = `<div id = "french-left"><h3>Notable People</h3>`;
    for (i = 0; i < frenchPeopleArray.length; i++) {
      notableFrenchPeople += frenchFolks(frenchPeopleArray[i])
    }
    frenchContainer.innerHTML += `${notableFrenchPeople}</div>`
  };
  frenchFunction(frenchData.notablePeople)

  // -------------------------------------------FUN FACTS COLUMN - CENTER OF PAGE //
  const printFunFactsString = () => {
    let funFactsString = "";
    funFactsString += `<div id="french-center">
  <h3>Fun Facts</h3>
    <p>${frenchData.funFacts.relatedLanguages}</p>
    <p>${frenchData.funFacts.lettersInAlphabet}</p> 
    <p>${frenchData.funFacts.numberOfSpeakers}</p> 
    </div>`;
    return funFactsString;
  };
  document.querySelector("#language-container").innerHTML +=
    printFunFactsString();





  // -------------------------------------------SPEAKING COUNTRIES COLUMN - RIGHT OF PAGE //

  const frenchCountries = singleObject => {
    return `
  <p> ${singleObject}
  </p>`;
  }

  const countryFunction = frenchCountryArray => {
    let frenchSpeakingCountries = `<div id="french-right"> <h3>Speaking Countries</h3> `;
    for (i = 0; i < frenchCountryArray.length; i++) {
      frenchSpeakingCountries += frenchCountries(frenchCountryArray[i])
    }
    frenchContainer.innerHTML += `${frenchSpeakingCountries}</div> </section>`;
  };
  countryFunction(frenchData.countriesSpoken)

  // ------------------------------------------------------TRANSLATION BUTTON //




  // const frenchTranslationArea = () => {
  //   let frenchTranslatorButton = 
  document.querySelector("#language-container").innerHTML += `
  <section id="french-translator" class="text-center">

  <input type="text" id="frenchTranslatorInput"/>
  <button id = "french-button">Translate</button>
  <div class="frenchTranslatorOutput">

  </div>
  </section>`
  // return frenchTranslatorButton;
  // 

  // frenchContainer.innerHTML += frenchTranslationArea()

})

document.querySelector("#language-container").addEventListener("click", function () {
  const frenchyButtonThing = document.querySelector("#frenchTranslatorInput")
  if (event.target.id === "french-button") {
    console.log(frenchData.dictionary[frenchyButtonThing.value])
    if (frenchData.dictionary[frenchyButtonThing.value] != null) {
      document.querySelector(".frenchTranslatorOutput").innerHTML = frenchData.dictionary[frenchyButtonThing.value]
    }
    else {
      document.querySelector(".frenchTranslatorOutput").innerHTML = "Don't yell at me!"
    }
  }


})




