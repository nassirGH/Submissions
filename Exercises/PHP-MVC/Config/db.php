<?php
require_once __DIR__ .'/../Core/DatabaseTable.php';
class Database
{
    private static $bdd = null;

    private function __construct()
    { }

    public static function getBdd()
    {
        if (is_null(self::$bdd)) {
            self::$bdd = new PDO('sqlite:'. __DIR__ . '/../Database/db.sqlite3');
        }
        return self::$bdd;
    }

    public static function getBddWithPath($path){
          if (is_null(self::$bdd)) {
          self::$bdd = new PDO('sqlite:'. $path .'/db.sqlite3');
          }
          return self::$bdd;
    }
}
?>
