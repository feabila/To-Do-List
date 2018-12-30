// Start the programming for the button action with keyup
document.querySelector('#newItem').addEventListener('keyup', addItem);

// Creating function for getting keyboard actions
function addItem(event){
    // Pulling item value from the text input
    let listElement= document.querySelector('#listItems');
    let item= document.querySelector('#newItem');
    if(item.value===null || item.value=== '' || item.value === undefined){
        return false;
    } else {
        if(event.keyCode !== 13){
            return false;
        } else {
            // If the user take KEYUP action - ENTER (keyCode 13)
            let itemElement= document.createElement('li');
            itemElement.setAttribute('onclick', 'deleteItem(event)');
            (listElement.appendChild(itemElement)).innerText= item.value;
            item.value= ""; // Return the value to empty
            return true;
        }
    }
}

// Creating delete function

function deleteItem(){
    const listItems= document.querySelectorAll('#listItems li'),
          listCompleted= document.querySelector('#listCompleted'),
          itemContent= event.target.textContent, // Pulling the value of LI element
          items= [];
    for(let i=0; i<listItems.length; i++){
        items.push(listItems[i].innerHTML); // Pushing values in the tab[]
    }
    if(listItems.length === 0){
        return false;
    } else {
        const itemIndex= items.indexOf(itemContent), // Getting the index position of the LI content
              itemDeleted= document.createElement('li'),
              removed= itemContent; // Get the content to the removed variable
        listItems.item(itemIndex).remove(); // Remove the LI according to the index position
        // Creating the completed task list
        itemDeleted.setAttribute('onclick', 'recoverItems(event)');
        itemDeleted.style.textDecoration= 'line-through'; 
        listCompleted.appendChild(itemDeleted).innerText= removed; // Constructing the list of deleted items
        return true;
    }
    // Another way on deleting, through a button click, generating a prompt pulling the position

    // let indexItem= parseInt(prompt('Put the position you want to delete item:'));
    // let items= document.querySelector('#listItem').childNodes;
    // if(items.length === 0){
    //     console.log('No elements!');
    // } else {
    //     items.item(indexItem-1).remove();
    // }
}
// Recovering items from the completed task list
function recoverItems(){
    const listRecover= document.querySelectorAll('#listCompleted li');
    if(listRecover.length === 0){
        return false;
    } else {
        const recoveryItem= document.createElement('li'),
              listItem= document.querySelector('#listItems'),
              items= [];
        for(let l=0; l<listRecover.length; l++){
            items.push(listRecover[l].innerHTML);
        }
        let itemIndex= items.indexOf(event.target.textContent); // Getting the index position of the LI content
        listRecover.item(itemIndex).remove(); // Removing again but this time from the completed list to the items list
        recoveryItem.setAttribute('onclick', 'deleteItem(event)');
        (listItem.appendChild(recoveryItem)).innerText= event.target.textContent; // Setting back the values to the items list
    }
}

//ResetAll function
function resetAll(){
    const list= document.querySelectorAll('#listItems li'),
          completed= document.querySelectorAll('#listCompleted li');// Getting all the LI elements of items
    for(let i=0; i<list.length; i++){
        list.item(i).remove(); 
    }
    for(let j=0;  j<completed.length; j++){
        completed.item(j).remove(); // Removing all them
    }
}
