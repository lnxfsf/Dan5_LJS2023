
const search = document.getElementById('search');
const list = document.getElementById('list');
const addItemForm = document.getElementById("addItemForm");

var dropdown=document.getElementsByClassName("dropdown")[0];
var p_elements=dropdown.getElementsByTagName("p");

search.addEventListener('input', () => {

    let text_in_list = document.getElementsByClassName('delete');
    //let dropdown = document.getElementsByClassName('dropdown');

    dropdown.innerHTML = '';

    var src = search.value;

    for(let i=0;i<text_in_list.length;i++){

        let txs=text_in_list[i].parentNode.textContent;

        txs=txs.slice(0,txs.length-1);

        if (txs.includes(src) ) {
                        
            const newItem = document.createElement("p");
            newItem.setAttribute("class","dropdown_element");
            newItem.textContent = txs;
            
            newItem.addEventListener('click',() =>{
                search.value=txs; 
                
                let lista=document.getElementById("list");
                let list_elements=lista.getElementsByTagName("li");
                for(let i=0;i<list_elements.length;i++){

                    let string=list_elements[i].textContent;
                    string=string.slice(0,string.length-1);
                    if(txs!=string){
                        list_elements[i].style.display = "none";
                    }
                }

            })

            dropdown.appendChild(newItem);
            dropdown.setAttribute("style","display:block;");
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


