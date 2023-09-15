/* Desenvolva sua lógica aqui */
function handeleModal(){
    const headerModal= document.querySelector("header>button")
    const modalController= document.querySelector(".modal_controller")

    headerModal.addEventListener('click', function() {
        modalController.showModal()
        closeModal()
    })
}


function closeModal(){
    const closeModal1= document.querySelector("#modal_close")
    const closeModal2= document.querySelector("#modal_submity--cancelar")
    const modalController= document.querySelector(".modal_controller")
    
    closeModal1.addEventListener('click', function() {
        modalController.close()
    })
    closeModal2.addEventListener('click', function() {
        modalController.close()
    })
   
}

handeleModal()