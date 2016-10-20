$(document).ready(function(){
  $("form#fortune").submit(function(event){
    var fortune1 = $("input:checkbox[name=events]:checked").val();

        if (fortune1 === 'cat' && 'mirror' || 'umbrella')  {
          $("#cat-mirror-umbrella").show();
        }
        else if (fortune1 === 'Europe'){
          $("#Europe_text").show();
        }
        else if (fortune1 === 'America'){
          $("#America_text").show();
        }
    $("#fortune-responses").show();
    $("input:checkbox[name=events]:checked").each(function(){
      var fortuneCalculator = $(this).val();
      // $('#fortune-responses').append(fortuneCalculator + "<br>");
    });
    $('#fortune').hide();
    event.preventDefault();
  });
});
