function getRating(teacher) {
  var stars = document.getElementsByName(teacher);

  for (var i = 0; i < stars.length; i++) {
    if (stars[i].checked) {
      recordRating(teacher, stars[i].value);
      console.log("recorded...");
      getAverage(teacher);
      break;
    }
  }
}

function recordRating(teacher, rating) {
  alert(teacher + " " + rating)
  var fn = "./" + teacher + ".txt";
  const fs = require('fs');
  fs.appendFileSync(fn, rating, (err) => {
    if (err) throw err;
    else alert("append successful...");
  })
}

function getAverage(teacher) {
  var fn = "./" + teacher + ".txt";
  const fs = require('fs')
  const fc = fs.readFile(fn, 'utf-8');
  var rt = 0;
  var lt = 0;
  var avg = 0;

  fc.split(/\r?\n/).forEach((data) => {
    rt += data;
    lt += 1;
  });

  alert("total stars = " + rt);

  avg = rt / lt;
  document.getElementById("avg").value = avg;
}