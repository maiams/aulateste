<?php
session_start();

$arrayN1 = $_SESSION['n1'];
$arrayN2 = $_SESSION['n2'];
/*
$numero1 = (int)rand(1,29);
$numero2 = (int)rand(1,29);

while(in_array($numero1, $arrayN1)){
    $numero1 = (int)rand(1,29);
}
$arrayN1[] = $numero1;
while(in_array($numero2, $arrayN2)){
    $numero2 = (int)rand(1,29);
}
$arrayN2[] = $numero2;

$_SESSION['n1'] = $arrayN1;
$_SESSION['n2'] = $arrayN2;
*/
print "Numero $numero1 pergunta para $numero2";

print "<br>Numeros excluidos:";
print "<pre>";
print_r((object)array('Pergunta' => (object)$arrayN1,'Resposta' => (object)$arrayN2));
print "</pre>";
?>


