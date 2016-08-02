<?php

class Works_model {

    public function get_works() {
        $sql = '
            SELECT * FROM works 
        ';
        $data = DB::get_select($sql);

        if($data['count'] > 0) {
            return $data['result'];
        }
    }

    public function save_work($work) {
        $sql = '
            INSERT INTO works
             (title, technologies, link, picture)
            VALUE 
              (:title, :technologies, :link, :picture)
        ';
        DB::set_values($sql, array(
            ":title" => $work['title'],
            ":technologies" => $work['technologies'],
            ":link" => $work['link'],
            ":picture" => $work['picture']
        ));
    }
}