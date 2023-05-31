let form=document.getElementById("addForm");
let items=document.getElementById("items");

form.addEventListener("submit",additems)
items.addEventListener("click",removeitem)

function additems(e){
    e.preventDefault();
    let submitval=document.getElementById("item").value;
    let li=document.createElement("li")
    li.className="list-group-item"
    li.appendChild(document.createTextNode(submitval));

    let delbtn=document.createElement('button');
    delbtn.className="btn btn-danger btn-sm float-sm-end delete ms-2";
    delbtn.appendChild(document.createTextNode("X"));

    let editbtn=document.createElement('button');
    editbtn.className="btn btn-warning edit btn-sm float-sm-end"
    editbtn.appendChild(document.createTextNode("Edit"));
     
    li.appendChild(delbtn);
    li.appendChild(editbtn)

    items.appendChild(li);
}
function removeitem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let remli=e.target.parentElement;
            items.removeChild(remli)
        }
    }
}