function getInputValue() {
  var inputVal = document.getElementById("input").value;
  document.getElementById("entry").innerHTML = inputVal;

  var phrase = inputVal
    .toLowerCase() //minusculas
    .replace(/[^\w\-]+/g, " ") //remove caracteres especiais
    .replace(/\s+/g, " ") //remove espaços extras, deixando um espaço só
    .trim(); //remove espaços no fim e início da frase

  var words = phrase.split(" ", phrase.length);
  var newWord = [];
  var test = true;

  var arr1 = [];
  var arr2 = [];

  function intersection(arr1, arr2) {
    return arr2.filter((x) => arr1.includes(x));
  }

  words.forEach((word) => {
    var arr1 = word
      .slice(
        0,
        word.length <= 2 || word.length === 4
          ? word.length / 2
          : word.length / 2 + 1
      )
      .toString()
      .split("");

    var arr2 = word
      .slice(
        word.length <= 2 || word.length === 4
          ? word.length / 2
          : word.length / 2 + 1,
        word.length
      )
      .toString()
      .split("");

    for (i = 0; i < words.length; i++) {
      if (intersection(arr1, arr2).length < arr2.length) test = false;
    }

    if (test) {
      word.length <= 2 || word.length === 4
        ? newWord.push(word.split("", word.length / 2).join(""))
        : newWord.push(word.split("", word.length / 2 + 1).join(""));
    }
  });

  if (!test) {
    document.getElementById("output").innerHTML = phrase.toString().concat(".");
  } else
    document.getElementById("output").innerHTML = newWord.join(" ").concat(".");
}
