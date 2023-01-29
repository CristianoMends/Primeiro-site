var horarios = new Array(7);
horarios[0] = "8:00";
horarios[1] = "9:00";
horarios[2] = "10:00";
horarios[3] = "13:00";
horarios[4] = "14:00";
horarios[5] = "15:00";
horarios[6] = "16:00";
   
    function drawImage(){
        let select = document.querySelector("#services");
        let optionIndex = select[select.selectedIndex];
            if(optionIndex.value === "Corte"){            
            document.getElementById("image").innerHTML 
            = "<img class='imageFormat' src='src/images/corte.png'>";
         }}

    function time(){
        let select = document.querySelector("#horarios");
       for (let i = 0; i < 5; i++) {
        console.log(horarios[0])
            select.options[select.options.length] = new Option(horarios[i],"teste")            
        }}    

    function write1(){
    window.alert("Agendamento concluído com sucesso");
}


window.onload = time