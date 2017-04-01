<div class="section">
    <div class="title"><?php echo $title; ?></div>
    <div class="section-content">
        <?php foreach ($columns as $column) {
            switch($column['acf_fc_layout']) {
                case "column_1_size":
                    echo View::render('column_1', $column, false, false); 
                    break;
                case "column_2_size":
                    echo View::render('column_2', $column, false, false); 
                    break;
                case "column_3_size":
                    echo View::render('column_3', $column, false, false); 
                    break;
            }
        }
        ?>
    </div>
</div>