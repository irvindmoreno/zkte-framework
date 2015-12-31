<?php
/**
 * Created by PhpStorm.
 * User: yesenia
 * Date: 13/12/15
 * Time: 10:52 AM
 */
require_once 'vendor/autoload.php';

$autor = new \platziPHP\Autor("Yess@hotmail.com",1234);
$autor->setNombre("YessAri","Vergaray");
//echo $usuario->getApellido();
//echo PHP_EOL;
var_dump($autor);

echo $autor->getNombre();
echo PHP_EOL;
echo $autor->getApellido();
echo PHP_EOL;


