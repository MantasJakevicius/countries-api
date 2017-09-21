//Script for requested country info

//Option elements

var getName = "https://restcountries.eu/rest/v2/all";
	
	var requestName = new XMLHttpRequest();
	
	requestName.open("GET", getName, true);
	
	requestName.onload = function() {
		
		if( requestName.readyState == 4 && requestName.status == 200 ) {
			
		var nameData = JSON.parse(requestName.responseText);
			
		var countries = document.getElementById("countryName");
			
			 for(var i = 0; i < nameData.length; i++) {
				 
				var optionName = nameData[i].name;
				 
				var option = document.createElement("option");
				option.innerHTML = optionName;
				option.setAttribute("value", optionName);
				countries.appendChild(option);
			 } 
			
		}
	}
	
	requestName.send();

//Request country info

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getInfo, false);

function getInfo() {
    
    var userCountry = document.getElementById("countryName").value;
    
    var theAPICall = "https://restcountries.eu/rest/v2/name/" + userCountry;
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
    
    if(myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData = JSON.parse(myRequest.responseText);
			
		var information = document.getElementById("countryInfo");
		
		var divCol = document.createElement("div");
		divCol.setAttribute("class", "col-12");
		divCol.setAttribute("id", "temp");
		
		//country info
				 
				 var countryTitle = document.createElement("p");
				 countryTitle.innerHTML = "<h5>Country name:</h5>" + myData["0"].name + "<br>" + "<br><h5>Capital:</h5>" + myData["0"].capital + "<br>" + "<br><h5>Population:</h5>" + myData["0"].population + " people" + "<br>" + "<br>" + "<h5>Region:</h5>" + myData["0"].subregion + "<br>";
				 divCol.appendChild(countryTitle);
		
		//FLAG
				 
				 var flagTitle = document.createElement("h5");
				 flagTitle.innerHTML = "Flag:" + "<br>";
				 divCol.appendChild(flagTitle);
				 
				 var flag = document.createElement("img");
				 flag.setAttribute("src", myData["0"].flag);
				 flag.setAttribute("width", "30%");
				 flag.setAttribute("style", "border: 1px black solid");
				 flag.innerHTML = myData["0"].flag;
				 divCol.appendChild(flag);
		
		//LANGUAGE info
		
				var langLength = myData["0"].languages.length;
				 
				 var title = document.createElement("h5");
				 title.innerHTML = "<br>" + "Languages:" + "<br>";
				 divCol.appendChild(title);
				 
				 for(a=0; a < langLength; a++) { 
					 var language = document.createElement("p");
					 language.innerHTML = myData["0"].languages[a].name;	divCol.appendChild(language);
				 }
		
		//CURRENCY info
				 
				 var currLength = myData["0"].currencies.length;
				 
				 var currTitle = document.createElement("h5");
				 currTitle.innerHTML = "Currency:" + "<br>";
				 divCol.appendChild(currTitle);
				 
				 for(b=0; b < currLength; b++) { 
					 
					 var currency = document.createElement("p");
					 
					 var cureency = myData["0"].currencies[b];

					 currency.innerHTML = cureency.name + " | " + cureency.code + " | " + cureency.symbol + "<br>";
					 divCol.appendChild(currency);
				
				  }
		
		//script for time
		
				var time = document.createElement("p");
		
				time.setAttribute("id", "time");
		
				divCol.appendChild(time);
		
				var city = myData["0"].capital;
				
				var timeCall = "http://api.worldweatheronline.com/premium/v1/tz.ashx?key=da5921634cee415fb0a214531170107&q=" + city + "&format=json";

				var timeRequest = new XMLHttpRequest();

				timeRequest.open("GET", timeCall, true);
					
				timeRequest.onload = function() {
					
					 if(timeRequest.readyState == 4 && myRequest.status == 200) {
        
						 var timeData = JSON.parse(timeRequest.responseText);
						 document.getElementById("time").innerHTML = "<h5>Current time:</h5>" + timeData.data.time_zone[0].localtime;
						 
					  }
				}

				 timeRequest.send();
				 
			 	information.appendChild(divCol); 
    } 
		else {
            alert("Data can not be accessed!");
		}   

} 
	myRequest.send();
	
	$("#myButton").click(function(){
		$("#temp").remove();
	});

}