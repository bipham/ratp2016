<?php

class View {
    static function render($file, $data, $echo =true, $includeOne = true) {
        extract($data);
        ob_start();
        if ($includeOne) {
            require_once get_template_directory()."/src/views/".$file.".php";
        } else {
            include get_template_directory()."/src/views/".$file.".php";
        }
        $content = ob_get_contents();
        ob_end_clean();
        if ($echo) {
            echo $content;
        } else {
            return $content;
        }
    }
}