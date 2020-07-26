var list=document.getElementById("list")


function addItem(){
var todoitem=document.getElementById("todo-item")
var li=document.createElement("li")
var litext=document.createTextNode(todoitem.value)
li.appendChild(litext)
todoitem.value=""

// delete button
var deletebtn=document.createElement('button')
var deletetext=document.createTextNode('DELETE')
deletebtn.setAttribute("id","jsbtn1")
deletebtn.setAttribute("onclick","deleteitem(this)")
deletebtn.appendChild(deletetext)

// edit button
var editbtn=document.createElement('button')
var edittext=document.createTextNode('EDIT')
editbtn.setAttribute("id","jsbtn2")
editbtn.setAttribute("onclick","edititem(this)")
editbtn.appendChild(edittext)


li.appendChild(deletebtn)
li.appendChild(editbtn)


list.appendChild(li)

}

function deleteitem(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML=""
}

function edititem(e){
    var newVal=prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=newVal
}