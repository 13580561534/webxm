<?php
include 'conn.php';
$name =isset($_POST['name'])? $_POST['name']:'abcd';
$psw =isset($_POST['psw'])? $_POST['psw']:'';
    
    //执行查询语句
   // $sql ="SELECT * from user WHERE name='$name'";

    $sql ="SELECT * from user WHERE name='$name' AND password ='$psw'";
    // echo $sql;
    $res =$conn->query($sql);
    // var_dump($res);
    if($res->num_rows){
        echo '1';//3.查找得到，就是可以登陆
    }else{
        echo '0';
    }
?>