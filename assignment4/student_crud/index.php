    <?php include "db.php"; ?>
<!DOCTYPE html>
<html>
<head>
<title>Student Registration</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Student Registration</h2>

<form action="insert.php" method="post">
First Name: <input type="text" name="fname" required><br>
Last Name: <input type="text" name="lname" required><br>
Roll No: <input type="text" name="rollno" required><br>
Password: <input type="password" name="password" required><br>
Contact: <input type="text" name="contact" pattern="[0-9]{10}" required><br>
<button type="submit">Register</button>
</form>

<h2>Students List</h2>

<table border="1">
<tr>
<th>ID</th>
<th>Name</th>
<th>Roll</th>
<th>Contact</th>
<th>Action</th>
</tr>

<?php
$result = mysqli_query($conn,"SELECT * FROM students");

while($row=mysqli_fetch_assoc($result)){
echo "<tr>
<td>{$row['id']}</td>
<td>{$row['fname']} {$row['lname']}</td>
<td>{$row['rollno']}</td>
<td>{$row['contact']}</td>
<td>
<a href='delete.php?id={$row['id']}'>Delete</a>
<a href='update.php?id={$row['id']}'>Update</a>
</td>
</tr>";
}
?>

</table>

</body>
</html>
