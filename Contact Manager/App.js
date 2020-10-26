//console.log("JS is runing...");

ShowContact();

function AddBtn() {
    let Contact_Name = document.getElementById("Contact_Name");
    let Contact_Num = document.getElementById("Contact_Num");
    let Contact_Manager = localStorage.getItem("Name", "Contact")
    if (Contact_Manager == null) {
        Contact_Obj = []
    } else {
        Contact_Obj = JSON.parse(Contact_Manager);
    }

    var obj = {
        name: Contact_Name.value,
        contact: Contact_Num.value
    }
    Contact_Obj.push(obj);
    localStorage.setItem('Name', JSON.stringify(Contact_Obj));
    Contact_Name.value = "";
    Contact_Num.value = '';
    //console.log(Contact_Obj);
    ShowContact();
    //console.log(Contact_Name.value, Contact_Num.value);
}

function ShowContact() {
    let Contact_Manager = localStorage.getItem("Name", )
    if (Contact_Manager == null) {
        Contact_Obj = []
    } else {
        Contact_Obj = JSON.parse(Contact_Manager);
    }
    let html = '';
    Contact_Obj.forEach(function(element, index) {
        html += `<div class="contact_item">
        <i class="fa fa-user fa-3x"></i>
        <div class="contact_info">
  
            <h5 style = "font-weight : bold" >${element.name}</h5>
            <p>${element.contact}</p>
      
        </div>
        <i id ="${index}" onclick = "DeltBtn(this.id)" class="fa fa-times-circle fa-1x"></i>
    </div>`
    });
    let contact_footer = document.getElementById("contact_footer");
    if (Contact_Obj.leneght != 0) {
        contact_footer.innerHTML = html
    } else {
        contact_footer.innerHTML = `Nothing to show `;
    }
}

function DeltBtn(index) {

    let Contact_Manager = localStorage.getItem("Name", )
    if (Contact_Manager == null) {
        Contact_Obj = []
    } else {
        Contact_Obj = JSON.parse(Contact_Manager);
    }
    Contact_Obj.splice(index, 1);
    localStorage.setItem('Name', JSON.stringify(Contact_Obj));
    ShowContact();
}

let Search = document.getElementById("Search");
Search.addEventListener("input", function() {
    let inputVal = Search.value.toLowerCase();
    //  console.log(inputVal);
    let contact_footer = document.getElementsByClassName("contact_item");
    Array.from(contact_footer).forEach(function(element) {
        let Contact_Text = element.getElementsByTagName("h5")[0].innerText;
        if (Contact_Text.includes(inputVal)) {
            element.style.display = "flex";

        } else {
            element.style.display = "none";

        }
    });

})