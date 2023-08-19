/*global $*/
 $(document).ready(function(){
  
  let count_h = 0;
  let count_s = 0;
  let count_m = 0;
  let count_ms = 0;
  
  let timer = null;
  let whatIs_click = null;
  
  $("[class^='btn']").on('click', function() {
   
    whatIs_click = $(this).html();
    
    switch (whatIs_click) {
     case 'スタート':
          $(".btn_start").prop('disabled', true);
          $(".btn_stop,.btn_reset").prop('disabled', false);
           timer = setInterval(countStart, 100);
           break;
     case 'ストップ':
          $(".btn_stop").prop('disabled', true);
          $(".btn_start,.btn_reset").prop('disabled', false);
           clearTimeout(timer);
          break;
     case 'リセット':
          $(".btn_reset,.btn_stop").prop('disabled', true);
          $(".btn_start").prop('disabled', false);
           clearTimeout(timer);
           count_h = 0;
           count_s = 0;
           count_m = 0;
           count_ms = 0;   
           $(".count_ms").html(count_ms);
           $(".count_m").html(count_m);
           $(".count_s").html(count_s);
           $(".count_h").html(count_h);
          break;
    }
  });
  
  function countStart() {
   count_ms++
   $(".count_ms").html(count_ms);
   
   if(count_ms === 9){
       count_ms = 0;
       count_m++;
       $(".count_m").html(count_m);
   }else if(count_m === 59){
       count_m = 0;
       count_s++;
       $(".count_m").html(count_m);
       $(".count_s").html(count_s);
    }else if(count_s === 24){
       count_s = 0;
       count_h++;
       $(".count_h").html(count_h);
    }
  }
   
 });