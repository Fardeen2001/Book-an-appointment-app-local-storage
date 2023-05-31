let form=document.getElementById("my-form");
let items=document.getElementById("itemsul");

form.addEventListener("submit",additems)
function additems(e){
    e.preventDefault();
    let fnameval=document.getElementById("Fname").value;
    let lnameval=document.getElementById("Lname").value;
    let phnoval=document.getElementById("phno").value;
    let emailval=document.getElementById("email").value;

    let li=document.createElement('li');
    li.className="item"
    //li.appendChild(document.createTextNode(nameval));
    li.appendChild(document.createTextNode(`${fnameval}:${lnameval}:${phnoval}:${emailval}`));
    items.appendChild(li)

    let userdetails={
        FirstName:fnameval,LastName:lnameval,PhoneNumber:phnoval,Email:emailval
    }
    localStorage.setItem("user detail",JSON.stringify(userdetails));
}
