var cellDim = 10 //cell dimensions
// set up output channel

var channel0 = createOutputChannel(0,1);

//generate random array

let cells = randArray();
//console.log(cells.length)

function randArray(){
  var arr = [];
  for (var i=0;i<cellDim;i++){
       arr.push(Math.round(Math.random()))
  }
  //console.log(arr)
	return arr
}

let ruleset = [0, 1, 0, 1, 1, 0, 1, 0];

//apply the CA rules
function applyRule(a, b, c){
	if (a == 1 && b == 1 && c == 1) return ruleset[0];
  if (a == 1 && b == 1 && c == 0) return ruleset[1];
  if (a == 1 && b == 0 && c == 1) return ruleset[2];
  if (a == 1 && b == 0 && c == 0) return ruleset[3];
  if (a == 0 && b == 1 && c == 1) return ruleset[4];
  if (a == 0 && b == 1 && c == 0) return ruleset[5];
  if (a == 0 && b == 0 && c == 1) return ruleset[6];
  if (a == 0 && b == 0 && c == 0) return ruleset[7];
  return 0;
}

function run(){
	let nextArr = randArray();
	for (let i = 1; i < cells.length-1; i++){
		let left   = cells[i-1];   // Left neighbor state
    let me     = cells[i];     // Current state
    let right  = cells[i+1];   // Right neighbor state
    nextArr[i] = applyRule(left, me, right);
	}
	cells = nextArr;
}

//function takes cell states, treats it as a full binary number and outputs a decimal num
function convertToFreq(cellArr){
	return parseInt(cellArr.join(''), 2);
}

//run the CA repeatedly and send the output at each stage
function runAndSend(){
	let runs = 10;
	for (let i=1; 1 < runs; i++){
		run(); // run the CA
		console.log(cells); //print the new cell states

		freq = convertToFreq(cells)
		channel0.send(freq)
		//params.send(cells) //send the new cell states
	}
}

runAndSend();

__________

//route the test data into the model
var w = 0;
input = (x, id) => {
	console.log(">toModel: "+[id,x]);
	let prediction = test(x);
	console.log('pred: ',prediction);
	output(prediction, 0)
};
