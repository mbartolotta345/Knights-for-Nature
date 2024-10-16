/* .js files add interaction to your website */
var factList = [
"Around 15% of the carbon released in the environment is due to deforestation and change in the use of land",
"The Golden Toad is the first species to go extinct due to climate change",
"Vehicles like cars and trucks contribute to 20% of carbon emissions in the United States",
"Air conditions and heating elements consume 50% of electricity in America",
"The hottest years have been experienced from 1990 till 1997. The warmest years have been since 2005",
"Land use change and deforestation contribute to 15% of carbon emission every year"
  
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}