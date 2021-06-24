<?php


class DatabaseTable {
	public static $db = null;
	public $table;
	
	function __construct() {
		$db       = Database::getBddWithPath( __DIR__ . '/../Database/' );
		self::$db = $db;
	}
	
	public function drop() {
		self::$db->exec( 'DROP TABLE IF EXISTS ' . $this->table );
	}
}
