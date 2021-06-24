<?php
define( 'WEBROOT', str_replace( "index.php", "", $_SERVER["SCRIPT_NAME"] ) );
define( 'ROOT', str_replace( "Webroot/index.php", "", $_SERVER["SCRIPT_FILENAME"] ) );
require( ROOT . 'Config/core.php' );

require( ROOT . 'router.php' );
require( ROOT . 'Routers/web.php' );
require( ROOT . 'Routers/api.php' );
require( ROOT . 'request.php' );
require( ROOT . 'dispatcher.php' );
//var_dump(Router::$getRoutes);
$dispatch = new Dispatcher();

$dispatch->dispatch();
?>
