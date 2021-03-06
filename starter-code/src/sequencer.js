class LetterSequence {

    static createSequence(sequence){
      const characters      = [...sequence];
      let containerString = "";
      let repeatCount     = 1;
      for (let i = 0; i < characters.length; i++){
        let currentChar = characters[i];
        let prevChar    = characters[i - 1];
        let nextChar    = characters[i + 1];
        if (currentChar === prevChar){
          repeatCount++
        }
        // If the sequence is broken, and the repeat count is greater than 1
        // add the letter and the repeat count to the return string
        if (currentChar !== nextChar && repeatCount >= 1){
          let repeats = repeatCount > 1 ? String(repeatCount) : "";
          containerString += (repeats + currentChar);
          repeatCount = 1;
        }
      }
      return containerString;
  }
  static decodeSequence(sequence){
    let containerString = "";
    const characters      = [...sequence];
    for (let i = 0; i < characters.length; i++){
      let current         = characters[i];
      let nextChar        = characters[i + 1];
      // If the current character is not a number, then there must be a letter after it
      if (!isNaN(characters[i])){
        // So repeat it n times, and add it to our return value
        let letters = nextChar.repeat(current);
        //this._repeat(current, nextChar);
        containerString += letters;
      // If the current character is a letter, and the last character is a letter, then
      // it must be a lone letter
      } else if (isNaN(characters[i]) && isNaN(characters[i - 1])){
        containerString += characters[i];
      }
    }
    return containerString;
  }

  // static _repeat(count = 1, character){
  //   var characters = "";
  //
  //   for (var i = 0; i < count; i++){
  //     characters += character;
  //   }
  //
  //   return characters;
  // }

}

// Maybe there's a function to do this in ES6...?

// LetterSequence._repeat = function(count = 1, character){
//   var characters = "";
//
//   // if (count <= 1){
//   //   count = 1
//   // }
//
//   for (var i = 0; i < count; i++){
//     characters += character;
//   }
//
//   return characters;
// }

module.exports = LetterSequence;
