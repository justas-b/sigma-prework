function numObj(s){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let characterCodes = [];
  let returnArray = [];
  
  for(let i = alphabet.charCodeAt(0); i < alphabet.charCodeAt(alphabet.length - 1) + 1; i++) {
    characterCodes.push(i);
  }
  for(let i = 0; i < s.length; i++) {
    returnArray.push({[s[i]]: alphabet[characterCodes.indexOf(s[i])]});
  }
  return returnArray;
}
