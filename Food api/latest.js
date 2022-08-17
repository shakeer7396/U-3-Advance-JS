const getData=async (url)=>{
    try{
        let res= await fetch(url)
        let data= await res.json()
        return data
    }
    catch(err){
        console.log("err",err)
    }
}

const appendData =(data,container)=>{
    container.innerHtml=""
    data.forEach(({meals:a,strMealThumb,idMeal,strMeal} ) => {
        let div=document.createElement('div')

        let name=document.createElement('p')
        name.innerText="Item Name:-  "+strMeal

        let img=document.createElement('img')
        img.src=strMealThumb

        let p=document.createElement('p')
        p.innerText="Item Id:-   "+idMeal

       
        div.append(img,name,p)
        container.append(div)
    });
}

export {getData,appendData}