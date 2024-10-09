<?php 
    
    // # recupero i dati nel file dischi.json
    // % se sono scritti in un formato diverso da json trovo il modo di convertirli
    $fileContent = file_get_contents("db/dischi.json");
    
    // ! altrimenti li stampo in pagina avvertendo attraverso i response headers che si tratti di un json
    header("Content-Type: application/json");
    echo $fileContent;

?>