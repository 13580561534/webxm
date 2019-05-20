<?php
include 'conn.php';
 //设置编码
    header('content-type:text/html;charset=utf-8');
    // $name =isset($_POST['name'])? $_POST['name']:'11';
     $phone =isset($_POST['phone'])? $_POST['phone']:'';
      
    // $psw =isset($_POST['psw'])? $_POST['psw']:'33';
      //1、写查询语句
    $sql ="SELECT * from user WHERE phone ='$phone';";

    // $sql ="SELECT * from `user`";
    // $sql ="SELECT * from user WHERE name ='$name' AND phone ='$phone';";
    //2、执行sql语句获取查询结果集
    $res =$conn->query($sql);//insert update delete语句都是返回布尔值
    // echo $res;
       //使用查询结果集
       //得到数组
       // $row = $res->fetch_all(MYSQLI_ASSOC);
       // echo $row;
       //  //释放查询结果集，避免资源浪费
       // var_dump($res);
       // $result->close();
       //把结果输出到前台
      //  // echo json_encode($row);
      if($res->num_rows){//插入成功
        echo 'no';
      }else{
        echo 'yes';//可以注册
      }
  $conn->close();

?>