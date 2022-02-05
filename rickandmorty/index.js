
let pag = 1;

function llamarPagina(pag){

    //$("#app").load(location.href+" #app>*","");

    const xhr = new XMLHttpRequest();

    var URL_ = "https://rickandmortyapi.com/api/character/?page=";

    var pagina = URL_+pag.toString();

    function onRequestHandler(){
        if(this.readyState == 4 && this.status == 200){

            const data = JSON.parse(this.response);

            console.log(data.results.length);

            //const HTMLResponse = document.querySelector("#name");

            //console.log(data.results[0].image);

            document.querySelector("#app").innerHTML="";

            for(let i = 0; i<21; i++){

                document.querySelector("#app").innerHTML+=`
                <div class="personaje" >
                    <img id="character" class="imagen" src="${data.results[i].image}" style="width:150px" onclick="mostrarPersonaje(${data.results[i].id})">
                    <h4 id="nombre">${data.results[i].name}</h4>
                    <p id="especie">Specie: ${data.results[i].species}</p>
                    <p id="estatus">Status: ${data.results[i].status}</p>
                </div>
                `;

            }

        }
    }

    xhr.addEventListener("load", onRequestHandler);
    xhr.open('GET', pagina);
    xhr.send();
}
//

//BOTONES
const ulTag = document.querySelector("ul");

let totalPages = 42;

function element(totalPages, page){
    llamarPagina(page);

    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if(page > 1){
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
    }

    if(page > 2){
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`
        if(page > 3){
            liTag += `<li class="dots"><span>...</span></li>`
        }
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if(pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            activeLi = "active";
        }else{
            activeLi = "";
        }

        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`
    }

    if(page < totalPages - 1){
        if(page < totalPages - 2){
            liTag += `<li class="dots"><span>...</span></li>`
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
    }

    if(page < totalPages){
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-left"></i></span></li>`
    }
    ulTag.innerHTML = liTag;
}

element(totalPages, 1);

//RESALTAR PERSONAJE

function mostrarPersonaje(id){
    //window.alert(id);

    const xhr2 = new XMLHttpRequest();

    var URL_2 = "https://rickandmortyapi.com/api/character/";

    var pagina2 = URL_2+id.toString();

    function mostrarUnPersonaje(){
        if(this.readyState == 4 && this.status == 200){

            const data2 = JSON.parse(this.response);

            console.log(data2.length);

            //const HTMLResponse = document.querySelector("#name");

            //console.log(data.results[0].image);

            document.querySelector("#modalPersonaje").innerHTML="";

            document.querySelector("#modalPersonaje").innerHTML+=`
            <div class="personaje" >
                <img id="character" class="imagen" src="${data2.image}" style="width:150px">
                <h4 id="nombre">${data2.name}</h4>
                <p id="especie">Specie: ${data2.species}</p>
                <p id="gender">Gender: ${data2.gender}</p>
                <p id="status">Status: ${data2.status}</p>
                <p id="origin">Origin: ${data2.origin.name}</p>
            </div>
            `;

        }
    }

    xhr2.addEventListener("load", mostrarUnPersonaje);
    xhr2.open('GET', pagina2);
    xhr2.send();

            var modal = document.getElementById("myModal");
            var btn = document.getElementById("app");
            var span = document.getElementsByClassName("close")[0];
            var body = document.getElementsByTagName("body")[0];

            btn.onclick = function() {
                modal.style.display = "block";

                body.style.position = "static";
                body.style.height = "100%";
                body.style.overflow = "hidden";
            }

            span.onclick = function() {
                modal.style.display = "none";

                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";

                    body.style.position = "inherit";
                    body.style.height = "auto";
                    body.style.overflow = "visible";
                }
            }
}