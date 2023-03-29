// console.log(document);
// let h1 = document.querySelector("h1");
// console.log(h1);
// h1.innerHTML = "salut";
// h1.innerHTML = "<span style='color:green'>salut</span>";
// h1.style.background= "yellow";
// h1.style.animation = "2S descend linear infinite";

// console.log(p.classList);
// p.classList.add("js");
// h1.classList.add("surligne");
// h1.classList.remove("toto");
let menu = document.querySelector(".menu");
let spanun = document.querySelector(".un");
let spandeux = document.querySelector(".deux");
let spantrois = document.querySelector(".trois");
let links 


menu.addEventListener("click", menuburger)
function menuburger(){
    if(menu.classList[1] !="open"){

   
     spandeux.style.display ="none";
     spanun.style.transform ="rotate(-45deg)";
     spantrois.style.marginTop ="-15px";
     spantrois.style.transform ="rotate(45deg)";
     links.style.top="104px"
    
     menu.classList.add("open");
    }
      else{
        spandeux.style.display ="block";
        spantrois.style.marginTop ="5px";
        spantrois.style.transform ="rotate(0deg)";
        spanun.style.transform ="rotate(0deg)";
        menu.classList.remove("open");
    }
}
let xhr = new XMLHttpRequest();
xhr.onreadystatechange =function(){
    if(xhr.readyState === 4){
    console.log(xhr.responseText);
    let datas = JSON.parse(xhr.responseText);
    console.log(data);
    for (let i = 0; i < 10; i++){
        
    }
    console.log(data);
           }
}

xhr.open("GET","https://jsonplaceholder.typicode.com/photos",true);
xhr.send();





const img = doxument.getElementById('img');

fetch('') on fait la premiere requete et on mis le lien https dans la parenteses
.then(res => console.log(res))  on va voir si ca marche sur la console et pyus on 
                     efface console.log et on ecrit notre code
    .then(res => res.json())
    .then(data => console.log(data)) une verification d'abord sur console pour voir
                                     si lelien a bien etait Pris
    .then(data => img.src = data[0].url)

         si il ya une erreur on reprend le code de cette facon

         const img = doxument.getElementById('img');       
         fetch('') on laisse le lien https dans la parenteses
         .then(res => {
          console.log(res);
          if(res.ok){
            res.json().then(data =>{
              img.src = data[0].url
           
            }
          
         } else {
          console.log("erreur");
          doxument.getElementById('erreur').innerHTML = 'erreur :'(
          }
         })
               

