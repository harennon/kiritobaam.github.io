

<!DOCTYPE html>
<html>

<body>
	<form action="" method="POST">
		Comments: <textarea rows="10" cols="30" name="comment"></textarea>
		<br>
		Name: <input type="text" name="name"><br>
		<input type = "submit" value = "Post"><br> 
	</form>
	<?php include "index.html"; ?>
</body>
</html>
<?php
if($_POST){
	$name = $_POST['name'];
	$comment = $_POST['comment'];
	$handle = fopen("index.html", "a");
	fwrite($handle,"<b>" . $name . "</b>:<br/>" . $content . "<br/>");
	fclose($handle);
}

?>

