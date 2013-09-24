<?php
session_start();


$usuario=$_POST['username'];
$senha=$_POST['password'];

$conexao= mysql_connect('localhost', 'root', '');
mysql_select_db('joguinho', $conexao);

$sql="select id from user where username= '$usuario' and password = '$senha'"; 

$resultado= mysql_query($sql, $conexao);

if(mysql_num_rows($resultado)>0){
    $_SESSION['autenticado'] = 'sim';
} else {
    $_SESSION['autenticado'] = 'nao';
}


if($_SESSION['autenticado'] == 'sim'){
    header("Location: http://www.uol.com.br/");
} else {
    header("Location: index.php");
}
