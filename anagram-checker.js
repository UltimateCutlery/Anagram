
// More Information about this assisngment is available in the README.md file


function checkAnagram(word1, word2){
    word1 = word1.replace(/\s+/g, '');
    word2 = word2.replace(/\s+/g, '');
    var chars1 = word1.split("").sort();
    var chars2 = word2.split("").sort();
    var letters1 = chars1.toString();
    var letters2 = chars2.toString();

    if (word1 === word2) 
        return false
    if (letters1 === letters2)
        return true
    else 
        return false

}