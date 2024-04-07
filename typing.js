const words='Health is a state of complete physical, social and mental well being and not merely the absence of disease or infirmity. Health is thus a level of functional efficiency of living beings and a general condition of a persons mind, body and spirit, meaning it is free from illness, injury and pain. It is a resource of everyday life and a positive concept emphasizing physical capabilities. Good health is a secret of every happy man. Staying healthy for children is vital for proper growth and development of mind and body as they need to focus in the class and fully participate in the activities on the field. Parents must take their children for medical check-up and learn from experts about their development in terms of height and weight, as it has a huge impact on their overall performance and efficiency. If you are strong and healthy, you can be a shining example to others and teach them how to achieve vibrant health.'.split(' ');
const wordsCount=words.length;

function randomWord(){
    const randomIndex=Math.ceil(Math.random()*wordsCount);
    return words[randomIndex];
}

function formatWord(word){
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame(){
    document.getElementById('words').innerHTML='';
    for (let i=0; i<200; i++){
        document.getElementById('words').innerHTML+=formatWord(randomWord());
    }
}
newGame();