//fetch async function
const getData=async(url) =>{

    try{
        let res=await fetch(url);

        let data=await res.json();

        return data;

    }catch(error){
        console.log("error:",error);
    }
};
//append part
//data ,parent (last below)
const append=(data,parent)=>{
    parent.innerHTML=null;

data.forEach(({title,image,price})=>{

    
    let div=document.createElement("div");

    let t=document.createElement("p")
        t.innerText=title;
    let img=document.createElement("img");
    img.src=image
    let p=document.createElement("p");
    p.innerText=price;

    div.append(img,t,p);
    parent.append(div);
});
};

export {getData,append};