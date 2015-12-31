<?php
/**
 * Created by PhpStorm.
 * User: yesenia
 * Date: 13/12/15
 * Time: 11:25 AM
 */

namespace platziPHP;


class Autor extends Usuarios
{
    /**
     * @return mixed
     */
    public function getNombre()
    {
        return $this->nombre;
    }

}