<?php
    class Controller
    {
	    public $vars = [];
	    public $layout = "default";

        function set($d)
        {
            $this->vars = array_merge($this->vars, $d);
        }

        function render($filename)
        {
            extract($this->vars);
            ob_start();
            require(ROOT . "Views/" . ucfirst(str_replace('Controller', '', get_class($this))) . '/' . $filename . '.php');
            $content_for_layout = ob_get_clean();

            if ($this->layout == false)
            {
                $content_for_layout;
            }
            else
            {
                require(ROOT . "Views/Layouts/" . $this->layout . '.php');
            }
        }

        private function secure_input($data)
        {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        protected function secure_form($form)
        {
            foreach ($form as $key => $value)
            {
                $form[$key] = $this->secure_input($value);
            }
        }
	
	    function json( $data ) {
		
		    header( "Content-Type: application/json" );
		
		    $json = json_encode( $data );
		    if ( $json === false ) {
			    // Avoid echo of empty string (which is invalid JSON), and
			    // JSONify the error message instead:
			    $json = json_encode( array( "jsonError", json_last_error_msg() ) );
			    if ( $json === false ) {
				    // This should not happen, but we go all the way now:
				    $json = '{"jsonError": "unknown"}';
			    }
			    // Set HTTP response status code to: 500 - Internal Server Error
			    http_response_code( 500 );
		    }
		    die( $json );
	    }

    }
?>
