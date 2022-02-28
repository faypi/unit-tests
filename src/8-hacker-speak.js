export const hackerSpeak = (words) => {
  words = words.replace(/[aeios]/gi, 
    charactersToReplace => ({ 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5' })
  [charactersToReplace]);
  return words
}