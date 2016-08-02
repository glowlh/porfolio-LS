<?php

class Blog_model {

    public function get_articles() {
        $sql = '
            SELECT * FROM blog 
        ';
        $data = DB::get_select($sql);

        if($data['count'] > 0) {
            return $data['result'];
        }
    }

    public function save_article($article) {
        $sql = '
            INSERT INTO blog
             (title, date, content)
            VALUE 
              (:title, :date, :content)
        ';
        DB::set_values($sql, array(
            ":title" => $article['title'],
            ":date" => $article['date'],
            ":content" => $article['content']
        ));
    }
}