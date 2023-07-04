let usa = 'us';
let col = 'co';
let ven = 've';
let nica = 'ng';
let mexico = 'mx';
let australia = 'au';
let peru = 'in';
let rusia = 'ru';
let polonia = 'pl';
let litonia = 'lt';

let key = '46cd5e7332364398845d5a3eda491de9'; 
let url = `https://newsapi.org/v2/top-headlines?country=${col}&apiKey=${key}`;
  



   
    
    
    let urlUsa = `https://newsapi.org/v2/top-headlines?country=${usa}&apiKey=${key}`;
    let urlCol = `https://newsapi.org/v2/top-headlines?country=${col}&apiKey=${key}`;
    let urlVen = `https://newsapi.org/v2/top-headlines?country=${ven}&apiKey=${key}`;
    let urlNic = `https://newsapi.org/v2/top-headlines?country=${nica}&apiKey=${key}`;
    let urlMex = `https://newsapi.org/v2/top-headlines?country=${mexico}&apiKey=${key}`;
    let urlAus =  `https://newsapi.org/v2/top-headlines?country=${australia}&apiKey=${key}`;
    let urlPeru = `https://newsapi.org/v2/top-headlines?country=${peru}&apiKey=${key}`;
    let urlRusia = `https://newsapi.org/v2/top-headlines?country=${rusia}&apiKey=${key}`;
    let urlPol = `https://newsapi.org/v2/top-headlines?country=${polonia}&apiKey=${key}`;
    let urlLit = `https://newsapi.org/v2/top-headlines?country=${litonia}&apiKey=${key}`;



 


let noticiero = document.querySelector('.work-container');
     let btnCol = document.getElementById('btnColombia')
     let btnVen = document.getElementById('btnVenezuela')
     let btnNic = document.getElementById('btnNicaragua')
     let btnMex = document.getElementById('btnMexico')
     let btnAus = document.getElementById('btnAustralia')
     let btnPer = document.getElementById('btnPeru')
     let btnUsa = document.getElementById('btnUsa')
     let btnRus = document.getElementById('btnRusia')
     let btnPol = document.getElementById('btnPolonia')
     let btnLit = document.getElementById('btnLitonia')
     let btnClean = document.getElementById('btnClean')
    


     btnCol.addEventListener("click", function(){
        noticias(urlCol)
     } )

     btnVen.addEventListener("click", function(){
        noticias(urlVen)
     } )
     btnNic.addEventListener("click", function(){
        noticias(urlNic)
     } )
     btnAus.addEventListener("click", function(){
        noticias(urlAus)
     } )
     btnPer.addEventListener("click", function(){
        noticias(urlPeru)
     } )
     btnUsa.addEventListener("click", function(){
        noticias(urlUsa)
     } )
     btnRus.addEventListener("click", function(){
        noticias(urlRusia)
     } )
     btnPol.addEventListener("click", function(){
        noticias(urlPol)
     } )
     btnLit.addEventListener("click", function(){
        noticias(urlLit)
     } )
     btnMex.addEventListener("click", function(){
        noticias(urlMex)
     } )
     

     var parrafos;

     function noticias(url) {
       fetch(url)
         .then(res => res.json())
         .then(data => {
           console.log(data);
           let noticias = data.articles;
           noticias.forEach(function (noticia) {
      
             parrafos = document.createElement('div');
             parrafos.classList.add('one-work')
             var enlace = document.createElement("a")
             enlace.setAttribute("href", `${noticia.url}`);
             enlace.setAttribute("target", "_blank");
             enlace.setAttribute("id", "urlNoticia");
            
             parrafos.innerHTML = `
               <br>
               ${noticia.urlToImage ? `<img style="width:400px" src=${noticia.urlToImage}><br>` : ''}
               <h1>${noticia.title}</h1>
               <h2>${noticia.description}</h2> 
               `;
              
               
               
             noticiero.appendChild(parrafos);
             parrafos.appendChild(enlace)
             enlace.innerHTML = `<h3 style=" margin-left:175px">Watch Notice</h3>
               `
           });
         });
     }
     
     function eliminarNoticia() {
       window.location.reload()
     }
     
  


     //ANIMACION SCROLL

                     
var flechaDerecha = document.querySelector(".scrollDerecha");
var flechaIzquierda = document.querySelector(".scrollIzquierda");

var content = document.querySelector(".work-container");

flechaDerecha.addEventListener("click", () => {
    content.scrollLeft += 500;
})

flechaIzquierda.addEventListener("click", () => {
    content.scrollLeft -= 500;
})

btnClean.addEventListener("click", eliminarNoticia);
