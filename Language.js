
//The World Translator
//Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "es", "de", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//Test the function for each of the supported languages

//Purpose: takes 1 argument, a language code
//Signature: (English, German or Spanish) --> language appears in the screen.
//Examples: "Hello World"

function language() {
  var language = prompt("Hello, what language do you speak: English, German or Spanish?");
  if (language === "German") {
    alert("Hallo");
  }
  if (language === "Spanish") {
    alert("Hola");
    }
  if (language === "English") {
  alert("Hello World");
} else {
  alert("That is not an option");
}
}
