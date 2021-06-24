<form method="post">
<br><br><br>
 Enter Temprature in Celcius : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="cel">
<br><br><br><br><br><br><br><br><br><br>
<input type="submit" name= "submit" value="Convert" style="font-size: 2em; background-color:  #f27669;">
<input type="reset" value="Reset" style="font-size: 2em; background-color: #FFF;">
 
<?php
if(isset($_POST['submit']))
{
 $c= $_POST['cel'];
 $f= $c * (9/5) + 32;
 echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='background-color: #e4ddcb'><center><label class='col-sm-2 control-label' >Temprature in Fahrenheit =</label> <input class='easypositive' value=$f ></span></center>";
} 
 ?>
</body>
</html>


