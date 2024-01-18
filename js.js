

function btn1() {
    document.body.style.backgroundColor = "red";
  }
  function btn2() {
    document.body.style.backgroundColor = "orange";
  }
  function btn3() {
    document.body.style.backgroundColor = "yellow";
  }

  let h1_porteclé=document.getElementById("quantité_porteclé")
  let prix_porteclé=document.getElementById("prix_porteclé")
  let prix_total=document.getElementById("prix_total")
  let prix_total_porteclé 
  function diminuer() {
    if (h1_porteclé.innerText>0) {  
      h1_porteclé.innerText=h1_porteclé.innerText-1;
     }
  
  }

  function ajouter(){
    h1_porteclé.innerText++
  }  

  function supprimer() {
    h1_porteclé.innerText=0
    
  }

  let h1_stylo=document.getElementById("quantité_stylo") 
  function diminuerStylo() {
    if (h1_stylo.innerText>0) {  
      h1_stylo.innerText=h1_stylo.innerText-1;
     }
  
  }

  function ajouterStylo(){
    h1_stylo.innerText++
  }  

  function supprimerStylo() {
    h1_stylo.innerText=0
    
  }

  let prix_total_stylo
  
  let h1_montre=document.getElementById("quantité_montre") 
  function diminuerMontre() {
    if (h1_montre.innerText>0) {  
      h1_montre.innerText=h1_montre.innerText-1;
     }
  
  }

  function ajouterMontre(){
    h1_montre.innerText++
  }  

  function supprimerMontre() {
    h1_montre.innerText=0
  }

  let prix_total_montre
  
console.log(prix_total_porteclé);
function validate(){
  h1_montre.innerText=h1_montre.innerText
    console.log(h1_montre);
    prix_total_montre=prix_montre.innerText*h1_montre.innerText
    h1_stylo.innerText=h1_stylo.innerText
    console.log(h1_stylo);
    prix_total_stylo=prix_stylo.innerText*h1_stylo.innerText
    h1_porteclé.innerText=h1_porteclé.innerText
    console.log(h1_porteclé);
    prix_total_porteclé=prix_porteclé.innerText*h1_porteclé.innerText
    prix_total.innerText=prix_total_montre+prix_total_stylo+prix_total_porteclé+" euros"
    
}

let coeur=document.getElementById("coeur_porteclé")
function like(){
if (coeur.style.color!="red") {
  coeur.style.color="red"  
}else{
  coeur.style.color=""  
}
}  


let coeur_stylo=document.getElementById("coeur_stylo")
function likeStylo(){
  if (coeur_stylo.style.color!="red") {
    coeur_stylo.style.color="red"  
  }else{
    coeur_stylo.style.color=""  
  } 
}

let coeur_montre=document.getElementById("coeur_montre")
function likeMontre(){
  if (coeur_montre.style.color!="red") {
    coeur_montre.style.color="red"  
  }else{
    coeur_montre.style.color=""  
  }  
}