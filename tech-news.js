$(document).ready(function() {
  mainCall();
  showSocialMedia();
});

function mainCall () {
  
  $.ajax({
    url: 
 'http://www.freecodecamp.com/news/hot',
    dataType: 'json',
    success: function(results) {
      
      var imageLinks = document.createElement("img");
      
      for(var i = 0; i < results.length; i++) {
        
        imageLinks.src = results[i].author.picture;
        var initialDate = results[i].timePosted;
        var postedDate = new Date(initialDate);
        var stringedDate = postedDate.toString();
        var dayName = stringedDate.substring(0, 3); 
        var monthDay = stringedDate.substring(4, 15);
        
        //Updates and appends each article link and all relevant info into the page.
        if(window.matchMedia("(min-width: 500px)").matches) {
        
          $('#contentRows').append('<div class="col-xs-4 col-md-2 col-md-offset-5"><a href=' + results[i].link + ' target = "_blank" data-toggle="tooltip" title="' + results[i].headline + '"><div class="thumbHolder"><img src=' + imageLinks.src + '></div></a><a href=' + results[i].link + ' target = "_blank" data-toggle="tooltip" title="' + results[i].headline + '"><p class = "articleTitle"><b>' + results[i].headline.substring(0, 20) + '...</b></p></a><a href = "http://www.freecodecamp.com/' + results[i].author.username + '" target = "_blank"><p class="author">by - ' + results[i].author.username + '</p></a><span><img class = "upVoteIcon" src = "http://www.clipartbest.com/cliparts/Kin/aLy/KinaLyziq.jpeg"><span>' + results[i].upVotes.length + '</span><p>Posted on: ' + dayName + ', ' + monthDay + '</p></div>');
        }
        
        else {
        
          $('#contentRows').append('<div class="col-xs-4 col-md-2 col-md-offset-5"><a href=' + results[i].link + ' target = "_blank" data-toggle="tooltip" title="' + results[i].headline + '"><div class="thumbHolder"><img src=' + imageLinks.src + '></div></a><a href=' + results[i].link + ' target = "_blank" data-toggle="tooltip" title="' + results[i].headline + '" class="titleLink"><p class = "articleTitle"><b>' + results[i].headline + '...</b></p></a><a href = "http://www.freecodecamp.com/' + results[i].author.username + '" target = "_blank"><p class="author">by - ' + results[i].author.username + '</p></a><span><img class = "upVoteIcon" src = "http://www.clipartbest.com/cliparts/Kin/aLy/KinaLyziq.jpeg"><span class="votes">' + results[i].upVotes.length + '</span><p>Posted on: ' + dayName + ', ' + monthDay + '</p></div>');
        }
      }
    }
  })
}

function showSocialMedia () {
  //Adjust opacity for social media icons on hover
  $('#socialMedia').hover(function() {
    $('[data-hide="hide"]').animate({opacity: ".8"}, 250);

},function() {
    $('[data-hide="hide"]').animate({opacity: "0"}, 250);
});
  
//Mobile settings to adjust opacity for the social media icons on screen tap
$('#showThem').on("tap", function(e) {
  var that = this;
  $('[data-hide="hide"]').animate({opacity: "1"}, 250);
  $(that).addClass("tapped");
  
    if($(that).hasClass("tapped")) {
      $('[data-hide="hide"]').animate({opacity: "0"}, 250);
      $(that).removeClass("tapped");
    }
  e.preventDefault();
});
}