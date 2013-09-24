<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
       
        <title>login do joguinho</title>
        <link rel="stylesheet" href="default.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <form name="login" id="formlogin" action="login.php" method="post" >
        <div class="login">
            <?php
            if(@$_SESSION['autenticado'] == 'nao') {
                print "<div class='erro'>Nome de usuario ou senha invalidos</div>";
            }
            ?>
            <div> login </div> <div><input type="text" name="username" id="username"> </div>
            <div> senha </div><div><input type="password" name="password" id="password"></div>
            <input type="submit" value="OK"> 
        </div>
        </form>    
    </body>
</html>
