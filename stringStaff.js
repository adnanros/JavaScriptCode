function wordCounter(sentence){
    const words = sentence.split(/[ ,.]+/).filter(Boolean);
    const wordsCounterObj = {};
    for(let i = 0; i < words.length; i++){
        if(wordsCounterObj[words[i]]) {wordsCounterObj[words[i]]++}
        else {wordsCounterObj[words[i]] = 1;}
    }
    return wordsCounterObj;

}

const result = wordCounter("This is a, is a. With dots... and this, this.");
console.log(result);