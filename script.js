window.onload= function ()
{
    var x = document.getElementsByTagName("td");
    var a =document.getElementById("holder")

    a.onclick= e=>
    {
        console.log(e.target);
        console.log(e.target.tagName);
        console.log(e.target.id)
        x[e.target.id-1].style.backgroundColor="black";
    }

    a.ondragover= f=>
    {
        console.log(f.target);
        console.log(f.target.tagName);
        console.log(f.target.id)
        x[f.target.id-1].style.backgroundColor="black";
    }
    a.ondragstart= g=>
    {
        console.log(g.target);
        console.log(g.target.tagName);
        console.log(g.target.id)
        x[g.target.id-1].style.backgroundColor="black";
    }
}