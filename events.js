

var userInput = document.getElementById('userInput');


//reset with alert msg
var resetButton = document.getElementById('reset').addEventListener('click', function() { 
		alert("Sorry, please try again.");
	}, false);


var submitButton = document.getElementById('submit');

userInput.addEventListener('submit',function(event){
	
	event.preventDefault();

	var newPlace = new Donutshop(event.target.location.value, event.target.min.value, event.target.max.value, event.target.avg.value);
		
	console.log(newPlace);
	event.target.location.value = null;
	event.target.min.value = null;
	event.target.max.value = null;
	event.target.avg.value = null;
	

  newPlace.hrlyCust();
  newPlace.donutSale();
  newPlace.dailyFinal();
  newPlace.hourlySale;
  newPlace.dailyTotal;
  
  newPlace.render();
  
  var storeArrays = [];
  storeArrays.push(newPlace);

});

// //////////////11-29//////////////////////////

// // var encoded = JSON.stringify(storeArrays);

// localStorage[storeArrays] = JSON.stringify(storeArrays);

// //var data = localStorage.getItem(storeArrays);
// var hydrated[storeArrays] = JSON.parse(storeArrays[]);

// console.log(data);
// console.log(hydrated);  	
	

