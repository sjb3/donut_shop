var data = {
    labels: ["Downtown", "Capitol Hill", "South Lake Union", "Wedgewood", "Ballard"],
    datasets: [
         {
            label: storeArrays.map(function(array){
                return array.place;
                //return shop.place;
            }),
            label: "My Donut Charts",
            fillColor: "rgba(0,63,76,0.75)",
            strokeColor: "rgba(220,220,220,1)",
            highlightFill: "rgba(220,220,220,1)",
            highlightStroke: "rgba(220,220,220,1)",

            
            data: storeArrays.map(function(array){
                return array.dailyTotal;
             })
        }
        
    ]
};
var ctx = document.getElementById("myChart").getContext("2d");
var options = { 
    scaleBeginAtZero : true,
    scaleShowHorizontalLines: true,
    scaleGridLineColor : "rgba(0,0,0,1)"

};
var myBarChart = new Chart(ctx).Bar(data, options);