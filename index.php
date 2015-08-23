<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<style type="text/css">
		.name{
			font-size: 30px;
			font-family: sans-serif;
		}
		.mes{
			font-size: 20px;
			font-family: sans-serif;
		}
		#comments{
			background-color: #fff;
			width: 300px;
			border: 1px dashed #222;
		}
	</style>
</head>
<body>
	<script type="text/javascript" src="index.js"></script>
	
		<label>Name: <br><input type="text"  id="name"><br></label>
		<label>Messege: <br><textarea cols="50" rows="10" name="mes" id="message"></textarea></label><br>
		<input type="submit"  value="Post" id="post">

	<h1 style="font-size: 35px"><b>Comments :</b></h1><br>
	<div id="comments">
		
	</div>
</body>
</html>

