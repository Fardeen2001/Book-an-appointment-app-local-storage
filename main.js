let form=document.getElementById("my-form");
let items=document.getElementById("itemsul");

form.addEventListener("submit",additems)
function additems(e){
    e.preventDefault();
    let nameval=document.getElementById("name").value;
    let emailval=document.getElementById("email").value;

    let li=document.createElement('li');
    li.className="item"
    //li.appendChild(document.createTextNode(nameval));
    li.appendChild(document.createTextNode(`${nameval}:${emailval}`));
    items.appendChild(li)
    localStorage.setItem("name",nameval);
    localStorage.setItem("email",emailval);
}
