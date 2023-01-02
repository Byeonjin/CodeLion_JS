function counter(){
  var content = document.getElementById('jasoseol').value;
  const counter = document.getElementById('count');

  if(content.length > 200){
    content =content.substring(0,200);
    document.getElementById('jasoseol').value = content
  }

  counter.innerHTML = `${content.length}/200`;
}

counter();