<?php

Router::get( '/', 'tasksController', 'index' );
Router::get( '/tasks', 'tasksController', 'index' );
Router::get( '/tasks/deleted', 'tasksController', 'deleted_index' );
Router::get( '/tasks/create', 'tasksController', 'create' );
Router::post( '/tasks/create', 'tasksController', 'create' );
Router::get( '/tasks/edit/{id}', 'tasksController', 'edit' );
Router::post( '/tasks/edit/{id}', 'tasksController', 'edit' );
Router::get( '/tasks/delete/{id}', 'tasksController', 'delete' );
Router::get( '/tasks/delete_forever/{id}', 'tasksController', 'deleteForever' );
Router::get( '/tasks/reset/{id}', 'tasksController', 'reset' );
