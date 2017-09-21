//Script for all countries information

function allCountries() {
	
	var apiCall = "https://restcountries.eu/rest/v2/all";
	
	var requestFor = new XMLHttpRequest();
	
	requestFor.open("GET", apiCall, true);
	
	requestFor.onload = function() {
		
		if( requestFor.readyState == 4 && requestFor.status == 200 ) {
			
		var receivedData = JSON.parse(requestFor.responseText);
			
		var countries = document.getElementById("countryName");

			 for(var i = 0; i < receivedData.length; i++) {
				 var colMD = document.createElement("div");
				 colMD.setAttribute("class", "col-md-6")
				 
				 var divCol = document.createElement("div");
				 divCol.setAttribute("class", "col-md-12");
				 
				 var countryTitle = document.createElement("p");
				 countryTitle.innerHTML = "<h5>Country name:</h5>" + receivedData[i].name + "<br>" + "<br><h5>Capital:</h5>" + receivedData[i].capital + "<br>" + "<br><h5>Population:</h5>" + receivedData[i].population + " people" + "<br>" + "<br>" + "<h5>Region:</h5>" + receivedData[i].subregion + "<br>";
				 divCol.appendChild(countryTitle);
				 
				 var flagTitle = document.createElement("h5");
				 flagTitle.innerHTML = "Flag:" + "<br>";
				 divCol.appendChild(flagTitle);
				 
				 var flag = document.createElement("img");
				 flag.setAttribute("src", receivedData[i].flag);
				 flag.setAttribute("width", "30%");
				 flag.innerHTML = receivedData[i].flag;
				 divCol.appendChild(flag);
				 
				 var langLength = receivedData[i].languages.length;
				 
				 var title = document.createElement("h5");
				 title.innerHTML = "<br>" + "Languages: " + "<br>";
				 divCol.appendChild(title);
				 
				 for(a=0; a < langLength; a++) { 
					 var language = document.createElement("p");
					 language.innerHTML = receivedData[i].languages[a].name;	divCol.appendChild(language);
				 }
				 
				 var currLength = receivedData[i].currencies.length;
				 
				 var currTitle = document.createElement("h5");
				 currTitle.innerHTML = "Currency: " + "<br>";
				 divCol.appendChild(currTitle);
				 
				 for(b=0; b < currLength; b++) { 
					 
					 var currency = document.createElement("p");
					 
					 var cureency = receivedData[i].currencies[b];

					 currency.innerHTML = cureency.name + " | " + cureency.code + " | " + cureency.symbol + "<br>";
					 divCol.appendChild(currency);
				
				  } 
				 colMD.appendChild(divCol);
			 	countries.appendChild(colMD);
				 
			 } 
			
		}
	}
	
	requestFor.send();
	
}	allCountries();