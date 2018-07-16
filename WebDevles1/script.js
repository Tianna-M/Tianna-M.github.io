alert("Welcome to my website! ");
var img = 0;

function clickfunction() {
  document.getElementryById ("title").style.fontSize = "100px";
}

function changeImage() {

    if (img == 0)
  {
        document.getElementById("imgClickAndChange").src = "serinity.jpg";
        img = 1;

}

  else if(img == 1){
    document.getElementById("imgClickAndChange").src = "wf.jpg";
    img = 2;
  }

    else if(img == 2){
      document.getElementById("imgClickAndChange").src = "jag.jpg";
      img = 3;
    }
      else if(img == 3){
        document.getElementById("imgClickAndChange").src = "fish.jpeg";
        img = 0;
      }
}
