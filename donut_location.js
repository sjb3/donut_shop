
function Donutshop(place,min,max,avgDonutsPerCust,totalHours) {
  this.place = place;//franchise location
  this.min = min;//min # of customers per Hr
  this.max = max;//max # of customers per Hr
  // this.minSale = minSale;
  // this.maxSale = maxSale;
  this.avgDonutsPerCust = avgDonutsPerCust;//avg donuts sale per customers per hr
  this.totalHours = totalHours;

  this.hourlySale = [];//Stores individual hourlyTotal values
  this.dailyTotal = 0;//Gets fed by hourlyTotal 
  this.grandTotal = 0;//grandTOTAL
  //this.hourlyAvgSale = [];
  //this.hours = 0;
  //this.place = ['downtown', 'capitolHill', 'slu','wedgewood','ballard'];
//11/19
//   var hours = ["Location", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "Total"];

//   //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//   var bizHours = hours.length - 1;
//   var table = document.getElementsByTagName('table')[0];
//   var row = table.insertRow(1);
//   row.insertCell(0).innerHTML = this.place;


// //??????????????????????????????????????????????????
// for(var i=1; i < bizHours-1; i++){

  this.randomHrlyCust = function(){//generates hourly customers
    return Math.floor(Math.random()*((this.max-this.min)+1)+this.min);
    }

  this.hourlyAvgSale = function(){
    this.grandTotal = 0;
    for(i=0; i<11; i++){
      this.grandTotal = this.randomHrlyCust()*this.avgDonutsPerCust;//prev.grandTotal
    //this.dailyTotal += (this.randomHrlyCust()*this.avgDonutsPerCust);  
    //var temp = this.randomHrlyCust()*this.avgDonutsPerCust;
      this.hourlySale.push(this.grandTotal);//dailyTotal

   this.dailyTotal += this.hourlySale;
    };
  //  }
  // row.insertCell(i).innerHTML = hourlySale.toFixed(0);

  // row.insertCell(bizHours).innerHTML = dailyTotal.toFixed(0);


this.total = function(){

  for(i=0; i<11;i++){ 
    this.dailyTotal += this.hourlySale[i];
  }
};
};
}
//?????????????????????????????????????????????
// Table Header: location and hours of operation
// var hours = ["Location", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "Total"];

// // create table with location, hours of operation, and Total headings
// var myTable = document.createElement('table');
// var row = document.createElement('tr');
// hours.forEach(function(hour) {
//   var th = document.createElement('th');
//   th.textContent = hour;
//   row.appendChild(th);
//   myTable.appendChild(row);
// });
// // insert table to html body
// document.body.appendChild(myTable);
//????????????????????????????????????????????



// Instantiate New Donutshop location objects:
   var downtown = new Donutshop ("Downtown", 8, 43, 4.5, 11);
   var capitolHill = new Donutshop ("Capitol Hill", 4, 37, 2, 11);
   var slu = new Donutshop ("South Lake Union", 9, 23, 6.33, 11);
   var wedgewood = new Donutshop ("Wedgewood", 2, 28, 1.25, 11);
   var ballard = new Donutshop ("Ballard", 8, 58, 3.75, 11);



                    

 Donutshop.prototype.render = function() {
 
  this.hourlyAvgSale();
  var tableElement = document.createElement(tableElement);
    
  var trElement = document.createElement('tr');
    
    for (var i = 0; i < 11; i++) {
      
     var tdElement = document.createElement('td');
     tdElement.textContent = time[i];
     trElement.appendChild(tdElement);
    }
      //body = document.getElementById('table').appendChild('td');
 
     tableElement.appendChild(trElement);
     document.body.appendChild(tableElement);
  //var myTable = document.getElementById('donutTable');

 };

console.log(downtown.hourlyAvgSale());
console.log(downtown.randomHrlyCust());
console.log(downtown.hourlySale);
downtown.total();
console.log(downtown.dailyTotal);
downtown.render();


// console.log(capitolHill.hourlyAvgSale());
// console.log(capitolHill.randomHrlyCust());
// console.log(capitolHill.hourlySale);
// capitolHill.total();
// console.log(capitolHill.dailyTotal);
// capitolHill.render();

// console.log(slu.hourlyAvgSale());
// console.log(slu.randomHrlyCust());
// console.log(slu.hourlySale);
// slu.total();
// console.log(slu.dailyTotal);
// slu.render();

// console.log(wedgewood.hourlyAvgSale());
// console.log(wedgewood.randomHrlyCust());
// console.log(wedgewood.hourlySale);
// wedgewood.total();
// console.log(wedgewood.dailyTotal);
// wedgewood.render();

// console.log(ballard.hourlyAvgSale());
// console.log(ballard.randomHrlyCust());
// console.log(ballard.hourlySale);
// ballard.total();
// console.log(ballard.dailyTotal);
// ballard.render();

// var shopArray = [];
// shopArray.push(downtown);
// shopArray.push(capitolHill);
// shopArray.push(slu);
// shopArray.push(wedgewood);
// shopArray.push(ballard);

 


