const hindiData = {
	name: "Hindi  ",
	notablePeople: [
		"Nelly Furtado",
		"John Cena",
		"Natalie Di Luccio",
		"Anush Stepanyan",
		"Will Smith",
		"Hugh Jackman",
		"Julia Roberts",
		"Ben Kingsley",
		"Dev Patel"
	],
	funFacts: {
		relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
		lettersInAlphabet: 50,
		numberOfSpeakers: "about 341 million"
	},
	countriesSpoken: [
		"India",
		"Nepal",
		"Fiji",
		"Pakistan",
		"Trinidad and Tobago",
		"Singapore",
		"South Africa",
		"Mauritius",
		"Guyana",
		"Suriname"
	],
	dictionary: {
		hello: {
			english: "hello",
			hindi: "नमस्ते",
			englishPronunciation: "namaste"
		},
		goodbye: {
			english: "goodbye",
			hindi: "अलविदा",
			englishPronunciation: "alavida"
		},
		thankYou: {
			english: "thank you",
			hindi: "धन्यवाद",
			englishPronunciation: "dhanyavaad"
		},
		goodEvening: {
			english: "good evening",
			hindi: "सुसंध्या",
			englishPronunciation: "susandhya"
		},
		howAreYou: {
			english: "how are you",
			hindi: "क्या हाल है",
			englishPronunciation: "kya haal hai"
		},
		whatsYourName: {
			english: "what's your name",
			hindi: "तुम्हारा नाम क्या हे",
			englishPronunciation: "tumhaara naam kya he"
		}
	}
};
//click event for Hindi Page

document.querySelector("#hindi").addEventListener(
	"click",
	function() {
		// if (document.querySelector("#language-container").innerHTML === null) {

		//creating a header and section for notable hindi people

		const printPeopleString = () => {
			let peopleString = `
    <section id="hindiPeople" class="d-flex flex-column">
    <h4 id="hindiPeopleHeader" class="hindiHeader">
        Notable People Who Speak Hindi:
    </h4>
    <ul class="p-2">
    `;
			for (let people of hindiData.notablePeople) {
				peopleString += `<li>${people}</li>`;
			}
			return (
				peopleString +
				`
    </ul>
    </section>
    `
			);
		};
		document.querySelector(
			"#language-container"
		).innerHTML += printPeopleString();

		//selecting the container and running the function

		//function to create a header and section for fun facts about the hindi language

		//section
		const printFunFactsString = () => {
			let funFactsString = `
    <section id="hindiFunFacts" class="d-flex flex-column">
    <h4 id="hindiFunFactsHeader" class="hindiHeader">Fun Facts:</h4>
    <ul class="p-2">
    `;
			funFactsString += `
        <li>
          ${hindiData.funFacts.relatedLanguages} 
        </li>
        <br>
        <li>
          It has ${
						hindiData.funFacts.lettersInAlphabet
					} letters in it's alphabet. 
        </li>
        <br>
        <li>
          About ${hindiData.funFacts.numberOfSpeakers} people speak "Hindi".
        </li>
      
      `;
			return (
				funFactsString +
				`
    </ul>
    </section>
    `
			);
		};
		//selecting the container again and running the function
		document.querySelector(
			"#language-container"
		).innerHTML += printFunFactsString();
		//function to create a header and section for countries that speak hindi

		//section
		const printCountriesSpokenString = () => {
			let countriesSpokenString = `
      <section id="hindiCountriesSpoken" class="d-flex flex-column">
      <h4 id="hindiCountriesSpokenHeader" class="hindiHeader">
          Countries that speak Hindi:
      </h4>
      <ul class="p-2">
    `;
			for (let countries of hindiData.countriesSpoken) {
				countriesSpokenString += `<li>${countries}</li>`;
			}
			return (
				countriesSpokenString +
				`
    </ul>
    </section>
    `
			);
		};
		//selecting the container and running the function
		document.querySelector(
			"#language-container"
		).innerHTML += printCountriesSpokenString();

		const translatorFunction = () => {
			let translatorFunctionString = `
        <div id="hindiTranslatorContainer">
        <br>
        <h6>Translate common phrases:</h6>
        <input type="text" id="hindiTranslatorInput">
        <button id="hindiTranslatorButton">Translate</button>
        <section class="hindiTranslatorOutput">
        <!--- Translated Stuff Goes Here-->
        </section>
        </div>
        `;
			return translatorFunctionString;
		};
		document.querySelector(
			"#language-container"
		).innerHTML += translatorFunction();


    // -------------------------------------------------------TRANSLATOR
		document
			.querySelector("#hindiTranslatorButton")
			.addEventListener("click", function() {
				const translatorInput = document.querySelector("#hindiTranslatorInput");
				if (event.target.id === "hindiTranslatorButton") {
					//  console.log(hindiData.dictionary[translatorInput.value]
				}
				if (hindiData.dictionary[translatorInput.value] != null) {
					document.querySelector(".hindiTranslatorOutput").innerHTML = `
         ${translatorInput.value} is ${
						hindiData.dictionary[translatorInput.value]["hindi"]
					} 
         in Hindi and the English pronunciation is 
         ${hindiData.dictionary[translatorInput.value]["englishPronunciation"]}.
         `;
				} else {
					document.querySelector(".hindiTranslatorOutput").innerHTML =
						"I don't know that word!";
				}
			});
	},
	{ once: true }
);

