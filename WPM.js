document.getElementById('start-btn').addEventListener('click', function () {
    
    var wordArray = [
        "apple", "banana", "cherry", "dog", "elephant",
        "flower", "guitar", "happy", "island", "jazz",
        "kangaroo", "lemon", "mountain", "notebook", "ocean",
        "penguin", "quilt", "rainbow"
    ];


    var selectedWords = getRandomWords(wordArray, 18);

  
    var textToType = selectedWords.join(' ');

    document.getElementById('text-to-type').value = textToType;

    var words = textToType.split(' ');
    var wordCount = words.length;
    var startTime = new Date().getTime();

    var userTypedText = prompt('Type the following:\n\n' + textToType);

    var endTime = new Date().getTime();
    var timeDiff = endTime - startTime;
    var seconds = timeDiff / 1000;
    var minutes = seconds / 60;
    var wpm = Math.round(wordCount / minutes);

    document.getElementById('result').innerText = 'Your WPM: ' + wpm;
});

function getRandomWords(wordsArray, count) {
    var shuffledArray = wordsArray.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
}

