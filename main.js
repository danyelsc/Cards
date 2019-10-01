const pessoas = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    }
]


var cards = ""
let lista = pessoas




// Tipo de loop MAP

const listNew = lista.map(pessoa =>{
    return {
        ...pessoa,
        full_name: pessoa.first_name + " " + pessoa.last_name
    }
})

// Atividade com filtro

const listFilter = lista.filter(pessoa =>{
    let test = false
    if(pessoa.id > 9){
        test = true
    }

    return test
})

console.log(listNew, listFilter)

const dad = document.querySelector('#dad');

function montarLista(filtro){
    let text = "";

    lista.forEach(pessoa => {
        const verificaFiltro =!filtro || pessoa.first_name.toUpperCase().includes(filtro.toUpperCase())
        console.log("chegou!!!",verificaFiltro,  filtro)
        
        text += verificaFiltro ? `
        <div class="cardd m-2 p-4">
            <img class="rounded-circle" src="${pessoa.avatar}" alt="">
            <div class="listOne mt-2">
                <p class="">${pessoa.first_name}</p>
                <p class="pl-1">${pessoa.last_name}</p>
            </div>
            <p>${pessoa.email}</p>
        </div>
        `: " "
        dad.innerHTML = text
    });

}

montarLista()





