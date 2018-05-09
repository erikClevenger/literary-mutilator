

/*function clickyText() {
	var paraWords = 	fetch('http://baseballipsum.apphb.com/api/?paras=3')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
		});
   return paraWords
}
*/


function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const paras = document.getElementById('newParas');
const url = 'http://baseballipsum.apphb.com/api/?paras=3';
var data = {int:'example'};

function paraData(url,data) {
	fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {
			let paragraphs = data.results;
			return paragraphs.map(function(paragraphs) {
				let p = createNode('p');
				append(paras, p);
				append(paras, p);
				append(paras, p);
			})
		})
		.catch(function(error) {
			console.log(JSON.stringify(error));
		});

paraData(url,data);

/*
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
*/
//todo refactor the above mess


//todo add regex to match random work vs. array of scoring words

//todo get random baseball ispum to select random words from.

//todo add click event to generate new paragraphs.






