let form=document.getElementById("addForm");
let items=document.getElementById("items");
let filter=document.getElementById("filter")

form.addEventListener("submit",additems)
items.addEventListener("click",removeitem)
filter.addEventListener("keyup",search)

function additems(e){
    e.preventDefault();
    let itemval=document.getElementById("item1").value;
    let descval=document.getElementById("item2").value;

    let li=document.createElement("li")
    li.className="list-group-item"
    li.appendChild(document.createTextNode(itemval));
    li.appendChild(document.createTextNode(`-${descval}`));

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
function search(e){
    let text=e.target.value.toLowerCase();
    let liItem=items.getElementsByTagName("li");
    Array.from(liItem).forEach(function(item){
        var itemName1=item.firstChild.textContent;
        var itemName2=item.firstChild.nextSibling.textContent;
        if(itemName1.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }
        else{
            item.style.display="none"
        }
    });
}