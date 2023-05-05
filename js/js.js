function resultado (){

    var certo = 0;
    var errado = 0;

    var p1= document.querySelector ("input[name='p1']:checked").value;

    if (p1 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

    var p2= document.querySelector ("input[name='p2']:checked").value;

    if (p2 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p3= document.querySelector ("input[name='p3']:checked").value;
    if (p3 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p4= document.querySelector ("input[name='p4']:checked").value;

    if (p4 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p5= document.querySelector ("input[name='p5']:checked").value;

    if (p5 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p6= document.querySelector ("input[name='p6']:checked").value;

    if (p6 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p7= document.querySelector ("input[name='p7']:checked").value;

    if (p7 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p8= document.querySelector ("input[name='p8']:checked").value;

    if (p8 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p9= document.querySelector ("input[name='p9']:checked").value;

    if (p9 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }

var p10= document.querySelector ("input[name='p10']:checked").value;

    if (p10 == "c")
    {
        certo++;
    }
    else{
        errado++;
    }


    document.write ("<h1 style= 'font-size:70px;'>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "Você acertou " + certo + " e errou " +  errado + ".<br><br><div class='center' id='x'></div></h1>");

    if (certo < 5){
       document.body.style.backgroundColor = "red";
        var img = document.createElement("img");
        img.src = "img/faustao.gif";
    
        var div = document.getElementById("x");
        div.appendChild(img);
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.width = '60%';
        img.style.height = '60%';
    }
    else if (certo == 5 || certo == 6 || certo == 7){
        document.body.style.backgroundColor = "blue";
        var img = document.createElement("img");
        img.src = "img/thumb.png";
    
        var div = document.getElementById("x");
        div.appendChild(img);
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.width = '60%';
        img.style.height = '60%';
    }
    else if (certo == 8 || certo == 9){
        document.body.style.backgroundColor = "grey";
        var img = document.createElement("img");
        img.src = "img/1szkzo.jpg";
    
        var div = document.getElementById("x");
        div.appendChild(img);
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.width = '60%';
        img.style.height = '60%';
    }
    else if (certo == 10){
        document.body.style.backgroundColor = "green";
        var img = document.createElement("img");
        img.src = "img/fac.gif";
    
        var div = document.getElementById("x");
        div.appendChild(img);
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.width = '60%';
        img.style.height = '60%';
    }

}