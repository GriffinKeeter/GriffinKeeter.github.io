<?php
	echo "Thank you for your purchase, this is your password: ";
    $ps = $_POST["password"];
    echo password;
    $total = 0;
	for($x = 0; $x < 6; $x ++){
    	for($y = 0; $y < 6; $y ++){
        	$num = (6*$x + $y);
        	$name = "Basket" . $num;
            if($_POST[$name] == $name){
            	echo "<br>";
            	echo "item: " . ($total + 1) . ": " . $name . "   ";
                echo " - - - cost: $1";
            	$total ++;
            }
   		}
    }	
    
    $ship = $_POST["shipping"];
    echo "<br>Shipping: " . $ship;
    echo "<br>total cost: $" . $total . " not including shipping";
    
?>