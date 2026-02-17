<?php
include "db.php";

$id=$_GET['id'];

if(isset($_POST['update'])){
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$contact=$_POST['contact'];

mysqli_query($conn,"UPDATE students SET fname='$fname', lname='$lname', contact='$contact' WHERE id=$id");
header("Location:index.php");
}

$result=mysqli_query($conn,"SELECT * FROM students WHERE id=$id");
$row=mysqli_fetch_assoc($result);
?>

<form method="post">
First Name: <input type="text" name="fname" value="<?php echo $row['fname']; ?>"><br>
Last Name: <input type="text" name="lname" value="<?php echo $row['lname']; ?>"><br>
Contact: <input type="text" name="contact" value="<?php echo $row['contact']; ?>"><br>
<button name="update">Update</button>
</form>
