const parrafos = document.querySelectorAll(".parrafo") 
const secciones = document.querySelectorAll(".seccion")
const papeleras = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
    //  console.log("Inicio de arrastre del párrafo : " +  parrafo.innerText)   - Control de arranque de arrastre
    parrafo.classList.add("dragging") //incorporar nueva clase con diferentes estilo al original
    event.dataTransfer.setData("id", parrafo.id)   // transferir información por los mismos eventos
    })
    parrafo.addEventListener("dragend", () => {
    // console.log("Final de arrastre del párrafo : " +  parrafo.innerText)    - Control de arranque de arrastre
    parrafo.classList.remove("dragging") //Eliminar la clase una vez suelto el parrafo

    })
})

secciones.forEach(seccion  => {
    seccion.addEventListener("dragover", event => {
    event.preventDefault() // Evitar el evento por defecto del dragover
    //    console.log("Drag Over") - Control del DragOver

    })
    seccion.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    // console.log("Parrafo Id: " + id_parrafo)    - Control del data-transfer
    const parrafo = document.getElementById(id_parrafo)   //obtener la infomación a través de un método
    seccion.appendChild(parrafo)  // En la sección lo coloca como elemento hijo
        })
})

papeleras.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papeleras.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
