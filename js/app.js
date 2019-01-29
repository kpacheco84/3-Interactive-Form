
/*notes to self
A selector to get the middle option-element by value is
$('.selDiv option[value="SEL1"]')
For an index:
$('.selDiv option:eq(1)')
For a known text:
$('.selDiv option:contains("Selection 1")')
*/

//focus on first field on load


$( document ).ready(function() {
    $( "#name" ).focus();
  });


  //JobRole section
  const othTitle = $('#oth_title').hide();
  
 $('#title').on('change', function(e){

    let select = $(this).val();

   if (select === 'other') {
       
    console.log('TEST');
   //const otherTitle = '<input type="text" id="oth_title" name="other_job_title" placeholder="Your Job Role"/>';
       othTitle.show();
 
   
   }

  

});



// this is how i can hide a particular color
 //$('#colors-js-puns option[value="cornflowerblue"]').hide();

 //$('#colors-js-puns option').hide();
 // first hide select color drop down

 //hide color div
 $('#colors-js-puns').hide();
//hide js pun colors
 $('#colors-js-puns option[value="cornflowerblue"]').hide();
 $('#colors-js-puns option[value="darkslategrey"]').hide();
 $('#colors-js-puns option[value="gold"]').hide();

 //hide i love js colors
 $('#colors-js-puns option[value="tomato"]').hide();
 $('#colors-js-puns option[value="steelblue"]').hide();
 $('#colors-js-puns option[value="dimgrey"]').hide();





 $('#design').on('change', function(e){

    let select = $(this).val();

   if (select === 'js puns') {
 
   
   $('#colors-js-puns').show();
   $('#colors-js-puns option[value="cornflowerblue"]').show().attr('selected','selected');
   $('#colors-js-puns option[value="darkslategrey"]').show();
   $('#colors-js-puns option[value="gold"]').show();

   $('#colors-js-puns option[value="tomato"]').hide().removeAttr("selected");
   $('#colors-js-puns option[value="steelblue"]').hide();
   $('#colors-js-puns option[value="dimgrey"]').hide();
  
   
   }
   // need to get cornflower to not show initially
else if (select === 'heart js') {
    $('#colors-js-puns').show();
    //$('#colors-js-puns option[value="cornflowerblue"]').attr('disabled','disabled');
    $('#colors-js-puns option[value="tomato"]').show().attr('selected','selected');
    $('#colors-js-puns option[value="steelblue"]').show();
    $('#colors-js-puns option[value="dimgrey"]').show();

    $('#colors-js-puns option[value="cornflowerblue"]').hide().removeAttr("selected");
   $('#colors-js-puns option[value="darkslategrey"]').hide();
   $('#colors-js-puns option[value="gold"]').hide();

}
  else

  {
    $('#colors-js-puns').hide();
    $('#colors-js-puns option[value="tomato"]').hide();
    $('#colors-js-puns option[value="steelblue"]').hide();
    $('#colors-js-puns option[value="dimgrey"]').hide();

    $('#colors-js-puns option[value="cornflowerblue"]').hide();
   $('#colors-js-puns option[value="darkslategrey"]').hide();
   $('#colors-js-puns option[value="gold"]').hide();

  }

});

 /*
 


*/