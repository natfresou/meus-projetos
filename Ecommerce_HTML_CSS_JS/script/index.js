
let ul = document.createElement("ul")
ul.id = "cardsList"
let totalProdutosCarrinho = 0
let  somaFinalProdutos =[]
let totalPriceCartBuy = document.querySelector("#totalPriceCartBuy")

// Início da lógica cards vitrine

function productsCards (listProducts) {
    for (let i = 0 ; i<listProducts.length; i++) {
        let produto = listProducts[i]
        let div1Card = document.createElement("div")
        div1Card.id = "div1Card"
        let div2Card = document.createElement("div")
        div2Card.id = "div2Card"
        let li = document.createElement("li")
        li.id = "cards"

        let imgProduct = document.createElement ("img")
        imgProduct.src = produto.img
        div1Card.appendChild(imgProduct)
        li.appendChild(div1Card)

        let tag = document.createElement ('h4')
        tag.innerText = produto.tag[0]
        tag.id = "productsTips"
        div2Card.appendChild(tag)

        let nameProduct = document.createElement("h3")
        nameProduct.innerText = produto.nameItem
        nameProduct.id = "prodName"
        div2Card.appendChild(nameProduct)

        let description = document.createElement("p")
        description.innerText = produto.description
        description.id = "descriptionText"
        div2Card.appendChild(description)

        let price = document.createElement("span")
        price.innerText = `R$ ${produto.value.toFixed(2)}`
        price.id = "priceText"
        div2Card.appendChild(price)

        let toBuy = document.createElement("button")
        toBuy.innerText = produto.addCart
        toBuy.classList.add("buttonBuy")
        toBuy.id = `prod_${listProducts[i].id}`
        div2Card.appendChild(toBuy)

        toBuy.addEventListener("click", function(e){

            totalProdutosCarrinho ++
            document.querySelector("#QuantCartBuy").innerHTML = totalProdutosCarrinho

            let idElemento = e.target.id; //A propriedade target mostra as propriedades dos elementos e por isso conseguimos ter acesso ao
            let id = idElemento.substring(5);
            let idNumber = parseInt(id)

            let product= lookingProduct(idNumber)
 
            let elementCartBuy = productCartBuy(product)

            let ulCartBuy = document.querySelector(".cart-list")
            ulCartBuy.appendChild(elementCartBuy)
           
            somaFinalProdutos.push(product)

            somaCarBuy(somaFinalProdutos)  //Função para atualizar carrinho
            
            if (ulCartBuy.hasChildNodes()) { //hasChildNodes serve pra verificar se tem filhos
                let divEmpty = document.querySelector(".cart-empty")   
                divEmpty.classList.add("hide")
                
            } else {
                divEmpty.classList.remove("hide")// hide significa desaparecer. Essa classe no CSS está display none e isso faz sumir o conteudo.
              
            }

            if (ulCartBuy.hasChildNodes()) { 
                let divDetails = document.getElementById("details")
                divDetails.classList.remove("hide")
                divDetails.classList.add("cart-details")

            } else {
                divDetails.classList.remove("cart-details")
                divDetails.classList.add("hide")// hide significa desaparecer. Essa classe no CSS está display none e isso faz sumir o conteudo. 

            }
        })

        li.appendChild(div2Card)
      
        ul.appendChild(li)

        let sectionProducts = document.querySelector(".main-cards")
        sectionProducts.appendChild(ul)   
            
     }
}

productsCards(data)

//Início da lógica menu cabeçalho

function selectProducts (lista){

    let liNav = document.createElement("li")
    liNav.classList.add("button_nav")
    let ulNav = document.querySelector(".header-menu")

    let nav1 = document.createElement("button")
    nav1.innerText = "Todos"
    nav1.id= "id_todos"
    nav1.classList.add("class_button_nav")
    liNav.appendChild(nav1)

    let nav2 = document.createElement("button")
    nav2.innerText = "Acessórios"
    nav2.id= "id_acessorios"
    nav2.classList.add("class_button_nav")
    liNav.appendChild(nav2)

    let nav3 = document.createElement("button")
    nav3.innerText = "Calçados"
    nav3.id= "id_calcados"
    nav3.classList.add("class_button_nav")
    liNav.appendChild(nav3)

    let nav4 = document.createElement("button")
    nav4.innerText = "Camisetas"
    nav4.id= "id_camisetas"
    nav4.classList.add("class_button_nav")
    liNav.appendChild(nav4)

    ulNav.appendChild(liNav)

    let buttonTodos = document.querySelector("#id_todos")
    let buttonAcessorios = document.querySelector("#id_acessorios")
    let buttonCalcados = document.querySelector("#id_calcados")
    let buttonCamisetas = document.querySelector("#id_camisetas") 
    let arreyCamisetas = []
    let arreyAcessorio = []
    let arreyCalcado = []

    buttonTodos.addEventListener("click", function(e) {
        ul.innerHTML=""              
        productsCards(data) 
    
    })
    
    let cont = 0

    buttonAcessorios.addEventListener("click", function click (e) {  
    cont ++
        for(let i=0; i<lista.length; i++) {
            let objectlista=lista[i]
            let taglista=objectlista.tag[0]
            console.log(taglista)
                if(taglista == "Acessórios" && cont<2) {
                   
                    arreyAcessorio.push(lista[i])
                }
        }
    
    ul.innerHTML=""
    productsCards(arreyAcessorio) 

    })
 
    let cont1 = 0
    
    buttonCalcados.addEventListener("click", function(e) {
        cont1 ++
        for(let i=0; i<lista.length; i++) {
            let objectlista=lista[i]
            let taglista =objectlista.tag[0]
                if(taglista == "Calçados" && cont1<2) {
                    arreyCalcado.push(lista[i])
                }
        } 
    ul.innerHTML=""
    productsCards(arreyCalcado)     
    })

    let cont2 = 0
    
    buttonCamisetas.addEventListener("click", function(e) {
        cont2 ++
        for(let i=0; i<lista.length; i++) {
            let objectlista=lista[i]
            let taglista =objectlista.tag[0]
                if(taglista == "Camisetas" && cont2<2) {
                    arreyCamisetas.push(lista[i])
                } 
        }
    ul.innerHTML=""
    productsCards(arreyCamisetas)       
    })
}

