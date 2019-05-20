<?php
include 'conn.php';
$gid =isset($_GET['gid'])? $_GET['gid']:'1';

$sql ="SELECT * FROM goodlist WHERE gid =$gid";
$res =$conn->query($sql);
 $con=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($con,JSON_UNESCAPED_UNICODE);
?>