<?php
	error_reporting(E_ALL);
	ini_set("display_errors", 1);
	echo "<table style='width:100%'>";
	for ($y = 0; $y <= 10; $y++) {
	  echo "<tr>";
	    for ($x = 0; $x <= 10; $x++) {
	      	$prod = $x*$y;
		 if($x==0){
		    echo "<td>$y</td>";
		 }else if($y==0){
		    echo "<td>$x</td>";
		 }else{
		    echo "<td>$prod</td>";
		 }
	    }
	    echo "</tr>";
	}
	echo "</table>";
?>