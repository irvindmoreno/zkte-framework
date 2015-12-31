<?php
class UsuariosTest extends PHPUnit_Framework_TestCase
{
    /** @test */
    function probarConstructor()
    {
        $usuario= new \platziPHP\Usuarios('yes@hotmail.com',1234);
        $this->assertInstanceOf(\platziPHP\Usuarios::class, $usuario);

    }

}