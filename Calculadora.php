<?php

class Calculadora {
    private $senha = 'secreto';
    public $nome = "Novinho";
    
    public function imprimeSenha() {
        print "O valor da senha eh " . $this->senha;
    }
    
    public function imprimeSenha($a = 1) {
        print $a;
    }
}

?>
