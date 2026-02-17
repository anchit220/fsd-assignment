<?php
include "db.php";

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$roll=$_POST['rollno'];
$pass=password_hash($_POST['password'], PASSWORD_DEFAULT);
$contact=$_POST['contact'];

$sql="INSERT INTO students(fname,lname,rollno,password,contact)
VALUES('$fname','$lname','$roll','$pass','$contact')";

if(mysqli_query($conn,$sql))
    header("Location:index.php");
else
    echo "Error: ".mysqli_error($conn);
?>
