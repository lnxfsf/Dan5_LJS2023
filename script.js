

const search = document.getElementById('search');
const list = document.getElementById('list');
const addItemForm = document.getElementById("addItemForm");

var dropdown=document.getElementsByClassName("dropdown")[0];
var p_elements=dropdown.getElementsByTagName("p");

let selectedElement = null;

// treba da ga pristupimo i van 'input' event listenera, za ovaj 'keydown'
var src = '';

document.addEventListener('keydown', (e) => {
    if (selectedElement) {
        selectedElement.classList.remove('selected');
    }

    const pCount = p_elements.length; 

    if (e.key === 'ArrowDown') {
        const nextIndex = selectedElement ? (Array.from(p_elements).indexOf(selectedElement) + 1) % pCount : 0;
        selectedElement = p_elements[nextIndex];
    } else if (e.key === 'ArrowUp') {
        const prevIndex = selectedElement ? (Array.from(p_elements).indexOf(selectedElement) - 1 + pCount) % pCount : pCount - 1;
        selectedElement = p_elements[prevIndex];
    } else if (e.key === 'Enter') {
        console.log('Enter key was pressed');
        let txz = selectedElement.textContent;
        search.value = txz;
        src = txz;
        
            // na false resetuje da prikaze sve... da resetuje sve prvo
                search_hide_elements(txz,false);
                
                search_hide_elements(txz,true);        
    }

    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
});


function search_hide_elements(txs, show) {

    let lista = document.getElementById("list");
    let list_elements = lista.getElementsByTagName("li");

    if (show) {

        for (let i = 0; i < list_elements.length; i++) {

            let string = list_elements[i].textContent;
            string = string.slice(0, string.length - 1);
            if (txs != string) {
                list_elements[i].style.display = "none";
            }
        }

    }else {

        // da prikaze elemente
        for (let i = 0; i < list_elements.length; i++) {

            if (true) {
                list_elements[i].style.display = "block";
            }
        }
        
    }
}


search.addEventListener('input', () => {

    let text_in_list = document.getElementsByClassName('delete');
    //let dropdown = document.getElementsByClassName('dropdown');

    dropdown.innerHTML = '';

    // tekst od <input> elementa
    src = search.value;

    for(let i=0;i<text_in_list.length;i++){

        // ovaj txt mora ostati u svoj scope unutar ovog loop-a. ovo je tekst od <li> elementa
        let txs=text_in_list[i].parentNode.textContent;

        txs=txs.slice(0,txs.length-1);

        if (txs.includes(src) ) {
                        
            const newItem = document.createElement("p");
            newItem.setAttribute("class","dropdown_element");
            newItem.textContent = txs;
            
            newItem.addEventListener('click',() =>{
                search.value=txs; 
                
            // na false resetuje da prikaze sve... da resetuje sve prvo
                search_hide_elements(txs,false);
                
                search_hide_elements(txs,true);

                // ovo 
                if (selectedElement) {
                    selectedElement.classList.remove('selected');
                }
                selectedElement.classList.add('selected');
                
            })
            

            dropdown.appendChild(newItem);
            dropdown.setAttribute("class","dropdown_show");
        } else if (txs === ''){

                search_hide_elements(txs,false);
            
        }
      
    }

})

search.addEventListener('blur',() => {


    if (search.value.trim() === '') {
        // Clear the input value
        //
        search.value = '';
        
    //search.dispatchEvent(new Event('input', { bubbles: true }));
        
    let listak = document.getElementById("list");
    let list_elementsk = listak.getElementsByTagName("li");

        
        for (let i = 0; i < list_elementsk.length; i++) {

            if (true) {
                list_elementsk[i].style.display = "block";
            }
        }
        

    // da sakrije dropdown kad je prazan...
    
    dropdown.setAttribute("class","dropdown");
    }
    
})

//za cuvanje u localstorage
document.getElementById("list").innerHTML=localStorage.getItem("list_data");


addItemForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const newItemText = itemText.value.trim();

        if (newItemText) {
            const newItem = document.createElement("li");
            
            newItem.innerHTML = `${newItemText} <button class="delete">X</button>`;

            list.appendChild(newItem);

            localStorage.setItem("list_data",document.getElementById("list").innerHTML);

            itemText.value = ""; // Clear the input field
        }
    });

list.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {

        const listItem = event.target.parentElement;

        list.removeChild(listItem);
        
        localStorage.setItem("list_data",document.getElementById("list").innerHTML);
    }
});