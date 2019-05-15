console.log("Chrome extension go");
   

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse)  {
  console.log(message.txt);

  let puppy = "darren.jpg"
  let paragraphs = document.getElementsByTagName('p');
  let imgs = document.getElementsByTagName('img')
  for( elt of paragraphs){
  //replace background color of paragraphs
  // elt.style['background-color']='#FF00FF';
  //replace text
  elt.innerText = "YOU HAVE BEEN HACKED!";
  }
  for(let imgElt of imgs){
    let file = "hacked.jpg"
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    console.log(url);

  }

}