//    document.querySelector("#hindiTranslatorOutput").innerHTML =
//    `${translatorInput.value} is ${hindiData.dictionary[translatorInput.value]["hindi"]} in Hindi and the English pronunciation is ${hindiData.dictionary[translatorInput.value]["englishPronunciation"]}.`
//  }

// document.querySelector("#language-container").addEventListener("click" , function(){
//   const spanishButton = document.querySelector("#spanish-translater")
//   if (event.target.id === "spanish-translate-button"){
//     // console.log(spanishData.dictionary[spanishButton.value])
//     if (spanishData.dictionary[spanishButton.value] != null){
//       document.querySelector(".output-field").innerHTML = spanishData.dictionary[spanishButton.value]
//     }
//     else {
//       document.querySelector(".output-field").innerHTML = "I don't know that word!"
//     }
//     // document.querySelector(".output-field").innerHTML = spanishData.dictionary[spanishButton.value]
//   }
// })



// dictionary: {
//   hello: {
//     english: "hello",
//     hindi: "नमस्ते",
//     englishPronunciation: "namaste"
//   },
//   goodbye: {
//     english: "goodbye",
//     hindi: "अलविदा",
//     englishPronunciation: "alavida"
//   },
//   thankYou: {
//     english: "thank you",
//     hindi: "धन्यवाद",
//     englishPronunciation: "dhanyavaad"
//   },
//   goodEvening: {
//     english: "good evening",
//     hindi: "सुसंध्या",
//     englishPronunciation: "susandhya"
//   },
//   howAreYou: {
//     english: "how are you",
//     hindi: "क्या हाल है",
//     englishPronunciation: "kya haal hai"
//   },
//   whatsYourName: {
//     english: "what's your name",
//     hindi: "तुम्हारा नाम क्या हे",
//     englishPronunciation: "tumhaara naam kya he"
//   }
// }


	// document
		// 	.querySelector("#hindiTranslatorButton")
		// 	.addEventListener("click", function() {
		// 		// if (document.querySelector("#hindiTranslatorInput").value === "hello" || "Hello" || "HELLO" )

		// 		const hindiDictionaryValue = hindiData.dictionary["hello"];
		// 		console.log(hindiDictionaryValue);
		// 		if (
		// 			document.querySelector("#hindiTranslatorInput").value ===
		// 			hindiDictionaryValue
		// 		) {
		// 			document.querySelector("#hindiTranslatorOutput").innerHTML = `
		//       Hello is ${hindiDictionaryValue} in Hindi and ${hindiData.dictionary.hello.englishPronunciation} in English!
		//       `;
		// 			// } if (document.querySelector("#hindiTranslatorInput").value === "goodbye" || "Goodbye" || "GOODBYE" )
		// 			// {
		// 			//   document.querySelector("#hindiTranslatorOutput").innerHTML = `
		// 			//   Hello is ${hindiData.dictionary.goodbye.hindi} in Hindi and ${hindiData.dictionary.goodbye.englishPronunciation} in English!
		// 			//   `;
		// 			// }
		// 		}
		// 	});