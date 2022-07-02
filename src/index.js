import hello from './hello world';
hello()


import "./style.css";

function header() {
    const element = document.createElement("header");
    element.innerHTML = "House Steak";
    element.classList.add('info')
    document.body.appendChild(element);
    
}

document.body.appendChild(header());



import cover from 'assets/slide2.jpg'
import photo1 from 'assets/drink1.jpg'
import photo2 from 'assets/drink2.jpg'
import photo3 from 'assets/drink3.jpg'
function component() {
   
    let element = document.createElement("div");
    element.classList.add("container-drinks");
    const img = document.createElement("img");
    img.src=cover
    element.classList.add('myDiv')
    element.appendChild(img);
    
    // card1

    let card= document.createElement("div");

    card.classList.add("card");

    let imgcontainer= document.createElement("div");
    imgcontainer.classList.add("imgcontainer");
    let image = document.createElement("img");
    image.setAttribute("src", photo1);
    image.classList.add("imgclass")
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let container =document.createElement("div");
    container.classList.add("desccontainer");

    let name = document.createElement("h5");
    name.classList.add("item-name");
    name.innerText= "coffee cake";
    container.appendChild(name);

    let description = document.createElement("p");
    description.classList.add("item-desc");
    description.innerText= "lorem wfwegre wdwefreget qwfweger";
    container.appendChild(description);

    let addcart = document.createElement("button");
    addcart.classList.add("item-add");
    addcart.innerText="add to cart";     
    container.appendChild(addcart);

    card.appendChild(container);

    element.appendChild(card);


    // card2 

    let card2= document.createElement("div");

    card2.classList.add("card");

    let imgcontainer2= document.createElement("div");
    imgcontainer2.classList.add("imgcontainer");
    let image2 = document.createElement("img");
    image2.setAttribute("src", photo2);
    image2.classList.add("imgclass")
    imgcontainer2.appendChild(image2);
    card2.appendChild(imgcontainer2);

    let container2 =document.createElement("div");
    container2.classList.add("desccontainer");

    let name2 = document.createElement("h5");
    name2.classList.add("item-name");
    name2.innerText= "cofee latiee";
    container2.appendChild(name2);

    let description2 = document.createElement("p");
    description2.classList.add("item-desc");
    description2.innerText= "lorem wfwegre wdwefreget qwfweger";
    container2.appendChild(description2);

    let addcart2 = document.createElement("button");
    addcart2.classList.add("item-add");
    addcart2.innerText="add to cart";     
    container2.appendChild(addcart2);

    card2.appendChild(container2);

    element.appendChild(card2);



    // card3

    let card3= document.createElement("div");

    card3.classList.add("card");

    let imgcontainer3= document.createElement("div");
    imgcontainer3.classList.add("imgcontainer");
    let image3 = document.createElement("img");
    image3.setAttribute("src", photo3);
    image3.classList.add("imgclass")
    imgcontainer3.appendChild(image3);
    card3.appendChild(imgcontainer3);

    let container3 =document.createElement("div");
    container3.classList.add("desccontainer");

    let name3 = document.createElement("h5");
    name3.classList.add("item-name");
    name3.innerText= "coffee mix";
    container3.appendChild(name3);

    let description3 = document.createElement("p");
    description3.classList.add("item-desc");
    description3.innerText= "lorem wfwegre wdwefreget qwfweger";
    container3.appendChild(description3);

    let addcart3 = document.createElement("button");
    addcart3.classList.add("item-add");
    addcart3.innerText="add to cart";     
    container3.appendChild(addcart3);

    card3.appendChild(container3);

    element.appendChild(card3);

    
    
    return element;
};

document.body.appendChild(component());



function footer(){
 const element = document.createElement("header");

element.innerHTML = "website created by eslam gamal";
element.classList.add('info')
document.body.appendChild(element);

}

document.body.appendChild(footer());


































































// // // nooo




import "./style.css"






import bio from "./component/bio/bio"
import photo from"./assets/cover.jpg"


/* 
this is a big comment
 */