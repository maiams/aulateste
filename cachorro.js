$(document).ready(function(){
   
   $('body').keydown(function(event) {
    
       //alert(event.which);
       switch (event.which) {
        case 37: // left arrow key
           $('#cachorro').animate({ 'margin-left': '-=100px' }, 100);
           break;
        case 39: // right arrow key
           $('#cachorro').animate({ 'margin-left': '+=100px' }, 100);
           break;
    }
});
   
});

