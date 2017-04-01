<?php
/* Template Name: Child page */

get_header();
?>
    <div class="page-accueil">
        <div class="container">
            <?php
            echo show_section($post);
            echo show_block_nos_publication();
            ?>
        </div>
    </div>

<?php get_footer(); ?>