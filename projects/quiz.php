<?php
$q1 = $_POST["q1"];
$q2 = $_POST["q2"];
$q3 = $_POST["q3"];
$q4 = $_POST["q4"];
$q5 = $_POST["q5"];
echo "Question 1: How many fingers does a person with 3 fingers have?<br>";
echo "-   You answered: " . $q1 . "<br>";
echo "-   Correct answer: 3<br>";

echo "Question 2: What do snails think about?<br>";
echo "-   You answered: " . $q2 . "<br>";
echo "-   Correct answer: No one knows<br>";

echo "Question 3: How many corners are in a room with 3 walls, 1 floor and 1 ceiling?<br>";
echo "-   You answered: " . $q3 . "<br>";
echo "-   Correct answer: 6<br>";

echo "Question 4: Where was the biggest fish you've ever seen?<br>";
echo "-   You answered: " . $q4 . "<br>";
echo "-   Correct answer: Not enough information<br>";

echo "Question 5: How many half-gallons are in one gallon?<br>";
echo "-   You answered: " . $q5 . "<br>";
echo "-   Correct answer: 2<br>";

$total = 0 + ($q1=="3") + 
($q2=="No one knows") + 
($q3=="6") +
($q4=="Not enough information") +
($q5=="2");
echo "<br>TOTAL CORRECT: " . $total . "<br>";
?>