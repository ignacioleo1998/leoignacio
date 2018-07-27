$(function() {
  //list of skills
  var skills = {
                "HTML5":{work:75},
                "CSS3":{personal:70},
                "JavaScript":{work:55},
                "JQuery" :{personal:55},
                "PHP":{work:50},
                "C#":{personal:60},
               };
  
  displayData(skills);
  animate();
});

//Functions
//display data
function displayData(skills){
  $('.bars').html('');
  $('.skills').html('');
  for (var key in skills){
    var personal = skills[key].personal,
        work = skills[key].work;
    
    $('.skills').append("<li><span>"+key+"</span></li>");
    $('.bars').append("<li><div data-percentage='"+skills[key].personal+"' class='bar'>"+personal+"</div><div data-percentage='"+skills[key].work+"' class='bar'>"+work+"</div></li>"); 
    
  };
}

//animate the data
function animate(){
  $('.bar').css('width','0px');
  $(".bars .bar").delay(1000).each(function(i){
    var percentage = $(this).data('percentage');
    
    $(this).delay(i+"00").animate({'width': percentage + '%'}, 700);
   
  });
}