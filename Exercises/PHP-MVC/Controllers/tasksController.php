<?php
class tasksController extends Controller
{
    function index()
    {
        require(ROOT . 'Models/Task.php');

        $tasks = new Task();

        $d['tasks'] = $tasks->showAllTasks();
        $this->set($d);
        $this->render("index");
    }
    
    function deleted_index() {
        require( ROOT . 'Models/Task.php' );
        
        $tasks = new Task();
        
        $d['tasks'] = $tasks->showDeletedTasks();
        $this->set( $d );
        $this->render( "deleted" );
    }

    function create()
    {
        if (isset($_POST["title"]))
        {
            require(ROOT . 'Models/Task.php');

            $task= new Task();

            if ($task->create($_POST["title"], $_POST["description"]))
            {
                var_dump( WEBROOT );
                header( "Location: " . WEBROOT . "tasks" );
            }
        }

        $this->render("create");
    }

    function edit($id)
    {
        require(ROOT . 'Models/Task.php');
        $task= new Task();

        $d["task"] = $task->showTask($id);

        if (isset($_POST["title"]))
        {
            if ($task->edit($id, $_POST["title"], $_POST["description"]))
            {
                header( "Location: " . WEBROOT . "tasks" );
            }
        }
        $this->set($d);
        $this->render("edit");
    }

    function delete($id)
    {
        require(ROOT . 'Models/Task.php');

        $task = new Task();
        if ($task->delete($id))
        {
            var_dump( 22 );
            header( "Location: " . WEBROOT . "tasks" );
        }
    
    }
    
    function deleteForever( $id ) {
        require( ROOT . 'Models/Task.php' );
        
        $task = new Task();
        if ( $task->deleteForever( $id ) ) {
            header( "Location: " . WEBROOT . "tasks/deleted" );
        }
        
    }
    
    function reset( $id ) {
        require( ROOT . 'Models/Task.php' );
        
        $task = new Task();
        if ( $task->reset( $id ) ) {
            header( "Location: " . WEBROOT . "tasks/deleted" );
        }
    }
}
?>