selectProducts (data)

// Função para localizar produto pelo id

function lookingProduct (id) {
    for(let i=0; i<data.length; i++)
        if (data[i].id == id) {
        return data[i]
    }
}

//início lógica cards carrinho

function productCartBuy (listCartBuy) {

    let div1 = document.createElement("div")
    div1.id = "div_cartBuy"
    let div2 = document.createElement("div")
    div2.id = "div2_cartBuy"
    let div3 = document.createElement("div")
    div3.id = "div3_cartBuy"
    let li = document.createElement("li")
    li.classList.add("cartBuy_li")

    let imgCartBuy = document.createElement("img")
    imgCartBuy.src = listCartBuy.img
    imgCartBuy.id = "img_cartBuy"

    let nomeCartBuy = document.createElement("h4")
    nomeCartBuy.innerText = listCartBuy.nameItem
    nomeCartBuy.id = "name_cartBuy"

    let priceCartBuy = document.createElement("span")
    priceCartBuy.innerText = `R$ ${listCartBuy.value.toFixed(2)}`
    priceCartBuy.id = "value_cartBuy"

    let buttonCartBuy = document.createElement("button")
    buttonCartBuy.innerText = "Remover produto"
    buttonCartBuy.id = `button_cartBuy${listCartBuy.id}`
    buttonCartBuy.classList.add("class_button_cartBuy")

    div1.appendChild(imgCartBuy)
    div2.appendChild(nomeCartBuy)
    div2.appendChild(priceCartBuy)
    div2.appendChild(buttonCartBuy)
    li.appendChild(div1)
    li.appendChild(div2)

    buttonCartBuy.addEventListener("click", function(e){ 

        let idElemento = e.target.id; //A propriedade target mostra as propriedades dos elementos e por isso conseguimos ter acesso ao
        let id = idElemento.substring(14);
        let idNumber = parseInt(id)
        let index=  somaFinalProdutos.findIndex((produto) => produto.id === idNumber)//FindIndex procura o primeiro produto com o Id
        somaFinalProdutos.splice(index,1)
        let pathList = e.composedPath()//composedPath serve para consultar a arvore do evento
        pathList[2].remove()
      
        totalProdutosCarrinho --
        document.querySelector("#QuantCartBuy").innerHTML = totalProdutosCarrinho  
       
        somaCarBuy(somaFinalProdutos)

        if (document.querySelector("#QuantCartBuy").innerHTML == 0) { //hasChildNodes serve pra verificar se tem filhos
            let divEmpty = document.querySelector(".cart-empty")
            let divDetails = document.getElementById("details")
            divEmpty.classList.remove("hide")
            divDetails.classList.add("hide")
            divDetails.classList.remove("cart-details")    
        } else {
            divEmpty.classList.add("hide")
            divDetails.classList.add("cart-details")
            divDetails.classList.remove("hide")// hide significa desaparecer. Essa classe no CSS está display none e isso faz sumir o conteudo 
        }

    })

    return li
}

// Função para somar valores dos produtos no carrinho

function somaCarBuy (listValue) {
    
    let value = 0
   
    for (let i = 0; i<listValue.length; i++) {
        let valueCartBuy = listValue[i].value
        value=value + valueCartBuy
    }

    totalPriceCartBuy.innerText  = `R$ ${value.toFixed(0)},00`
}


// Inicio lógica filtro de busca

let inputPesquisar = document.querySelector(".search-input")
let botaoPesquisar = document.querySelector(".search-button")


botaoPesquisar.addEventListener("click", function(){ 
            let textInput = inputPesquisar.value.toLowerCase() // A tag Input não tem conteudo de texto ( Ela é uma tag que fecha nela mesma), por isso deve ser usado o value para acessar o conteudo.
           
            const filterList = data.filter(function (product) { // O filter é um método de filtragem que aplica um for e se o resultado for true ele joga o elemento dentro de um array.

                if (product.nameItem.toLowerCase().includes(textInput)) {
                return true
                } else {
                return false
                }
                    
                })
                console.log(filterList)
                
                if (textInput !=""){
                    ul.innerHTML=""
                    productsCards(filterList)
                }
                 
 })

   