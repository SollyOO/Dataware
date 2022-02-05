<?php
$data = json_decode( file_get_contents('https://rickandmortyapi.com/api/character/?page=1'), true );
//echo $data.results[0].['image'];
//data.results[0].id;

$inicio = 1;
$fin = 20;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <script src="index.js" type="module"></script>

    <div class="container">
    <?php
        for ($i=$inicio; $i <= $fin; $i++) { 
            $data = json_decode( file_get_contents('https://rickandmortyapi.com/api/character/'.$i), true );
    ?>
        <div class="personaje">
            <img class="imagen" src="<?php echo $data['image']; ?>" alt="<?php echo $data['image']; ?>" style="width:150px">
            <h4><?php echo $data['name']; ?></h4>
            <p>Specie: <?php echo $data['species']; ?></p>
            <p>Status: <?php echo $data['status']; ?></p>
        </div>
    <?php
        }
    ?>

    </div>

</body>
</html>