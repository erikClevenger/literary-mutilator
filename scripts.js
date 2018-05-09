


function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const paras = document.getElementById('newParas');
const url = 'http://baseballipsum.apphb.com/api/?paras=3';


function fetchData() {
	fetch(url)
		.then(function(response) {

			//catch any requests that aren't 200 OK
			if(response.status !== 200) {
				alert('Wtf di you do!? JK: ' . response.status);
				return;
			}

		response.json().then(function(data){
			document.getElementById("fetchData").innerHTML = data;
				})
			})

		.catch(function(error) {
			alert((JSON.stringify(error));
		})
}




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






