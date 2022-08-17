document.querySelector("#orderform").addEventListener("submit", makeorder)

function makeorder() {
    event.preventDefault()

    if (orderform.pizza.checked) {
        var order = orderform.pizza.value
    } else if (orderform.coke.checked) {
        var order = orderform.coke.value
    } else if (orderform.burger.checked) {
        var order = orderform.burger.value
    } else if (orderform.chickenfry.checked) {
        var order = orderform.chickenfry.value
    }else if (orderform.hamburgers.checked) {
        var order = orderform.hamburgers.value
    }else if (orderform.mcChicken.checked) {
        var order = orderform.mcChicken.value
    }else if (orderform.snacks.checked) {
        var order = orderform.snacks.value
    }else if (orderform. mcNuggets.checked) {
        var order = orderform. mcNuggets.value
    }
   


    orderfood(order)
    document.querySelector("#orderform").reset()
}

async function orderfood(food) {
    var status = document.querySelector("#status").value
    var foodpromise = new Promise(function (reslove, reject) {



        if (status === "open" && food != undefined) {
            reslove(food)
        } else if (food === undefined && status === "open") {
            reject("select order")
        } else {
            reject("closed")
        }
    })

    try {
        var res = await foodpromise
        cooking(res)
    } catch (e) {
        if (e === "select order") {
            selectorder()
        } else if (e === "closed") {
            closed()
        }
    }

}
var timer;
function cooking(a) {
    clearTimeout(timer)
    document.querySelector("#display_order").innerHTML = ""

    var h2 = document.createElement("h2");
    h2.innerText = `Your order request ${a} is placed`
    var img = document.createElement("img");
    if (a == "burger") {
        img.src = "https://www.bing.com/th?id=OIP.pGxT5I5E9bEjsYbyDBTo8QHaEu&w=224&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    } else if (a === "coke") {
        img.src = "https://th.bing.com/th/id/OIP.L4RJEThKw-KCD7G8wxvnyQHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    } else if (a === "grill") {
        img.src = "https://tse4.mm.bing.net/th?id=OIP.hj7M8cGm_jon2-esNcDFNgHaE7&pid=Api&P=0&w=260&h=173"
    } else if (a === "pizza") {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdAaFieARJBSTyBdcg4jH_tCXE2xbYjxNNg&usqp=CAU"
    }else if(a=="hamburgers"){
        img.src="https://www.bing.com/th?id=ALSTUF4DBD5C1B72DA87EEB0A6ADB4322EB48FB797D25D0669BA3EC4745CFFA06A672&w=472&h=280&rs=2&o=6&oif=webp&dpr=1.25&pid=SANGAM";
    }else if(a=="mcChicken"){
        img.src="https://s.yimg.com/fz/api/res/1.2/bo50urRM9NZhVjNX1YrXpA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/698530b9-7e83-395a-8ada-e63dac40325e/t_500x300";
    }else if(a=="snacks"){
        img.src="https://thumbor.thedailymeal.com/eoJrsqmw6WFjuGSmSLuxd7m1vzU=/870x565/filters:focal(699x435:700x436):format(webp)/https://www.thedailymeal.com/sites/default/files/recipe/2019/snackwrap-istock.JPG";
    }else if(a=="mcNugget"){
        img.src="https://m0.her.ie/wp-content/uploads/2019/07/31110923/20SpicyNuggets_HR.jpg";
               }


    var times = Math.round(Math.random() * 10) + 2

    var orderno = Math.round(Math.random() * 1000000)

    var ordernum = document.createElement("p");
    ordernum.innerText = "Your order ID is " + orderno;
    ordernum.setAttribute("id","color")

    var timep = document.createElement("p");
    timep.innerText = `Please wait for ${times} seconds `
    timep.setAttribute("id","color")

    document.querySelector("#display_order").append(h2, ordernum, timep, img);
    var p = document.createElement("h1")
    p.setAttribute("id","color1")

    timer = setTimeout(function () {

        p.innerText = "Thank you for visiting McDonald's ";
        document.querySelector("#display_order").append(p)
    }, +(times * 1000))
}



function selectorder() {
    clearTimeout(timer)


    document.querySelector("#display_order").innerHTML = ""

    let h2 = document.createElement('h2');
    h2.innerText = "Please select your order first"

    document.querySelector("#display_order").append(h2)
}

function closed() {
    clearTimeout(timer)
    document.querySelector("#display_order").innerHTML = ""

    let img = document.createElement("img");
    img.src = "https://th.bing.com/th/id/OIP.kJMMwck57fRvAc0mWBE6egHaE7?w=230&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"

    document.querySelector("#display_order").append(img)
}

    