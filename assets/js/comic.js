var title = document.getElementById("title");
var display = document.getElementById("display");
var url;

// Reference to corsheader taken from BUILD XKCD COMICS APP API PROJECT || XKCD API, SUPERAGENT, HTML, CSS JAVASCRIPT ES6 CLASSES TUTORIAL BY DANASCRIPT ON YOUTUBE
var corsHeader = 'https://the-ultimate-api-challenge.herokuapp.com';
var url = 'https://xkcd.com';
var format = 'info.0.json';
var requestUrl = corsHeader+"/"+url+"/"+getRandomNum().toString()+"/"+format;


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    title.textContent = data.title;
    displayImage(data.img);
    console.log(data);
  });

  function getRandomNum(){
    return Math.floor(Math.random() * 500) + 1;
  }

function displayImage(urlIn){
        var image = new Image();
        image.src = urlIn;
        display.append(image);
}