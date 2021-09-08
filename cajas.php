<?php
function solve($width, $height, $length, $mass) {
  // Write your code here
  // To debug (equivalent to var_dump): error_log(var_export($var, true));
  $volume=$width*$height*$length;
  $packageBulky=0;
  $packageHeavy=0;
 if($volume>=1000000 || $width>=150 || $height>=150 || $length>=150){
  $packageBulky=1;
 }else{
   $packageBulky=0;
 }
if($mass>=20){
 $packageHeavy=1;
}else{
  $packageHeavy=0;
}

if($packageBulky==0 and $packageHeavy==0){
  return "STANDARD";
}else if($packageBulky==0 || $packageHeavy==0){
  return "SPECIAL";
}else if($packageHeavy==1 and $packageBulky==1){
  return "REJECTED";
}
}
/* Ignore and do not change the code below */
//region


?>