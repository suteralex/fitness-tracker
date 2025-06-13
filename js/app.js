let buttonHitCount=0;
const hitmeButton = document.getElementById("button1");


(()=> {
    console.log("IIFE")

})();


  // Moin Alex: Das isch en Basic EventListener
  // er luegts element "hitmeButton" ah & lost uf e spezifischi AKtion 
  // idem Fall "Click" 
hitmeButton.addEventListener("click",()=>{
    //tun Variable um eis erhöche
    buttonHitCount++;
    //suech im Index.html nach em Element mit ID buttonHitCount, bearbeite Attribut innerHTML (Das passt denn de Inhalt devo ah)
    document.getElementById("buttonHitCount").innerHTML = "Button Hit Count: "+buttonHitCount
})