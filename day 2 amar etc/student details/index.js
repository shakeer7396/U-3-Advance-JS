document.querySelector("#form").addEventListener("submit",formSubmit)
studentsData=JSON.parse(localStorage.getItem("studentsData"))||[]
function formSubmit(event){
    event.preventDefault()
    name=document.querySelector("#name").value
    number=document.querySelector("#number").value;
    city=document.querySelector("#city").value;

    function studentsDetails(a,b,c){
        this.name=a;
        this.number=b;
        this.city=c;
    }
    var p=new studentsDetails(name,number,city)
    console.log(p);
    studentsData.push(p);
    console.log(studentsData)
    localStorage.setItem("studentsData",JSON.stringify(studentsData))
}
document.querySelector("#next").addEventListener("click",function(){
    window.location.href="index2.html"
})
