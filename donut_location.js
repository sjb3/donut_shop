//11/22

function Donutshop(place,min,max,avgDonutsPerCust){
  this.place = place;//location
  this.min = min;//min # of customers per hr
  this.max = max;//max
  this.avgDonutsPerCust = avgDonutsPerCust;//avg donut sale per hr
  this.hourlySale = [];//store indi hourly sale value
  this.dailyTotal = [];
  //this.total = [];

//1) Generate randome # of customers between minCustPerhr and maxCustPerhr

  this.hrlyCust = function(){
    return Math.floor(Math.random()*((this.max-this.min))+this.min);
  };

//2) Calculate donuts sold per hour,
  this.donutSale = function(){

    for (i=0; i<11; i++){
      hourly = Math.floor(this.hrlyCust()*this.avgDonutsPerCust);
      this.hourlySale.push(hourly);
   };

//3) Calculate total donuts sold per day
  total = 0;

  this.dailyFinal = function(){
    for (i=0; i<11; i++){
      
      total += this.hourlySale[i];
  };
    this.dailyTotal.push(total);
    };
};
};

//Iinstatntiate New Donutshop Location;
  var downtown = new Donutshop ("Downtown", 8, 43, 4.5, 11);
  var capitolHill = new Donutshop ("Capitol Hill", 4, 37, 2, 11);
  var slu = new Donutshop ("South Lake Union", 9, 23, 6.33, 11);
  var wedgewood = new Donutshop ("Wedgewood", 2, 28, 1.25, 11);
  var ballard = new Donutshop ("Ballard", 8, 58, 3.75, 11);
  
Donutshop.prototype.render = function(){

  //var tableElement = document.createElement(tableElement);

  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');

    tdElement.innerHTML = this.total;
    tdElement.innerHTML = this.place;
    trElement.appendChild(tdElement);

  

    for(var i=0; i<11; i++){
      td = document.createElement('td');
      td.innerHTML = this.hourlySale[i];
      trElement.appendChild(td);



    };
    td = document.createElement('td');
    td.innerHTML = this.dailyTotal;
    trElement.appendChild(td);
    body = document.getElementById('body').appendChild(trElement);

};

console.log(downtown.hrlyCust());
console.log(downtown.donutSale());
console.log(downtown.dailyFinal());
console.log(downtown.hourlySale);
console.log(downtown.dailyTotal);
downtown.render();

console.log(capitolHill.hrlyCust());
console.log(capitolHill.donutSale());
console.log(capitolHill.dailyFinal());
console.log(capitolHill.hourlySale);
console.log(capitolHill.dailyTotal);
capitolHill.render();

console.log(slu.hrlyCust());
console.log(slu.donutSale());
console.log(slu.dailyFinal());
console.log(slu.hourlySale);
console.log(slu.dailyTotal);
slu.render();

console.log(wedgewood.hrlyCust());
console.log(wedgewood.donutSale());
console.log(wedgewood.dailyFinal());
console.log(wedgewood.hourlySale);
console.log(wedgewood.dailyTotal);
wedgewood.render();

console.log(ballard.hrlyCust());
console.log(ballard.donutSale());
console.log(ballard.dailyFinal());
console.log(ballard.hourlySale);
console.log(ballard.dailyTotal);
ballard.render();


var storeArrays = [];
storeArrays.push(downtown);
storeArrays.push(capitolHill);
storeArrays.push(slu);
storeArrays.push(wedgewood);
storeArrays.push(ballard);


// storeArrays.push(newPlace);
















