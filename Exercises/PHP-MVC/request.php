<?php
    class Request
    {
        public $url;

        public function __construct()
        {
            $this->url = parse_url($_SERVER["REQUEST_URI"]);
        }
    }

?>
