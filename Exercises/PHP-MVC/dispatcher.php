<?php

class Dispatcher
{

    private $request;

    public function dispatch()
    {
        $this->request = new Request();
        Router::parse($this->request->url, $this->request);

        $controller = $this->loadController();
        call_user_func_array([$controller, $this->request->action], $this->request->params);
    }
	
	public function loadController() {
		if ( $this->request->controller !== null ) {
			
			$name = $this->request->controller;
			$file = ROOT . 'Controllers/' . $name . '.php';
			require( $file );
			$controller = new $name();
			
			return $controller;
		}
    }

}
?>
