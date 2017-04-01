<?php

/**
 * escapeString
 * 
 * @param Object|Array $data
 * @return mix
 */
function escapeString(&$data) {
    if (is_object($data)) {
        foreach( $data as &$field ) {
            if ( is_string( $field ) )
                $field = stripslashes( $field );
            }
    }
    if (is_array($data)) {
         foreach( $data as &$quote ) {
            foreach( $quote as &$field ) {
                if ( is_string( $field ) )
                    $field = stripslashes( $field );
            }
        }
    }
    return $data;
}
