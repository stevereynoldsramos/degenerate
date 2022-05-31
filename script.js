function arrow (id) {
  var link = document.getElementById(id);
  var ref = link.id;
  var match = ref + "-arrow";
  var icon = document.getElementById(match);
  icon.style.opacity = "100";
}

function hide (id) {
  var link = document.getElementById(id);
  var ref = link.id;
  var match = ref + "-arrow";
  var icon = document.getElementById(match);
  icon.style.opacity = "0";
}
