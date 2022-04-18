function getAndUpdate(){
    tit=document.getElementById("title").value;
    desc=document.getElementById("description").value;
    if (localStorage.getItem("itemsJson")==null){
        itemsJsonArray=[];
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))

    }
    else{
        itemArrayStr=localStorage.getItem("itemsJson");
        itemsJsonArray=JSON.parse(itemArrayStr);
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
    }
    update();
}
function update(){
    if (localStorage.getItem("itemsJson")==null){
        itemsJsonArray=[];
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))

    }
    else{
        itemArrayStr=localStorage.getItem("itemsJson");
        itemsJsonArray=JSON.parse(itemArrayStr);
    }
    //Show in table
    let tableBody=document.getElementById("tableBody");
    let str='';
    itemsJsonArray.forEach((element,index) =>{
        str +=`
        <tr>
        <th scope="row">${index +1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><i class="fa fa-trash-o"  onclick="deleted()" aria-hidden="true"></i>
        </td>
    </tr> `;
    });
    tableBody.innerHTML=str;
}

add=document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();

function deleted(itemIndex){
console.log("delete",itemIndex)
itemArrayStr=localStorage.getItem("itemsJson");
itemsJsonArray=JSON.parse(itemArrayStr);
//delete item index element from the array
itemsJsonArray.splice(itemIndex,1);
localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
update();
}

