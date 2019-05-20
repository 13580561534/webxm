<?php
        header('content-type:text/html;charset=utf-8');
        include 'conn.php';
    
        $gid = isset($_POST['gid']) ? $_POST['gid'] : '1';
        $smallimg = isset($_POST['smallimg']) ? $_POST['smallimg'] : '3';
        $title = isset($_POST['title']) ? $_POST['title'] : '4';
        $price = isset($_POST['price']) ? $_POST['price'] : '6';
        // $rest = isset($_POST['rest']) ? $_POST['rest'] : '8';
        //插入的数据最好用单引号包裹
        $sql = "INSERT INTO orders1 (`gid`, `smallimg`,`title`, `price`,`rest`,`buy`) VALUES ('$gid', '$smallimg','$title','$price',12,1)";

        $sql_a = "SELECT * FROM orders1 WHERE gid = $gid";
        
        $res_a = $conn->query($sql_a);
        
        //判断购物车信息表，是否存在这个商品
        //如果存在数量加一。如果不存在，添加信息
        if($res_a->num_rows){
            $count_a = "UPDATE orders1 SET `buy`=`buy`+1 WHERE gid = $gid";
            $conn->query($count_a);
            echo 'success!';
        }else{
            $res = $conn->query($sql);
            if($res){
                echo 'yes';
            }else{
                echo 'no';
            }
        }
        
    
?>