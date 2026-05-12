let btnBuscar = document.getElementById("btn-submit")
let ano = document.getElementById("ano")
let tbody = document.getElementById("feriado-form")

btnBuscar.addEventListener("click", () => {
    tbody.innerHTML = ""
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano.value}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                tbody.innerHTML += `<tr>
                    <td>${element.date}</td>
                    <td>${element.name}</td>
                    <td>${element.type}</td>
                </tr>`
            })
        })
})
