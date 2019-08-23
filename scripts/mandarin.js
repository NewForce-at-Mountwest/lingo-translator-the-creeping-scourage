const mandarinData = {
  name: "Mandarin",
  notablePeople: [
    "Herbert Hoover",
    "Koji Yano",
    "Mark Henry Rowswell",
    "Mark Zuckerberg",
    "Ming Na Wen",
    "John Cena",
    "Kevin Rudd",
    "Park Geun-hye",
    "Vanessa Branch",
    "Mira Sorvino",
    "Bob Woodruff",
    "Takeshi Kaneshiro",
    "Lou Jing"
  ],
  funFacts: {
    relatedLanguages: ["Korean", "Japanese"],
    lettersInAlphabet: 50000,
    numberOfSpeakers: "about 900 million",
    mandrinInfo: {
      dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
      chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
    }
  },
  countriesSpoken: [
    "China",
    "Singapore",
    "Taiwan"
  ],
  dictionary: {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    goodEvening: "晚上好",
    howAreYou: "你好吗",
    whatsYourName: " 你叫什么名字"
  }
}
let container = document.querySelector("#language-container")
// This will print the main header for the mandarin page

// Following code will activate the nav link for mandarin
const mandarinLink = document.querySelector("#mandarin");
mandarinLink.addEventListener("click", function () {
  document.querySelector("#language-container").innerHTML = `<h1 class="main-header"> Mandarin</h1> `;
  // creates html string to print notable people
  let makeMandarinPeopleElement = singlePeopleObject => {
    return `
  <p>
  ${singlePeopleObject}
  </p>
  `;
  }


  let renderPeopleElement = arrayOfAllPeople => {
    let mandarinPeople = `<article id="notable-people"> <h3 class = "people-header">Notable People</h3>`;
    for (let i = 0; i < arrayOfAllPeople.length; i++) {
      mandarinPeople += makeMandarinPeopleElement(arrayOfAllPeople[i]);

    }
    mandarinPeople+="</article>"
    container.innerHTML += mandarinPeople;
  }
  renderPeopleElement(mandarinData.notablePeople);

  const factsHTML = `<article id="fun-facts"> <h3 class = "facts-header">Fun Facts</h3>


<p>
${mandarinData.funFacts.relatedLanguages},
${mandarinData.funFacts.lettersInAlphabet},
${mandarinData.funFacts.numberOfSpeakers},
${mandarinData.funFacts.mandrinInfo.dialectInfo},
${mandarinData.funFacts.mandrinInfo.chineseDialects}
</p>
</article>`
  container.innerHTML += factsHTML;

  let makeSpokenElement = singleSpokenObject => {
    return `
  <p>
  ${singleSpokenObject}
  </p>
  `;
  }

  let renderSpokenElement = arrayofSpoken => {
    let spokenCountries = `<article id ="countries-spoken"> <h3 class"spoken-header">Spoken Countries</h3>`;
    for (let i = 0; i < arrayofSpoken.length; i++) {
      spokenCountries += makeSpokenElement(arrayofSpoken[i]);
    }
    spokenCountries+="</article>"
    container.innerHTML += spokenCountries
  }
  renderSpokenElement(mandarinData.countriesSpoken)

  const translatorFunction = () => {
    let translatorFunctionString = `
      <div id="MandarinTranslatorContainer">
      <br>
      <h6>Translate common phrases:</h6>
      <input type="text" id="mandarinTranslatorInput">
      <button id="mandarinTranslatorButton">Translate</button>
      <section id=mandarinTranslatorOutput">
      <!--- Translated Stuff Goes Here-->
      </section>
      </div>
      `;
    return translatorFunctionString;
  };
  document.querySelector(
    "#language-container"
  ).innerHTML += translatorFunction();
  document.querySelector("#language-container").addEventListener("click", function(){
    const translatorButton = document.querySelector("#mandarinTranslatorInput")
    if (event.target.id === "mandarinTranslatorButton"){
     console.log(mandarinData.dictionary[translatorButton.value]["mandarin"])
    } document.querySelector("#mandrainTranslatorInput")


   })


})
