let form=document.getElementById("my-form");
let items=document.getElementById("itemsul");


form.addEventListener("submit",additems)
items.addEventListener("click",removeitems)
items.addEventListener("click",edititems)
function additems(e){
    e.preventDefault();
    let nameval=document.getElementById("name").value;
    let phnoval=document.getElementById("phno").value;
    let emailval=document.getElementById("email").value;

    let li=document.createElement('li');
    li.className="item"
    //li.appendChild(document.createTextNode(nameval));
    li.appendChild(document.createTextNode(`${nameval}-${phnoval}-${emailval}`));
    let dbtn=document.createElement("button");
    dbtn.className="delbtn"
    dbtn.appendChild(document.createTextNode("Delete"))
    let ebtn=document.createElement("button");
    ebtn.className="editbtn"
    ebtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(dbtn)
    li.appendChild(ebtn)
    items.appendChild(li)

    var userdetails={
        Name:nameval,PhoneNumber:phnoval,Email:emailval
    }
    localStorage.setItem(nameval,JSON.stringify(userdetails));
}
function removeitems(e){
if(e.target.classList.contains("delbtn")){
    let rem=e.target.parentElement;
    items.removeChild(rem);
    let remv=document.getElementById("name").value;
    // console.log(remv)
    localStorage.removeItem(remv)
}
}
function edititems(e){
    if(e.target.classList.contains("editbtn")){
        let rem=e.target.parentElement;
        items.removeChild(rem);
        
        let remv=document.getElementById("name").value;
        // console.log(remv)
        let obj=localStorage.getItem(remv);
        
        let objele=JSON.parse(obj);
        localStorage.removeItem(remv)
    }
    }