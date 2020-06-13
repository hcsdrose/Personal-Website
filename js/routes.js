routie({
  'projects': function() {
    $("#content").load( "pages/projects.html", function() {
      $("body").css("background-color", "#fff");
      $("#home a").css("color", "#000");
      $("#projects a").css("color", "#000");
      $("#hobbies a").css("color", "#000");
      $("#contact a").css("color", "#000");
    });
  },
  'hobbies': function() {
    $("#content").load( "pages/hobbies.html", function() {
      $("body").css("background-color", "#fff");
      $("#home a").css("color", "#000");
      $("#projects a").css("color", "#000");
      $("#hobbies a").css("color", "#000");
      $("#contact a").css("color", "#000");
    });
  },
  'contact': function() {
    $("#content").load( "pages/contact.html", function() {
      $("body").css("background-color", "#000");
      $("#home a").css("color", "#fff");
      $("#projects a").css("color", "#fff");
      $("#hobbies a").css("color", "#fff");
      $("#contact a").css("color", "#fff");
    });
  },
  '*': function(){
    $("#content").load( "pages/home.html", function() {
      $("body").css("background-color", "#000");
      $("#home a").css("color", "#fff");
      $("#projects a").css("color", "#fff");
      $("#hobbies a").css("color", "#fff");
      $("#contact a").css("color", "#fff");
    });
  }
});
