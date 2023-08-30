
window.onscroll = function () { pageScrolled() };

function pageScrolled() {

  if(document.documentElement.scrollTop > 0)
  {
    document.getElementById("top").style.backgroundColor = "rgba(0, 0, 0, .95)";
    document.getElementById("top").style.height = "55px";
    document.getElementById("top").style.paddingTop = "0px";
    document.getElementById("picture").style.display="none"
  }
  else{
    document.getElementById("top").style.backgroundColor = "transparent";
    document.getElementById("top").style.height = "100px";
    document.getElementById("top").style.paddingTop = "30px";
    document.getElementById("picture").style.display="block"
  }

}
function scrollLeftSide()
{ 
  document.getElementById("slider-wrap").scrollLeft=0;
  console.log("hello")

}

function scrollRightSide()
{
  document.getElementById("slider-wrap").scrollLeft =1800;
  console.log("hello!")

}