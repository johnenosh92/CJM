var sermonsJSON;
$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxd5ZvXiobUtfzXWt7BqOSu36ZkhVyjFY&key=AIzaSyB8nNDcbTWvDmoTIRv3ps4g2ErTCmCQjrU&part=snippet&maxResults=10000", function(result){
  sermonsJSON=result; 
  console.log(JSON.stringify(sermonsJSON));
  
  var pageElement = "";
  for (var i = 0; i < 2; i++) {
      pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+sermonsJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';
  }
  var container = document.getElementById("sermons");
  container.innerHTML = pageElement;

  var div = $('.video-embed');
  var width = div.width();
  
  div.css('height',  (width/100)*56.25 );
  
});


var servicesJSON;
$.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxd5ZvXiobUsu0IBQyRmTKAswjvk1MWPW&key=AIzaSyB8nNDcbTWvDmoTIRv3ps4g2ErTCmCQjrU&part=snippet&maxResults=10000", function(result){
  servicesJSON=result; 
  console.log(JSON.stringify(servicesJSON));
  
  var pageElement = "";
  for (var i = 0; i < 2; i++) {
      pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+servicesJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';
  }
  var container = document.getElementById("services");
  container.innerHTML = pageElement;

  var div = $('.video-embed');
  var width = div.width();
  
  div.css('height',  (width/100)*56.25 );
  
});

$(window).on("orientationchange",function(){
  console.log("orient")
  setTimeout(function(){
      
var div = $('.video-embed');
var width = div.width();

div.css('height',  (width/100)*56.25 );
      }, 50);
});