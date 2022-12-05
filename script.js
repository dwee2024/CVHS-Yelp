function getRating() {

  var stars = document.getElementsByName("rating1")

  for (var i = 0; i < stars.length; i++) {
    if (stars[i].checked) {
      alert(stars[i].value);
      break;
    }
  }
}