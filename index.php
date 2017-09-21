<DOCTYPE! html>

<html>

<head>

	<title>Countries Information | API</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="stylesheet" href="stylesheet.css">
	
	<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">

	<link rel="stylesheet" href="bootstrap/bootstrap.min.css">	
	<script src="bootstrap/jquery-3.2.1.slim.min.js"></script>
	<script src="bootstrap/popper.min.js"></script>
	<script src="bootstrap/bootstrap.min.js"></script>
	
</head>

<body>

	<div class="container-fluid">
				
		<div  class="row">
			<div id="input" class="align-items-center justify-content-center align-middle col">
				<h5 id="heading">Please select a country from the list below:</h5>
				<br>
				<div id="inputFlex">
				<select id="countryName"></select>
				<br>
				<button id="myButton" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-search" aria-hidden="true"></i></button>
				</div>
				<br>
				<p id="title">Get information about all countries in one place:</p><a id="click" href="all-countries.html"><strong>CLICK HERE</strong></a>
			</div>
			
<!--			<a id="home" href="http://mjakevicius.co.uk"><img src="logo.png" alt=""></a>-->
		</div>
					
     </div>
     
     <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Country information:</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
        	<div id="countryInfo" class="row">
        		
        	</div>
        </div>
      </div>
      <div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
	
	<script type="text/javascript" src="requestInfo.js"></script>
	
</body>

</html>