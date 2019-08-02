//1. CONSTANTES
const listaPaises = document.getElementById("lista_paises")
const descripcionPais = document.getElementById("descripcion_pais")
const boton_pais = document.getElementById("boton_pais");

//2.FUNCIONES
const extraerTodosLosPaises = () => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        //De la Data necesito el nomnbre llamado "name" y la bandera "flag"
        listaPaises.innerHTML = `
    <div class="div-side-menu">
            <table class="side-menu">
                ${data.map((pais) => {
            return `
                        <tr class="countries">
                            <td>
                                <img class="small-flag" src="${pais.flag}"/>
                                <a href="#" class="menu-link" id="boton_pais">${pais.name}</a>
                            </td>
                        </tr>
                    `
        }).join(' ')}
            </table>
    </div>
            `
    })
}


/*
const extraerDetallePais = () => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        descripcion_pais.innerHTML = `
        ${data.map((pais) => {
            return `
        <h1 id="titulo_pais">${pais.name}</h1>
        <span id="capital">${pais.capital}</span>
        <span id="area">${pais.area}</span>
        <span id="borders">${pais.borders}</span>
        `
    }
)
*/

// 3.EVENTOS
extraerTodosLosPaises()
boton_pais.addEventListener("click", extraerDetallePais())