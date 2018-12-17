<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Loader extends CI_Loader {

    public function template($view='summary', $data=[], $return=false) {
        if ($return) {
            $content = $this->view('layout/includes/header');
            $content .= $this->view($view, ['data' => $data]);
            $content .= $this->view('layout/includes/footer');
            return $content;
        } 
        else {
            $this->view('layout/includes/header');
            $this->view($view, ['data' => $data]);
            $this->view('layout/includes/footer');
        }
    }
}
