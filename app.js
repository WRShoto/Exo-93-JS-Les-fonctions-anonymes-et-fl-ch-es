let btnAlert = document.getElementById('alert')


btnAlert.addEventListener("click", ()=>{
    alert('Hello world')
})

let btnSomme = document.getElementById("somme")
btnSomme.addEventListener("click", () => {
    let createDiv = document.createElement("div");
    btnSomme.parentElement.append(createDiv);
    createDiv.innerText = 5 + 6;
    createDiv.innerHTML = "5 + 6";
})
