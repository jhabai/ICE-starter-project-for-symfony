<?php

namespace Ice\DecoupeBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DecoupeController extends Controller
{
    /**
     * @Route("/home")
     */
    public function home()
    {
        return $this->render('@IceDecoupe/Home/home.html.twig');
    }
}

