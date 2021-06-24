# MVC todo
The code was originally downloaded from => below
Code explained in this article blog : https://medium.com/@noufel.gouirhate/create-your-own-mvc-framework-in-php-af7bd1f0ca19


## Brief

1. Config/ => Contains all the comman configuration
2. Controllers => Contains all the controllers for each CRUD, Don't create subfolders for the controllers as that for now the system dosen't support it
3. Core => contain the Core class used in the MVC structure ( No need to edit or add )
4. Database => contains the sqlite file, migration file that handle the database migration (Look into the Migration section to have more understanding on how it works)
5. Models => Contain all the Models for the application, each Model is responsible to handle the communication with his relevant db table(Only db code no logic).
6. Routers => Where we define a controller and action for each url in the application
7. Views => The directory that contains all the HTML of our app
8. Webroot => The public folder of our application
8. dispatcher.php, request.php and router.php => the 3 most important files

## Migration
    Commands:
    ```
    $ php Database/migration.php --action=migrate
    $ php Database/migration.php --action=reset
    ```
    action: migrate => Create databases based on the tables available inside the constructor of migration.php
    action: reset => Drop databases based on the tables available inside the constructor of migration.php
    
## Views
    CRUD Views, folder name should be the same name of the relevant Controller without the Controller word.
    Example:
          Controller name: tasksController.php
          View directory name: Tasks
          
          Controller name: APItasksController.php
          View directory name: APItasks
          

