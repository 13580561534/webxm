<?php
//1准备参数
$severname ='localhost';
$username ='root';
$password ='';
$dbname ='h51902';
//2创建连接
$conn =new mysqli($severname,$username,$password ,$dbname);
//php调用方法obj->show()
//如果出错提示错误
//检测连接
 if ($conn->connect_error) {
           die("连接失败: " . $conn->connect_error);
      }
      // else{
      //    echo '连接成功';
      // }
?>