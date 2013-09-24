<form action="teste.php" method="get">
    <p>Digite o nome: <input type="text" name="nome"></p>
    <input type="submit" value="VAI!">
    
</form>


<?php

$nome = $_GET['nome'];

$con = mysql_connect('localhost', 'root', '');
mysql_select_db('escola');
$resultado = mysql_query("select * from user where nome LIKE '%".$nome."%'");
print "<table border='1'>";
print "<tr><td>ID</td><td>NOME</td><td>SEXO</td></tr>";
while($linha = mysql_fetch_object($resultado)) {
    print "<tr>";
    print "<td>". $linha->id."</td>";
    print "<td>". $linha->nome."</td>";
    print "<td>". $linha->sexo."</td>";
    print "</tr>";
}
print "</table>";
?>
