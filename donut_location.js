
function Donutshop(place,min,max,avgDonutsPerCust) {
  this.place = place;//franchise location
  this.min = min;//min # of customers per Hr
  this.max = max;//max # of customers per Hr
  this.avgDonutsPerCust = avgDonutsPerCust;//avg donuts sale per customers per hr
  this.hourlySale = [];//Stores individual hourlyTotal values
 
  this.Donutshop2 = function() {//11/19
   //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    var hours;
    var bizHours = hours.length - 1;
    var table = document.getElementsByTagName('table')[0];
    var row = table.insertRow(1);
    row.insertCell(0).innerHTML = this.place;

  };
//??????????????????????????????????????????????????
// // Generate random number of customers between minCustPerHour and MaxCustPerHour
//   this.hrlyCust = function(){ //generate hourly customers
//     return Math.floor(Math.random()*((this.max-this.min)+1)+this.min);
//   };
  
// // Calculate donuts sold per hour

//   this.donutSalehr = function(){//calculate hourly sales
    
//     for(i=0; i<11; i++){
//       this.hourlySale = Math.floor(this.hrlyCust()*this.avgDonutsPerCust);
//       this.dayTotal.push(this.hourlySale);
//     };
// // Calculate total donuts sold per day

//   this.dailyFinal = function(){//adding up donutSalehr becomes dailyFinal
//     for (i=0;i<11;i++){
//       this.dailyFinal+= this.donutSalehr;
//     }
//   };    


  this.randomHrlyCust = function(){//generates hourly customers
    return Math.floor(Math.random()*((this.max-this.min)+1)+this.min);
    }


   this.hourlyAvgSale = function(){
    this.grandTotal = 0;
    for(i=0; i<11; i++){
      this.grandTotal = Math.floor(this.randomHrlyCust()*this.avgDonutsPerCust);//prev.grandTotal
    //this.dailyTotal += (this.randomHrlyCust()*this.avgDonutsPerCust);  
    //var temp = this.randomHrlyCust()*this.avgDonutsPerCust;
      this.hourlySale.push(this.grandTotal);//dailyTotal

    };
    }
  // row.insertCell(i).innerHTML = hourlySale.toFixed(0);

  row.insertCell(bizHours).innerHTML = dailyTotal.toFixed(0);


this.total = function(){

  for(i=0; i<11;i++){ 
    this.dailyTotal += this.hourlySale[i];
    // this.dailyTotal.push(this.dailyTotal);
  }
this.hourlySale.push(this.dailyTotal);
// console.log('total', this.hourlySale);
};
//};
}

// Instantiate New Donutshop location objects:
   var downtown = new Donutshop ("Downtown", 8, 43, 4.5, 11);
   var capitolHill = new Donutshop ("Capitol Hill", 4, 37, 2, 11);
   var slu = new Donutshop ("South Lake Union", 9, 23, 6.33, 11);
   var wedgewood = new Donutshop ("Wedgewood", 2, 28, 1.25, 11);
   var ballard = new Donutshop ("Ballard", 8, 58, 3.75, 11);




                    

 Donutshop.prototype.render = function() {
  
  // console.log('prerender', this.hourlySale);

  // this.hourlyAvgSale();

  // console.log('render', this.hourlySale);
  var tableElement = document.createElement(tableElement);
    
  var trElement = document.createElement('tr');
    
  var tdElement = document.createElement('td');
    tdElement.innerHTML = this.dailyTotal;//this.dailyTotal
    tdElement.innerHTML = this.place;//11/20
    trElement.appendChild(tdElement);//11/20 
    //11/19 tdElement.textContent = time[i];
    //11/19 trElement.appendChild(tdElement);
    for (var i=0; i<12;i++){

      td = document.createElement('td');
    //11/19 td.innerHTML = this.dailyTotal;
      // console.log('here: ' + this.hourlySale);
      td.innerHTML = this.hourlySale[i];//new this....[i]
      trElement.appendChild(td);
    
      body = document.getElementById('body').appendChild(trElement);

    };

 
 };



// console.log(downtown.hourlyAvgSale());
// console.log(downtown.randomHrlyCust());
// console.log(downtown.hourlySale);
// downtown.total();
// console.log(downtown.dailyTotal);
// downtown.render();

// var storeArrays = [];
// storeArrays.push(downtown.dailyTotal);
// storeArrays.push(capitolHill.dailyTotal);
// storeArrays.push(slu.dailyTotal);
// storeArrays.push(wedgewood.dailyTotal);
// storeArrays.push(ballard.dailyTotal);
// console.log(storeArrays.dailyTotal);
//storeArray.push(newPlace);

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


 


