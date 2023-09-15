
function postCards (objectList) {
   
    let sectionPosts = document.querySelector(".Posts")
    let ul = document.createElement("ul")
    ul.id = "post_ul"

    for (let i = 0 ; i<objectList.length; i++) {

        let post = objectList[i]

        let title = document.createElement("h2")
        title.innerText = post.title
        title.id="postTitle"

        let text = document.createElement("p")
        text.innerText = post.text
        text.id="postText"

        let imgPost = document.createElement ("img")
        imgPost.src = post.img
        imgPost.id = "postImg"

        let user = document.createElement("h5")
        user.innerText = post.user
        user.id="postUser"

        let stack = document.createElement("p")
        stack.innerText = post.stack
        stack.id="postStack"

        let likes = document.createElement("p")
        likes.innerText = post.likes
        likes.id="postLikes"

        let buttonPost = document.createElement("button")
        buttonPost.innerText= "Abrir Post"
        buttonPost.dataset.postId=post.id
        buttonPost.classList.add("buttonPostModal")

        let likesHead = document.createElement ("img")
        likesHead.src= "./src/assets/img/headVazio.svg"
        likesHead.id="post_likesHead"
        
        let div1 = document.createElement("div")
        div1.id = "postDiv1"
        div1.appendChild(user)
        div1.appendChild(stack)

        let divHead = document.createElement("div")
        divHead.id ="post_divHead"
        divHead.appendChild(imgPost)
        divHead.appendChild(div1)

        let divSection = document.createElement("div")
        divSection.id = "post_divSection"
        divSection.appendChild(title)
        divSection.appendChild(text)

        let divFooter = document.createElement("div")
        divFooter.id="post_divFooter"
        divFooter.appendChild(buttonPost)
        divFooter.appendChild(likesHead)
        divFooter.appendChild(likes)

        let li = document.createElement("li")
        li.id = "post_li"
        li.appendChild(divHead)
        li.appendChild(divSection)
        li.appendChild(divFooter)

        
        ul.appendChild(li)

    
        sectionPosts.appendChild(ul)
    }
}

postCards(posts)


function postCardsModal (post) {
   
        let title = document.createElement("h2")
        title.innerText = post.title
        title.id="postTitle"

        let text = document.createElement("p")
        text.innerText = post.text
        text.id="postTextModal"

        let imgPost = document.createElement ("img")
        imgPost.src = post.img
        imgPost.id = "postImg"

        let user = document.createElement("h5")
        user.innerText = post.user
        user.id="postUser"

        let stack = document.createElement("p")
        stack.innerText = post.stack
        stack.id="postStack"

        let close = document.createElement("p")
        close.innerText = "X"
        close.id="closeModal"


        let likesHead = document.createElement ("img")
        likesHead.src= "./src/assets/img/Vector.svg"
        likesHead.id="post_likesHead"
        
        let div1 = document.createElement("div")
        div1.id = "postDiv1"
        div1.appendChild(user)
        div1.appendChild(stack)
        div1.appendChild(close)

        let divHead = document.createElement("div")
        divHead.id ="post_divHead"
        divHead.appendChild(imgPost)
        divHead.appendChild(div1)

        let divSection = document.createElement("div")
        divSection.id = "post_divSection"
        divSection.appendChild(title)
        divSection.appendChild(text)


        let li = document.createElement("li")
        li.id = "post_li"
        li.appendChild(divHead)
        li.appendChild(divSection)
  

        return li
}


function postModal(array){

    const modalController = document.querySelector(".container_controler")
    let buttons = document.querySelectorAll(".buttonPostModal")

    for ( let i=0; i<buttons.length; i++) {
        let button = buttons[i]

        button.addEventListener("click", function (e) {
            modalController.innerHTML=""   
            const postModal = findPost(array, e.target.dataset.postId)
            const  modalCard = postCardsModal(postModal) 
            modalController.appendChild(modalCard)
            modalController.showModal()
            closeModal()
        })

    }
}

postModal(posts)

function findPost(array, id){
    let post = {}
    
    for(let i=0 ; i<array.length; i++){
        if(array[i].id === Number(id)){
            post = array[i]
        }
    }
    return post
}

function closeModal(){
    const closeModal= document.querySelector("#closeModal")
    console.log(closeModal)
    const modalController= document.querySelector(".container_controler")

    closeModal.addEventListener('click', function() {
        modalController.close()
    })

}

function sugestCards (objectList) {
   
    let sugestFriend_div =document.querySelector(".sugestFriend_div")

    for (let i = 0 ; i<objectList.length; i++) {
    
        let sugest = objectList[i]
    
        let imgSugest = document.createElement ("img")
        imgSugest.src = sugest.img
        imgSugest.id = "sugestImg"

        let user = document.createElement("h5")
        user.innerText = sugest.user
        user.id="sugestUser"

        let stack = document.createElement("p")
        stack.innerText = sugest.stack
        stack.id="sugestStack"

        let button = document.createElement("button")
        button.innerText = "Seguir"
        button.id="sugestbutton"

        let div0 = document.createElement("div")
        div0.id = "sugest_div0"
        div0.appendChild(user)
        div0.appendChild(stack)

        let div1 = document.createElement("div")
        div1.id = "sugest_div1"
        div1.appendChild(imgSugest)
        div1.appendChild(button)
        div1.appendChild(div0)
        

        let sugestFriend_div =document.querySelector(".sugestFriend_div")
        sugestFriend_div.appendChild(div1)

    }
}

sugestCards (suggestUsers)



let imgNewPost= document.createElement("img")
imgNewPost.src = users[0].img
imgNewPost.id = "newPost_Img"

let userNewPost = document.createElement("h5")
userNewPost.innerText =users[0].user
userNewPost.id="NewPost_User"

let stackNewPost = document.createElement("p")
stackNewPost.innerText =users[0].stack
stackNewPost.id="NewPost_stack"

let divNewPost = document.createElement("div")
divNewPost.id= "NewPost_Div"
divNewPost.appendChild(userNewPost)
divNewPost.appendChild(stackNewPost)

let headerDiv = document.querySelector("#headerDiv")
headerDiv1.appendChild(imgNewPost)
headerDiv1.appendChild(divNewPost)


function follow(){
    
    const bottonsFollow = document.querySelectorAll("#sugestbutton")
    console.log( bottonsFollow)

    for ( let i=0; i<bottonsFollow.length; i++) {
        let bottonFollow = bottonsFollow[i]

        bottonFollow.addEventListener("click", function (e) {
            if( bottonFollow.innerText == "Seguir"){
                bottonFollow.innerText = "Seguindo"
                bottonFollow.style.backgroundColor = "blue"
                bottonFollow.style.color = "white"
            } else {
                bottonFollow.innerText = "Seguir" 
                bottonFollow.style.backgroundColor = "white"
                bottonFollow.style.color = "black"
                
            }
          
        })

    }
}

follow()


function likes(){
    
    const headsLikes= document.querySelectorAll("#post_likesHead")

    for ( let i=0; i<headsLikes.length; i++) {
        let like = headsLikes[i]
        console.log(like)

        like.addEventListener("click", function (e) {
            if( like.src = "./src/assets/img/headVazio.svg"){
                like.src = "./src/assets/img/Vector.svg"
               
            } else {
                like.src = "./src/assets/img/headVazio.svg"
                
            }
          
        })

    }
}

likes()