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
    data.forEach(({meals:a,strMealThumb,strCategory,strArea,strMeal} ) => {
        let div=document.createElement('div')

        let name=document.createElement('p')
        name.innerText="Item Name:-  "+strMeal

        let img=document.createElement('img')
        img.src=strMealThumb

        let p=document.createElement('p')
        p.innerText="Category:-    "+strCategory

        let p1=document.createElement('p')
        p1.innerText="Belongs:-   "+strArea
        
        

        div.append(img,name,p,p1)
        container.append(div)
    });
}

export {getData,appendData}