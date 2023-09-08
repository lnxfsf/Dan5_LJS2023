
const search = document.getElementById('search');
const list = document.getElementById('list');
const addItemForm = document.getElementById("addItemForm");
    
const text_in_list = document.getElementsByClassName('delete');


const dropdown = document.getElementsByClassName('dropdown');


search.addEventListener('input', () => {

    var src = search.value;

    for(let i=0;i<text_in_list.length;i++){

        let txs=text_in_list[i].parentNode.textContent;

        txs=txs.slice(0,txs.length-2);
        
        if (txs.includes(src) ) {
            console.log(txs);
            
            

            dropdown[0].innerHTML = '';
            
            const newItem = document.createElement("p");
            newItem.textContent = txs;

            dropdown[0].appendChild(newItem);
            dropdown[0].setAttribute("style","display:block;");

            
        }
        

        
    }

})




addItemForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const newItemText = itemText.value.trim();

        if (newItemText) {
            

            const newItem = document.createElement("li");
            
            
            newItem.innerHTML = `${newItemText} <button class="delete">X</button>`;

            list.appendChild(newItem);

            itemText.value = ""; // Clear the input field
        }
    });

list.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {

        const listItem = event.target.parentElement;

        list.removeChild(listItem);
    }
});


