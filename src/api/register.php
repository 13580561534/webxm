<?php

 $name =isset($_POST['name'])? $_POST['name']:'lili';
 $psw = isset($_POST['psw']) ? $_POST['psw'] : '223452';
 $phone =isset($_POST['phone'])? $_POST['phone']:'123333213';
    
  include 'conn.php';
    // $sql = "INSERT INTO user(name,password,phone) VALUES('linlin','1563573','1563876874');";
$sql ="INSERT INTO user(name,password,phone) VALUES('$name','$psw','$phone')";

    //执行sql语句                        check = true;

    $res = $conn->query($sql);//insert update delete语句都是返回布尔值
    // var_dump($res);//边写边验证

    //返回执行状态
    if($res) {
        //插入成功
        echo 'yes';
    }else{
        //失败
        echo 'no';
    }
?>