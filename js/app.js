const contenedorQR =document.getElementById('contenedorQR');
const formulario =document.getElementById('formulario');
const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit',(e)=>{
    var startNode="BEGIN:VCARD"+"\n"+"VERSION:3.0"+"\n";
    var endNode="END:VCARD";
    startNode+="N:"+formulario.apellido.value.trim()+";"+formulario.name.value.trim()+"\n";
    startNode+="FN:"+formulario.name.value.trim()+" "+formulario.apellido.value.trim()+"\n";
    startNode+="EMAIL:"+formulario.correo.value.trim()+"\n";
    startNode+="TEL:"+formulario.telefono.value.trim()+"\n";
    startNode+="TEL:"+formulario.telefonoF.value.trim()+"\n";
    
   /* 
   
    startNode+="ORG:"
    startNode+="TITLE:
    startNode+="NOTE:
    startNode+="URL:
    startNode+="TEL:"+phoneNo.value.trim()+"\n";
    startNode+="ADR:"+address1.value.trim()+";"+address2.value.trim()+";"+city.value.trim()+";"+state.value.trim()+";"+country.value.trim()+";"+zipCode.value.trim()+"\n";*/
   
    startNode+=endNode;
    e.preventDefault();
    QR.makeCode(startNode);
})