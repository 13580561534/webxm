<?php
include 'conn.php';
  $name =isset($_POST['name'])? $_POST['name']:'';

 $sql ="SELECT * from user WHERE name ='$name'";
 $res =$conn->query($sql);

 if($res->num_rows){//插入成功
        echo 'no';
      }else{
        echo 'yes';//可以注册
      }
  // $conn->close();
?>