let form=document.getElementById("my-form");
let items=document.getElementById("itemsul");

form.addEventListener("submit",additems)
function additems(e){
    e.preventDefault();
    let nameval=document.getElementById("name").value;
    let phnoval=document.getElementById("phno").value;
    let emailval=document.getElementById("email").value;

    let li=document.createElement('li');
    li.className="item"
    //li.appendChild(document.createTextNode(nameval));
    li.appendChild(document.createTextNode(`${nameval}-${phnoval}-${emailval}`));
    items.appendChild(li)

    let userdetails={
        Name:nameval,PhoneNumber:phnoval,Email:emailval
    }
    localStorage.setItem(nameval,JSON.stringify(userdetails));
}
