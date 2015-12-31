<?php
namespace platziPHP;


class Usuarios
{
    /**
     * @type string
     */
    protected $email;
    /**
     * @type string
     */
    protected $password;
    /**
     * @type string
     */
    protected $nombre;
    /**
     * @type string
     */
    protected $apellido;

    public function __construct($email, $password)
    {
        $this->email=$email;
        $this->password=password_hash($password,PASSWORD_DEFAULT);
    }

    /**
     * @param string $nombre
     * @param string $apellido
     */
    public function setNombre($nombre, $apellido)
    {
        $this->nombre=$nombre;
        $this->apellido=$apellido;
    }

    /**
     * @return string
     */
    public function getApellido()
    {
        return $this->apellido;
    }
}