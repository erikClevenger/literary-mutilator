




// takes a string to split into an array of words.
function splitString(stringToSplit, separator) {
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var paraContent = document.getElementById('paraOne').innerHTML;

var space = ' ';

var paraText = splitString(paraContent, space);

var item = paraText[Math.floor(Math.random()*paraText.length)];

console.log(item);

//todo refactor the above mess


//todo add regex to match random work vs. array of scoring words

//todo get random baseball ispum to select random words from.

//todo add click event to generate new paragraphs.






