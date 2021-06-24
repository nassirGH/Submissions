<?php

class Router
{
	public static $getRoutes = array();
	public static $postRoutes = array();
	public static $putRoutes = array();
	public static $patchRoutes = array();
	public static $deleteRoutes = array();
	
	
	static public function parse( $url, $request ) {
		$routes = [
			'GET'    => self::$getRoutes,
			'POST'   => self::$postRoutes,
			'PUT'    => self::$putRoutes,
			'PATCH'  => self::$patchRoutes,
			'DELETE' => self::$deleteRoutes,
		];
//		$explode_url = array_slice( $explode_url, 1 );
		$route               = self::getRoute( $url, $_SERVER['REQUEST_METHOD'] );
		$request->controller = $route['controller'];
		$request->action     = $route['action'];
		$request->params     = $route['params'];

//		if ( $url == "/" ) {
//			$request->controller = "tasks";
//			$request->action     = "index";
//			$request->params     = [];
//		} else {
//			$explode_url         = explode( '/', $url );
//			$explode_url         = array_slice( $explode_url, 2 );
//			$request->controller = $explode_url[0];
//			$request->action     = $explode_url[1];
//			$request->params     = array_slice( $explode_url, 2 );
//		}
		
	}
	
	public static function getRoute( $url, $method ) {
		$routes         = [
			'GET'    => self::$getRoutes,
			'POST'   => self::$postRoutes,
			'PUT'    => self::$putRoutes,
			'PATCH'  => self::$patchRoutes,
			'DELETE' => self::$deleteRoutes,
		];
		$url['path']    = rtrim( $url['path'], "/" );
		$explode_url    = explode( '/', $url['path'] );
		$explode_url    = array_slice( $explode_url, 1 );
		$selected_route = null;
		
		foreach ( $routes[ $method ] as $route_url => $route ) {
			$route_url = rtrim( $route_url, '/' );
			if ( $url['path'] === $route_url ) {
				$selected_route = $route;
				break;
			}
		}
		if ( $selected_route !== null ) {
			$selected_route['params'] = [];
		}
		if ( $selected_route === null ) {
			foreach ( $routes[ $method ] as $route_url => $route ) {
				if ( $selected_route !== null ) {
					break;
				}
				$explode_route_url = [];
				if ( $route_url !== '/' ) {
					$explode_route_url = explode( '/', $route_url );
				}
				$explode_route_url = array_slice( $explode_route_url, 1 );
				$same_url          = true;
				foreach ( $explode_route_url as $index => $_route_url ) {
					if ( $same_url ) {
						if ( $_route_url[0] === '{' && substr( $_route_url, - 1 ) === '}' ) {
							if ( substr( $_route_url, - 2 ) === '?}' ) {
								// Optional
								$route['params'] = array(//								'id' => null
								);
								$selected_route  = $route;
								break;
							} else if ( count( $explode_url ) - 1 >= $index ) {
								$route['params'] = array(
									'id' => $explode_url[ $index ]
								);
								$selected_route  = $route;
								break;
							}
						}
					}
					
					if ( count( $explode_url ) - 1 >= $index && $_route_url !== $explode_url[ $index ] ) {
						$same_url = false;
					}
				}
			}
		}
		
		return $selected_route;
	}
	
	public static function get( $url, $controller, $action = 'index' ) {
		self::$getRoutes[ $url ] = array(
			'controller' => $controller,
			'action'     => $action,
		);
	}
	
	public static function post( $url, $controller, $action = 'create' ) {
		self::$postRoutes[ $url ] = array(
			'controller' => $controller,
			'action'     => $action,
		);
	}
	
	public static function put( $url, $controller, $action = 'update' ) {
		self::$putRoutes[ $url ] = array(
			'controller' => $controller,
			'action'     => $action,
		);
	}
	
	
	public static function patch( $url, $controller, $action = 'update' ) {
		self::$patchRoutes[ $url ] = array(
			'controller' => $controller,
			'action'     => $action,
		);
	}
	
	public static function delete( $url, $controller, $action = 'delete' ) {
		self::$deleteRoutes[ $url ] = array(
			'controller' => $controller,
			'action'     => $action,
		);
	}
}
?>
