

//focus on first field on load


$( document ).ready(function() {
    $( "#name" ).focus();
  });


  //JobRole section
  const othTitle = $('#oth_title').hide();
  
 $('#title').on('change', function(e){

    let select = $(this).val();

   if (select === 'other') {
       
    
    othTitle.show();
 
   
   }

  

});




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
 
else if (select === 'heart js') {
    $('#colors-js-puns').show();
    
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

//”Register for Activities” section

// disable activities on the same day and time
//Tuesday 9am-12pm //Tuesday 1pm-4pm // Wednesday 9am-12pm// Wednesday 1pm-4pm

var actString1 = $('.activities label:contains("Tuesday 9am-12pm")').find("input[type='checkbox']");
var actString2 = $('.activities label:contains("Tuesday 1pm-4pm")').find("input[type='checkbox']");
var actString3 = $('.activities label:contains("Wednesday 9am-12pm")').find("input[type='checkbox']");
var actString4 = $('.activities label:contains("Wednesday 1pm-4pm")').find("input[type='checkbox']");

var activity = $('.activities label').find("input[type='checkbox']");

// activity event handler when checking a box
$(activity).on('change', function(e){

let total = parseInt(0);
var label=$(this).prop("labels");
var      text = $(label).text();
 var checkedActivity = $( "input:checked" );     
   


 var ischecked= $(this).is(':checked');
 
 
// if the checkbox was checked
 if(ischecked)
   {

  

          if (text.includes("Tuesday 9am-12pm") ) {
            actString1.attr("disabled", true);
           checkedActivity.attr("disabled", false);
           
          
           }
        
   else if (text.includes("Tuesday 1pm-4pm")     )

   {
    actString2.attr("disabled", true);
    checkedActivity.attr("disabled", false);

    

   }
   else if (text.includes("Wednesday 9am-12pm")     )

   {
       
    actString3.attr("disabled", true);
    checkedActivity.attr("disabled", false);
   }
   else if (text.includes("Wednesday 1pm-4pm")     )

   {
    actString4.attr("disabled", true);
    checkedActivity.attr("disabled", false);

   }
   var amount = parseInt((text.split('$')[1]));
   
   total = (total+ parseInt(amount));
   console.log(total);

}
//end if checked loop


// if check box was unchecked
   if(!ischecked){

    alert('uncheckd ');
        if (text.includes("Tuesday 9am-12pm") ) {
                actString1.attr("disabled", false);


                checkedActivity.attr("disabled", false);
                        }

        else if (text.includes("Tuesday 1pm-4pm")     )

            {
            actString2.attr("disabled", false);
            checkedActivity.attr("disabled", false);

            }
        else if (text.includes("Wednesday 9am-12pm")     )

            {

            actString3.attr("disabled", false);
            checkedActivity.attr("disabled", false);
            }
        else if (text.includes("Wednesday 1pm-4pm")     )

                {
            actString4.attr("disabled", false);
            checkedActivity.attr("disabled", false);

                }
                var amount = parseInt((text.split('$')[1]));
   
                total = (total+ parseInt(amount));
                console.log(total);
}
//end of unchecked loop


});
     

