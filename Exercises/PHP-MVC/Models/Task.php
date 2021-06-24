<?php
class Task extends Model
{
    public function create($title, $description)
    {
        $sql = "INSERT INTO tasks (title, description, created_at, updated_at) VALUES (:title, :description, :created_at, :updated_at)";

        $req = Database::getBdd()->prepare($sql);

        return $req->execute([
            'title' => $title,
            'description' => $description,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')

        ]);
    }

    public function showTask($id)
    {
        $sql = "SELECT * FROM tasks WHERE id =" . $id;
        $req = Database::getBdd()->prepare($sql);
        $req->execute();
        return $req->fetch();
    }

    public function showAllTasks()
    {
        $sql = "SELECT * FROM tasks WHERE  deleted_at IS NULL";
        $req = Database::getBdd()->prepare($sql);
        $req->execute();
        return $req->fetchAll();
    }
    
    public function showDeletedTasks() {
        $sql = "SELECT * FROM tasks WHERE deleted_at IS NOT NULL ";
        $req = Database::getBdd()->prepare( $sql );
        $req->execute();
        
        return $req->fetchAll();
    }
    public function edit($id, $title, $description)
    {
        $sql = "UPDATE tasks SET title = :title, description = :description , updated_at = :updated_at WHERE id = :id";

        $req = Database::getBdd()->prepare($sql);

        return $req->execute([
            'id'          => $id,
            'title'       => $title,
            'description' => $description,
            'updated_at'  => date( 'Y-m-d H:i:s' ),

        ]);
    }

    public function delete($id)
    {
        $sql = 'UPDATE tasks SET deleted_at = :deleted_at WHERE id = :id';
    
        $req = Database::getBdd()->prepare( $sql );
    
        return $req->execute( [
            ':deleted_at' => date( 'Y-m-d H:i:s' ),
            ':id'         => $id,
        ] );
    
    }
    
    public function deleteForever( $id ) {
        $sql = 'DELETE FROM tasks WHERE id = ?';
        $req = Database::getBdd()->prepare( $sql );
        
        return $req->execute( [ $id ] );
    }
    
    public function reset( $id ) {
        $sql = 'UPDATE tasks SET deleted_at = NULL WHERE id = :id';
        $req = Database::getBdd()->prepare( $sql );
    
        return $req->execute( [ $id ] );
    }
}
?>
