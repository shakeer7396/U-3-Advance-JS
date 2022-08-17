var studentsData=JSON.parse(localStorage.getItem("studentsData"))
console.log(studentsData);

studentsData.map(function(elem,array,index){
    var row=document.createElement("tr")
    var col1=document.createElement("td")
    col1.innerText=elem.name
    var col2=document.createElement("td")
    col2.innerText=elem.number
    var col3=document.createElement("td")
    col3.innerText=elem.city
    console.log(col1.col2,col3);
    row.append(col1,col2,col3)
    document.querySelector("#tbody").append(row)
})