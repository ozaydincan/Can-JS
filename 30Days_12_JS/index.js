sentence = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const mostFrequentWords = (text)=> {
    const words = (text.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(' '));
    const wordsMap = {};
    const mostFreq = [];
    for (const word of words){
        if (wordsMap[word.toLowerCase()]){
            wordsMap[word.toLowerCase()]++;
        }
        else{
            wordsMap[word.toLowerCase()] = 1;
        }   
    }
    for (const word in wordsMap){
        mostFreq.push({word: word, count: wordsMap[word]});
    }
    return mostFreq.sort((a,b)=> b.count - a.count);

}

console.log(mostFrequentWords(sentence).slice(0,10));

const dirtySentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (txt)=>{
    const prgrph = txt.replace(/[^A-Za-z0-9]/,"");
    return mostFrequentWords(prgrph).slice(0,3);
}

console.log(cleanText(dirtySentence));
