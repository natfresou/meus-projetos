
//função de renderização

const valuesRegiter = (objectList) => {
   
   
    let sectionValuesRegister = document.querySelector(".valuesRegiter_containner")
    sectionValuesRegister.innerHTML =""

    let ul = document.createElement("ul")
    ul.id = "value_ul"
   

    for (let i = 0 ; i<objectList.length; i++) {

        let valueObject = objectList[i]

        let valueObjectText = document.createElement("p")
        valueObjectText.innerText = `R$ ${valueObject.value}`
        valueObjectText.id="valueObject_text"

        let valueTrash = document.createElement ("img")
        valueTrash.src = "./src/assets/trash.svg"
        valueTrash.classList.add("valueTrash_img")
        valueTrash.dataset.valueObjectId = valueObject.id
     

        let valueCategory = document.createElement("span")
        valueCategory.id="value_Category"
        if (valueObject.categoryID == 0){
            valueCategory.innerText = "Entrada"
        } else {
            valueCategory.innerText = "Saída"
        }

        let div_value = document.createElement("div")
        div_value.id = "value_div"
        div_value.appendChild(valueCategory)
        div_value.appendChild(valueTrash)

        let li = document.createElement("li")
        li.id = "value_li"
        li.appendChild(valueObjectText)
        li.appendChild(div_value)
        ul.appendChild(li)
    }
    sectionValuesRegister.appendChild(ul) 
    handleDeleteClient(objectList)
    sunValues(objectList)


}

// função de renderização do formulário

const handleRegisterForm = (array) => {
    const modal = document.querySelector(".modal_controller");
    const newImput = document.querySelector("input");
    const button = document.querySelector("#modal_submity--inserirValor");
    const openCategory= document.querySelector(".modal_valueType--entrada");
    const existCategory= document.querySelector(".modal_valueType--saida")
    
    let newValue = {};
    let count = 0;
    let countOpen = 0;
    let countExist = 0;
  
    openCategory.addEventListener("click", (event) => {
        countOpen++
        event.preventDefault();
        if (countOpen == 1) {
            newValue.categoryID = 0;
            openCategory.style.backgroundColor = "blue"
            openCategory.style.color = "white"   
        } else {
            countOpen = 0;
            newValue.categoryID = "";
            openCategory.style.backgroundColor = "white"
            openCategory.style.color = "black"
        }
       
    })
    
    existCategory.addEventListener("click", (event) => {
        countExist++
        event.preventDefault();
        if (countExist == 1) {
            newValue.categoryID = 1;
            existCategory.style.backgroundColor = "blue"
            existCategory.style.color = "white"   
        } else {
            countExist = 0;
            newValue.categoryID = "";
            existCategory.style.backgroundColor = "white"
            existCategory.style.color = "black"
        }
       
    })
  
    button.addEventListener("click", (event) => {

        event.preventDefault();

        newValue.id = array.length + 1;

        if (newImput.value === "") {
          count++;
        }

        if (count !== 0) {
            count = 0;
            return alert("por favor preencha todos os campos do formulário");
        }

        if (countOpen == 0 && countExist == 0) {
            return alert("por favor preencha todos os campos do formulário");
        }

        if (countOpen == 1 && countExist == 1) {
            return alert("por favor escolha apenas um tipo de valor");
        }
        newValue[newImput.name] = Number(newImput.value)

        array.push(newValue);
        newValue = {};
        valuesRegiter(array.reverse());
        modal.close();
    });
    
  }

//função de apagar valor da lista

const handleDeleteClient = (array) => {
    const wastes = document.querySelectorAll('.valueTrash_img')
    wastes.forEach(waste => {
      waste.addEventListener('click', (event) => {

        const datasetWasteId = event.target.dataset.valueObjectId
        const findValueIndex = array.findIndex(valueObject => valueObject.id === Number(datasetWasteId))
        const removedItem = array.splice(findValueIndex,1)
  
        valuesRegiter(array)
       
      })
    })
  }

  const sunValues = (array) => {

    let emptyMensage = document.querySelector(".valuesRegiter_emptyValue")
    const values = document.querySelectorAll("#valueObject_text")// O values é uma node List
  
    const showSun =document.querySelector(".sumOfValues_containner--value")

    // Jeito 01 , att: Dessa forma soma tudo e não está classificando por entrada ou saida.

    //let cont = 0
    // values.forEach(value => {
    // let newValue =value.innerText // O value é um elemento da node list
    // let newValueNumber = Number(newValue.slice(3))  //usar splice para recortar o newValueUsar, Number para tranformar em numero
    //  console.log(newValue)
    //  console.log(newValueNumber)
    // cont = cont + newValueNumber
    
    // })

    // Jeito 02

    // const totalSun = array.reduce((acc,act)=>{
    //     if (act.categoryID==0) {
    //         return acc + act.value
    //     } else {
    //         return acc - act.value
    //     }

    // },0) //acc=acumulador e act=elementos

    //Jeito 03
    
    const totalSun = array.reduce((acc,act)=> act.categoryID ==0? acc+ act.value : acc-act.value,0) //acc=acumulador e act=elementos

    showSun.innerText = totalSun

    if (showSun.innerText ==0){
        emptyMensage.style.display = "block"
    } else {
        emptyMensage.style.display = "none"
    }
    
    return showSun
  }

  //Função de filtro

const typeValuefilter = (array) => {

    const allValueButton = document.querySelector("#financialSummary_containner--bottonTodos")   
    const entranceValueButton = document.querySelector("#financialSummary_containner--bottonEntradas")
    //console.log(entranceValueButton);
    const existValueButton = document.querySelector("#financialSummary_containner--bottonSaidas")

    entranceValueButton.addEventListener('click', (event) => {

        let entranceList = array.filter(valueObject => valueObject.categoryID ==0);
    
        valuesRegiter(entranceList)
  
    })

    existValueButton.addEventListener('click', (event) => {

        let existList = array.filter(valueObject => valueObject.categoryID ==1);
        //console.log(existList);
        valuesRegiter(existList)
      
    })

    allValueButton.addEventListener('click', (event) => {

        valuesRegiter(array)
      
    })
} 

valuesRegiter(insertedValues)
handleRegisterForm(insertedValues) 
typeValuefilter(insertedValues)



