<?php

/**
 * The migration file is the responsible file to create / edit database structure
 */

require_once __DIR__ . '/../Config/db.php';
require_once __DIR__ . '/tasksTable.php';
require_once __DIR__ . '/usersTable.php';


class migration {
	public static $tables = [
	
	];
	
	public function __construct() {
		self::$tables[] = new tasksTable();
		self::$tables[] = new usersTable();
	}
	
	static function migrate() {
		foreach ( self::$tables as $key => $table ) {
			$table->create();
		}
	}
	
	static function reset() {
		foreach ( self::$tables as $key =>  $table ) {
			$table->drop();
		}
	}
}

$args = getopt( null, [ "action:" ] );
$migration = new migration();
switch ( $args['action'] ) {
	case 'migrate':
		$migration->migrate();
		break;
	case 'reset':
		$migration->reset();
		break;
	default:
		break;
}
