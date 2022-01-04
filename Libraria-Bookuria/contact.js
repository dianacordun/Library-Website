window.onload=function()
{
    var bunic=document.body;
    var c1=document.getElementById("i1");
    var c2=document.getElementById("i2");
    var c3=document.getElementById("i3");

    bunic.addEventListener("dblclick",function ()
    {
    var adresa=document.getElementById("adresa");
    adresa.style.color = "deeppink";},false);


    c1.addEventListener("dblclick",function()
    {event.stopPropagation();
    alert("Consultanții noștri sunt disponibili la numărul de telefon +40728828922 în zilele lucrătoare Luni - Vineri, intervalul orar 9 - 18.");
    event.target.style.color="hotpink";});

    c2.addEventListener("dblclick",function()
    {event.stopPropagation();
    alert("Consultanții noștri sunt disponibili la adresa e-mail lbookuria@gmail.com în zilele lucrătoare \nLuni - Vineri,  intervalul orar 9 - 18. ");
    event.target.style.color="deeppink";});

    c3.addEventListener("dblclick",function()
    {event.stopPropagation();alert("Librăria noastră este deschisă \nLuni - Sâmbătă în intervalul orar 10 - 12 \nDuminică în intervalul orar 9 - 18.");
    event.currentTarget.style.color="hotpink";});
}

