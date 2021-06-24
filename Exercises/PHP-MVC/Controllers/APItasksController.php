<?php

class APItasksController extends Controller {
	function index() {
		require( ROOT . 'Models/Task.php' );
		
		$tasks = new Task();
		
		$d['tasks'] = $tasks->showAllTasks();
		$this->json( $d );
	}
	
	function select( $id ) {
		require( ROOT . 'Models/Task.php' );
		$tasks = new Task();
		
		$d['task']  = $tasks->showTask( $id );
		$this->json( $d );
	}
	
	function create() {
		$d['action'] = 'fail';
		if ( isset( $_POST["title"] ) ) {
			require( ROOT . 'Models/Task.php' );
			
			$task = new Task();
			
			$d['action'] = $task->create( $_POST["title"], $_POST["description"] );
		}
		$this->json( $d );
	}
	
	function edit( $id ) {
		require( ROOT . 'Models/Task.php' );
		$task        = new Task();
		$d['action'] = 'fail';
		$d["task"]   = $task->showTask( $id );
		
		if ( isset( $_POST["title"] ) ) {
			if ( $results = $task->edit( $id, $_POST["title"], $_POST["description"] ) ) {
				$d['action'] = $results;
			}
		}
		$this->json( $d );
	}
	
	function delete( $id ) {
		require( ROOT . 'Models/Task.php' );
		
		$task = new Task();
		$this->json( $task->delete( $id ) );
	}
}

?>
