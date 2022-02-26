
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        cityName=='Services'?setHeight():'';
      }

      var sermonsJSON;
      $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxd5ZvXiobUtfzXWt7BqOSu36ZkhVyjFY&key=AIzaSyB8nNDcbTWvDmoTIRv3ps4g2ErTCmCQjrU&part=snippet&maxResults=10000", function(result){
        sermonsJSON=result; 
        console.log(JSON.stringify(sermonsJSON));
        var pgNums = '<li><a class="pgn__prev" onclick="pagePrev()"  href="#0">Prev</a></li><li><a class="pgn__num" onclick="page(1)" href="#0">1</a></li>';
        
        if(sermonsJSON.pageInfo.totalResults>10){
            for (var i = 1; i < Math.ceil(sermonsJSON.pageInfo.totalResults/10); i++) {
                pgNums += '<li><a class="pgn__num" onclick="page('+(i+1)+')">'+(i+1)+'</a></li> <li><a class="pgn__next" onclick="pageNext()" href="#0">Next</a></li>';
                if(i==Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
                pgNums += '<li><a class="pgn__next" onclick="pageNext()"  href="#0">Next</a></li>';

                }
            }
        }
        else{
            pgNums += '<li><a class="pgn__next" onclick="pageNext()" href="#0">Next</a></li>';

        }
        sermonsJSON.items=sermonsJSON.items.sort( compare );
        
        var container = document.getElementById("pgSermons");
        container.innerHTML = pgNums;
        $(".pgn__prev").css({"pointer-events": "none", "cursor": "default"});

      
        var pageElement = "";
        for (var i = 0; i < 10; i++) {
            pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+sermonsJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';
        }
        var container = document.getElementById("sermonPage");
        container.innerHTML = pageElement;

        var div = $('.video-embed');
        var width = div.width();
        
        div.css('height',  (width/100)*56.25 );
        
        let foo = $(".pgn__num");
        foo.filter(":contains('1')").css({"border-bottom": "solid 2px black"}) ;
      });
      currentPg=1;
    function page(num) {
        if(currentPg!=num){

            currentPg=num;
        
            var pageElement = "";
            for (var i = ((num*10)-10); i < (num*10); i++) {
                if(sermonsJSON.items[i]){
                    pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+sermonsJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';
    
                }
            }
            var container = document.getElementById("sermonPage");
            container.innerHTML = pageElement;
    
            var div = $('.video-embed');
            var width = div.width();
            
            div.css('height',  (width/100)*56.25 );
            
            if(currentPg==1){
            $(".pgn__prev").css({"pointer-events": "none", "cursor": "default"});
                
            }
            else if(currentPg>1){
            $(".pgn__prev").css({"pointer-events": "auto", "cursor": "pointer"});
                
            }
    
            if(currentPg==Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
            $(".pgn__next").css({"pointer-events": "none", "cursor": "default"});
                
            }
            else if(currentPg<Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
                $(".pgn__next").css({"pointer-events": "auto", "cursor": "pointer"});
                    
                }
    
        }

        let foo = $(".pgn__num");
    foo.filter(":contains('"+currentPg+"')").css({"border-bottom": "solid 2px black"}) ;
    foo.filter(":not(:contains('"+currentPg+"'))").css({"border-bottom": "none"}) ;
    }
    function pagePrev() {
        currentPg=currentPg-1;
        var pageElement = "";
        for (var i = ((currentPg*10)-10); i < (currentPg*10); i++) {
            if(sermonsJSON.items[i]){
                pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+sermonsJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';

            }
        }
        var container = document.getElementById("sermonPage");
        container.innerHTML = pageElement;

        var div = $('.video-embed');
        var width = div.width();
        
        div.css('height',  (width/100)*56.25 );


        if(currentPg==1){
        $(".pgn__prev").css({"pointer-events": "none", "cursor": "default"});
            
        }

        if(currentPg==Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
            $(".pgn__next").css({"pointer-events": "none", "cursor": "default"});
                
            }
            else if(currentPg<Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
                $(".pgn__next").css({"pointer-events": "auto", "cursor": "pointer"});
                    
                }

                let foo = $(".pgn__num");
                foo.filter(":contains('"+currentPg+"')").css({"border-bottom": "solid 2px black"}) ;
                foo.filter(":not(:contains('"+currentPg+"'))").css({"border-bottom": "none"}) ;
    }
    
    function pageNext() {
        currentPg=currentPg+1;
        var pageElement = "";
        for (var i = ((currentPg*10)-10); i < (currentPg*10); i++) {
            if(sermonsJSON.items[i]){
                pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+sermonsJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+sermonsJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="video-embed"></iframe></div>';

            }
        }
        var container = document.getElementById("sermonPage");
        container.innerHTML = pageElement;

        var div = $('.video-embed');
        var width = div.width();
        
        div.css('height',  (width/100)*56.25 );
        
        if(currentPg==Math.ceil(sermonsJSON.pageInfo.totalResults/10)){
            $(".pgn__next").css({"pointer-events": "none", "cursor": "default"});
                
            }
            if(currentPg>1){
                $(".pgn__prev").css({"pointer-events": "auto", "cursor": "pointer"});
                    
                }
        
                let foo = $(".pgn__num");
                foo.filter(":contains('"+currentPg+"')").css({"border-bottom": "solid 2px black"}) ;
                foo.filter(":not(:contains('"+currentPg+"'))").css({"border-bottom": "none"}) ;
    }

    // SERMON END


    // SERVICE START

    
    var servicesJSON;
    $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxd5ZvXiobUsu0IBQyRmTKAswjvk1MWPW&key=AIzaSyB8nNDcbTWvDmoTIRv3ps4g2ErTCmCQjrU&part=snippet&maxResults=10000", function(result){
        servicesJSON=result; 
      console.log("servicesJSON:"+JSON.stringify(servicesJSON));
      var serPgNums = '<li><a class="ser_pgn_prev" onclick="servicePagePrev()"  href="#0">Prev</a></li><li><a class="ser_pgn_num" onclick="servicePage(1)" href="#0">1</a></li>';
      
      if(servicesJSON.pageInfo.totalResults>10){
          for (var i = 1; i < Math.ceil(servicesJSON.pageInfo.totalResults/10); i++) {
            serPgNums += '<li><a class="ser_pgn_num" onclick="servicePage('+(i+1)+')">'+(i+1)+'</a></li> <li><a class="ser_pgn_next" onclick="servicePageNext()" href="#0">Next</a></li>';
              if(i==Math.ceil(servicesJSON.pageInfo.totalResults/10)){
                serPgNums += '<li><a class="ser_pgn_next" onclick="servicePageNext()"  href="#0">Next</a></li>';

              }
          }
      }
      else{
        serPgNums += '<li><a class="ser_pgn_next" onclick="servicePageNext()" href="#0">Next</a></li>';

      }
      servicesJSON.items=servicesJSON.items.sort( compare );
      
      var container = document.getElementById("pgServices");
      container.innerHTML = serPgNums;
      $(".ser_pgn_prev").css({"pointer-events": "none", "cursor": "default"});

    
      var pageElement = "";
      for (var i = 0; i < 10; i++) {
          pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+servicesJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="service-video-embed"></iframe></div>';
      }

      var container = document.getElementById("servicePage");
      container.innerHTML = pageElement;
      

  
      
      let foo = $(".ser_pgn_num");
      foo.filter(":contains('1')").css({"border-bottom": "solid 2px black"}) ;
    });
    function setHeight(){

        var div = $('.service-video-embed');
        var width = div.width();
        console.log("width:"+width);
        console.log("width mes:"+ (width/100)*56.25);
        
        div.css('height',  (width/100)*56.25 );
    }

    serCurrentPg=1;
  function servicePage(num) {
      if(serCurrentPg!=num){

          serCurrentPg=num;
      
          var pageElement = "";
          for (var i = ((num*10)-10); i < (num*10); i++) {
              if(servicesJSON.items[i]){
                  pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+servicesJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="service-video-embed"></iframe></div>';
  
              }
          }
          var container = document.getElementById("servicePage");
          container.innerHTML = pageElement;
  
          var div = $('.service-video-embed');
          var width = div.width();
      console.log("width:"+width);
      console.log("height:"+((width/100)*56.25));
          
          div.css('height',  ((width/100)*56.25) );
          
          if(serCurrentPg==1){
          $(".ser_pgn_prev").css({"pointer-events": "none", "cursor": "default"});
              
          }
          else if(serCurrentPg>1){
          $(".ser_pgn_prev").css({"pointer-events": "auto", "cursor": "pointer"});
              
          }
  
          if(serCurrentPg==Math.ceil(servicesJSON.pageInfo.totalResults/10)){
          $(".ser_pgn_next").css({"pointer-events": "none", "cursor": "default"});
              
          }
          else if(serCurrentPg<Math.ceil(servicesJSON.pageInfo.totalResults/10)){
              $(".ser_pgn_next").css({"pointer-events": "auto", "cursor": "pointer"});
                  
              }
  
      }

      let foo = $(".ser_pgn_num");
  foo.filter(":contains('"+serCurrentPg+"')").css({"border-bottom": "solid 2px black"}) ;
  foo.filter(":not(:contains('"+serCurrentPg+"'))").css({"border-bottom": "none"}) ;
  }
  function servicePagePrev() {
      serCurrentPg=serCurrentPg-1;
      var pageElement = "";
      for (var i = ((serCurrentPg*10)-10); i < (serCurrentPg*10); i++) {
          if(servicesJSON.items[i]){
              pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+servicesJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="service-video-embed"></iframe></div>';

          }
      }
      var container = document.getElementById("servicePage");
      container.innerHTML = pageElement;

      var div = $('.service-video-embed');
      var width = div.width();
      
      div.css('height',  ((width/100)*56.25) );


      if(serCurrentPg==1){
      $(".ser_pgn_prev").css({"pointer-events": "none", "cursor": "default"});
          
      }

      if(serCurrentPg==Math.ceil(servicesJSON.pageInfo.totalResults/10)){
          $(".ser_pgn_next").css({"pointer-events": "none", "cursor": "default"});
              
          }
          else if(serCurrentPg<Math.ceil(servicesJSON.pageInfo.totalResults/10)){
              $(".ser_pgn_next").css({"pointer-events": "auto", "cursor": "pointer"});
                  
              }

              let foo = $(".ser_pgn_num");
              foo.filter(":contains('"+serCurrentPg+"')").css({"border-bottom": "solid 2px black"}) ;
              foo.filter(":not(:contains('"+serCurrentPg+"'))").css({"border-bottom": "none"}) ;
  }
  
  function servicePageNext() {
      serCurrentPg=serCurrentPg+1;
      var pageElement = "";
      for (var i = ((serCurrentPg*10)-10); i < (serCurrentPg*10); i++) {
          if(servicesJSON.items[i]){
              pageElement += '<div class="column events-list__item"><iframe src="https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:135%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style> <a href=https://www.youtube.com/embed/'+servicesJSON.items[i].snippet.resourceId.videoId+'?autoplay=0><img src=https://i.ytimg.com/vi/'+servicesJSON.items[i].snippet.resourceId.videoId+'/sddefault.jpg ><span>▶</span></a>" frameborder="0" allow="accelerometer ; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition" class="service-video-embed"></iframe></div>';

          }
      }
      var container = document.getElementById("servicePage");
      container.innerHTML = pageElement;

      var div = $('.service-video-embed');
      var width = div.width();
      
      div.css('height', ((width/100)*56.25)) ;
      
      if(serCurrentPg==Math.ceil(servicesJSON.pageInfo.totalResults/10)){
          $(".ser_pgn_next").css({"pointer-events": "none", "cursor": "default"});
              
          }
          if(serCurrentPg>1){
              $(".ser_pgn_prev").css({"pointer-events": "auto", "cursor": "pointer"});
                  
              }
      
              let foo = $(".ser_pgn_num");
              foo.filter(":contains('"+serCurrentPg+"')").css({"border-bottom": "solid 2px black"}) ;
              foo.filter(":not(:contains('"+serCurrentPg+"'))").css({"border-bottom": "none"}) ;
  }


      
  $(window).on("orientationchange",function(){
    // alert("The orientation has changed!");
    setTimeout(function(){
        var div1 = $('.service-video-embed');
        var width = div1.width();
        
        div1.css('height', ((width/100)*56.25)) ;


        var div2 = $('.video-embed');
        var width = div2.width();
        
        div2.css('height',  (width/100)*56.25 );
     }, 10);

    

      
  });
  function compare( a, b ) {
      let c= new Date(a.snippet.publishedAt.toString());
      let d=new Date(b.snippet.publishedAt.toString())
    if ( c > d ){
      return -1;
    }
    if ( c < d ){
      return 1;
    }
    return 0;
  }
  
  