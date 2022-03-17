
//generer un nombre Exercice 2
var rand = Math.floor(Math.random() * 10 + 1);

// nombrs d'essais
var nbEssais = 1;

document.getElementById("test").onclick = function () {
    var x= confirm('vous avez 8 essais');
    if(x==true){
        test();
    }else{
        alert('à la prochaine');
    }
}

 function test(){
    var choix = Number(document.getElementById("choix").value);
    if(isNaN(choix)|| (choix=='')){
        alert(" Vous devez indiquer un nombre ! ");
    }
    else if (choix == rand) {
      alert(" Vous avez gagné ! " + nbEssais + " choix ");
    } else if (choix > rand) {
      nbEssais++;
      alert(" Le nombre indiqué est trop grand");
    } else {
      nbEssais++;
      alert(" Le nombre indiqué est trop petit");
    }
    if(nbEssais==8){
        alert("vous avez perdu");
        
    }
  }
 


