
const search = document.getElementById('search');
const list = document.getElementById('list');
const addItemForm = document.getElementById("addItemForm");
    
const text_in_list = document.getElementsByClassName('delete');



//console.log(text_in_list[0].parentNode.textContent)

var txs = text_in_list[0].parentNode.textContent;

search.addEventListener('input', () => {

    var src = search.value;
    //console.log(search.value)
    // console.log(src);
    // console.log(txs);

    if ( txs.includes(src) ) {
        

        
        //console.log("hiss");
        


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


