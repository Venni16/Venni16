var overlaybox=document.querySelector(".overlay")
var popupboxoverlay=document.querySelector(".popupbox")
var addingbtn=document.getElementById("add-popupbtn")


    addingbtn.addEventListener("click",function(){
        overlaybox.style.display="block"
        popupboxoverlay.style.display="block"
        }) 

    var cancelbtn=document.getElementById("cancel-popup")
    cancelbtn.addEventListener("click",function(event){
     event.preventDefault()
      overlaybox.style.display="none"
        popupboxoverlay.style.display="none"
    })


    var container = document.querySelector(".container")
    var addbook = document.getElementById("add-book")
    var booktitleinput=document.getElementById("book-title-input")
    var bookauthorinput=document.getElementById("book-author-input")
    var bookdescriptioninput=document.getElementById("book-description-input")

    addbook.addEventListener("click",function(event){
     event.preventDefault()
     var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
         <button onclick="deletebook(event)" class="book-container-button">delete</button>`
     container.append(div)
     popupboxoverlay.style.display="none"
     overlaybox.style.display="none"
    })

    function deletebook(event){
        event.target.parentElement.remove()
    }