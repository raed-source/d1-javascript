var rand= Math.floor(Math.random()*100)+1;
const affich=document.getElementById('t');
const resultat=document.getElementById('resultat');
const essayer= document.getElementById('essayer');
const b=document.getElementById('b');
var nbEssai=1;

function tester(){
    var nbUser= Number(essayer.value);
    if(nbEssai===1){
        affich.textContent='vos test';
    }
    affich.textContent+= nbUser +'';
}
if(nbUser===rand){
    resultat.textContent='bravo';
}else if(nbEssai===3){
    resultat.textContent='game over';
}else{
    nbEssai++;
}
