var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}


/**
 * PHAN NEWS
 */
document.getElementById("hiddenNews").addEventListener("click", function(){
  myHidden("show__1","block");
  myHidden("show__2","block");
  myHidden("show__3","block");
  myHidden("show__4","block");
  myHidden("show__5","block");
  myHidden("show__6","block");
  myHidden("show__7","block");
  myHidden("show__8","block");
  myHidden("show__9","block");
  myHidden("show__10","block");
  myHidden("show__11","block");
  myHidden("show__12","block");
  myHidden("show__13","block");
  myHidden("show__14","block");
  myHidden("show__16","block");
  myHidden("show__15","block");
  myHidden("show__17","block");
  myHidden("show__18","block");
  myHidden("hiddenNews","none");
})

document.getElementById("hiddenPopular").addEventListener("click", function(){
  myHidden("ShowP__1","block");
  myHidden("ShowP__2","block");
  myHidden("ShowP__3","block");
  myHidden("ShowP__4","block");
  myHidden("ShowP__5","block");
  myHidden("ShowP__6","block");
  myHidden("ShowP__7","block");
  myHidden("ShowP__8","block");
  myHidden("ShowP__9","block");
  myHidden("ShowP__10","block");
  myHidden("ShowP__11","block");
  myHidden("ShowP__12","block");
  myHidden("ShowP__13","block");
  myHidden("ShowP__14","block");
  myHidden("ShowP__15","block");
  myHidden("ShowP__16","block");
  myHidden("ShowP__17","block");
  myHidden("ShowP__18","block");
  myHidden("hiddenPopular","none");
})
document.getElementById("hiddenVideo").addEventListener("click", function(){
  myHidden("ShowV__1","block");
  myHidden("ShowV__2","block");
  myHidden("ShowV__3","block");
  myHidden("ShowV__4","block");
  myHidden("ShowV__5","block");
  myHidden("ShowV__6","block");
  myHidden("ShowV__7","block");
  myHidden("ShowV__8","block");
  myHidden("ShowV__9","block");
  myHidden("ShowV__10","block");
  myHidden("ShowV__11","block");
  myHidden("ShowV__12","block");
  myHidden("ShowV__13","block");
  myHidden("ShowV__14","block");
  myHidden("ShowV__15","block");
  myHidden("ShowV__16","block");
  myHidden("ShowV__17","block");
  myHidden("ShowV__18","block");
  myHidden("hiddenVideo","none");
})
function myHidden(_id, _display) {
  document.getElementById(_id).style.display = _display;
}
/**
 * END NEWS
 */