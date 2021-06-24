<?php

Router::get( '/api/tasks', 'APItasksController', 'index' );
Router::post( '/api/tasks', 'APItasksController', 'create' );
Router::get( '/api/tasks/{id}', 'APItasksController', 'select' );
Router::delete( '/api/tasks/{id}', 'APItasksController', 'delete' );
Router::put( '/api/tasks/{id}', 'API/tasksController', 'edit' );
