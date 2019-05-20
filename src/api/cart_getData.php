<?php
	//连接数据库
	include 'conn.php';
	
	//1.写sql语句
	$sql = "SELECT * FROM orders1";

	//2.执行语句
	$res = $conn->query($sql);
	
	//var_dump($res);//结果集，想要内容
	
	//3.获取结果集里面的内容
	$content = $res->fetch_all(MYSQLI_ASSOC);
	
	//var_dump($content);//结果集，想要内容
	echo json_encode($content,JSON_UNESCAPED_UNICODE);


?>