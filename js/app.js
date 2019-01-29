//focus on first field on load


$( document ).ready(function() {
    $( "#name" ).focus();
  });


  //JobRole section
  
  

 $('#title').on('change', function(e){

    let select = $(this).val();

   if (select === 'other') {
       
    console.log('TEST');
   const otherTitle = '<input type="text"  id="other_title" />';
        $('#title').append(otherTitle);
 
   
   }

  

});