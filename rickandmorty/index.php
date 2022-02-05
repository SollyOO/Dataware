<?php
//$data = json_decode( file_get_contents('https://rickandmortyapi.com/api/character/?page=1'), true );
//echo $data.results[0].['image'];
//data.results[0].id;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="estilos.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick And Morty</title>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <div id="app" class="contain" >
        <!--<div class="personaje">
            <img class="imagen" src="" style="width:150px">
            <h4 id="nombre"></h4>
            <p id="especie"></p>
            <p id="estatus"></p>
        </div>-->
    </div>
    <footer>
        <div class="paginacion">
            <ul>
                <!--<li class="btn prev"><span><i class="fas fa-angle-left"></i> Prev</span></li>
                <li class="numb active"><span>1</span></li>
                <li class="numb"><span>2</span></li>
                <li class="dots"><span>...</span></li>
                <li class="numb"><span>4</span></li>
                <li class="numb"><span>5</span></li>
                <li class="dots"><span>...</span></li>
                <li class="numb"><span>7</span></li>
                <li class="btn next"><span>Next <i class="fas fa-angle-left"></i></span></li>-->
            </ul>
        </div>
    </footer>


    <div id="myModal" class="modalContainer">
        <div id="modalPersonaje" class="modal-content">
            <span class="close">×</span> <h2>Modal</h2>
            <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>
        </div>
    </div>

    <script src="index.js"></script>

</body>
</html>