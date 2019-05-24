// Assign the data from data.js
var sightings = data
// Select the submit button
var tbody = d3.select("tbody");

sightings.forEach(function(sighting) {
console.log(sighting); 
 
 var trow = tbody.append("tr");

 Object.values(sighting).forEach(function(val){
     var td = trow.append("td")
td.text(val)
 });    
  console.log(Object.values(sighting));

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDateValue = d3.select("#datetime");

   // Get the value property of the input element
   var inputDateValue = inputDateValue.property("value");

   console.log(inputDateValue);
   console.log(sightings);
 
   var filteredSightings = sightings.filter(sighting => sighting.datetime === inputDateValue);
 
   console.log(filteredSightings);
});



  
});


