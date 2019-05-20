<?php

include 'conn.php';
    $page =isset($_GET['page'])? $_GET['page']:'1';
    $num =isset($_GET['num'])? $_GET['num']:'8';
    $type = isset($_GET['type']) ? $_GET['type'] : '';//这个变量用于判断是否排序，根据什么规则排序
    $order = isset($_GET['order']) ? $_GET['order'] : '';//判断是升序还是降序
    $start =isset($_GET['start'])?$_GET['start']:'0';//开始
    $end =isset($_GET['start'])?$_GET['start']:'5';//结束
    $index =($page-1)*$num;
    if($type=='price'){
        //不为空：意味已经有值传过来，需要排序
         // $sql ="SELECT * FROM datalist ORDER BY $type $order LIMIT $index,$num";
        $sql = "SELECT * FROM goodlist ORDER BY $type $order LIMIT $index,$num";
    }else if($type=='sales'){
        $sql = "SELECT * FROM goodlist ORDER BY $type LIMIT $index,$num";
    }else if($type=='comment'){
        $sql = "SELECT * FROM goodlist ORDER BY $type LIMIT $index,$num";
    }else if($type=='news'){
        $sql = "SELECT * FROM goodlist ORDER BY $type LIMIT $index,$num";
    }else{
        //空：没有传值过来，不需要排序
        $sql ="SELECT * FROM goodlist LIMIT  $index,$num";
   }

//执行语句
    $res = $conn->query($sql);//结果集
    $content =$res->fetch_all(MYSQLI_ASSOC);

   //获取总条数
    $sql2="SELECT * from goodlist";
    $res2 =$conn->query($sql2);
    $num_rows = $res2->num_rows;
    $sql3="SELECT * FROM goodlist LIMIT $start,$end";
    $res3 =$conn->query($sql3);
    $content2=$res3->fetch_all(MYSQL_ASSOC);
    $datalist =array(
        'data'=>$content,
        'temai'=>$content2,
        'total'=>$num_rows,
        'page'=>$page,
        'num'=>$num,
    );

    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);//传给前端
?>