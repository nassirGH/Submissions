<?php

class tasksTable extends DatabaseTable {
	public $table = 'tasks';
	
	public function create() {
		
		self::$db->exec( "CREATE TABLE IF NOT EXISTS tasks (
		        id integer NOT NULL CONSTRAINT Users_pk PRIMARY KEY,
		        title varchar(255) NOT NULL,
		        description text NOT NULL,
		        created_at datetime NOT NULL,
		        updated_at datetime NULL,
		        deleted_at datetime NULL
		)" );
	}
	
}
