<?php
	echo "Thank you for your purchase, this is your password: ";
    $ps = "password";//$_POST["password"];
    echo password;
    $total = 0;
	for($x = 0; $x < 6; $x ++){
    	for($y = 0; $y < 6; $y ++){
        	$num = (6*$x + $y);
        	$name = "Basket" . $num;
            if($_POST[$name] == $name){
            	$total ++;
            }
   		}
    }
?>