

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
 
   
   } else {
    othTitle.hide();

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
var totalDiv = $(".activities").append('<div class="total">Total: $0</div>');
var totalDivText = $('.total').text();
var TotalDivVal = parseInt((totalDivText.split('$')[1]));

// activity event handler when checking a box
$(activity).on('change', function(e){


var label=$(this).prop("labels");
var      text = $(label).text();
 var checkedActivity = $( "input:checked" );     
var ischecked= $(this).is(':checked');
const checkbox = $(event.target).parent().text();

var amount = parseInt((text.split('$')[1]));
    let total = 0
   







  


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
   
   total = (total+ parseInt(amount));
   $('.total').text(total);

}
//end if checked loop


// if check box was unchecked
   if(!ischecked){

    
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
   
                total = (total- parseInt(amount));
                $('.total').text(total);
}
//end of unchecked loop


});
     
//keep track of price


   
//Payment Information
// default select credit card method
$('#payment option[value="credit card"]').prop('selected', true);

//hide credit card div if bitcoin or paypal is chosen



$('#payment').on('change', function(e){

    let select = $(this).val();


if (select === "credit card") {

    $("#credit-card").show();

    $("p").first().hide();

    $("p").last().hide();

} else if (select === "paypal") {

    $("p").first().show();

    $("p").last().hide();

    $("#credit-card").hide();

    

} else if (select === "bitcoin") {

    $("p").last().show();

    $("p").first().hide();

    $("#credit-card").hide();

}
else if (select === 'select_method') {

    $("p").last().hide();

    $("p").first().hide();

    $("#credit-card").hide();

}


   
});

/*
Form validation
If any of the following validation errors exist, prevent the user from submitting the form: 
-Name field can't be blank.
-Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
-User must select at least one checkbox under the "Register for Activities" section of the form.
-If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted. 
-Credit Card field should only accept a number between 13 and 16 digits.
-The Zip Code field should accept a 5-digit number.
-The CVV should only accept a number that is exactly 3 digits long.
*/




 
//Validate form


    let name= $('#name');
    let email =$('#mail');
    var ck_box = $('.activities label').find('input[type="checkbox"]:checked').length;
    const emailPattern =  /^[^@\s]+@[^@\s.]+\.[a-z]{1,256}$/i;
    let cc =$("#cc-num");
    let ccLength= cc.val().length;
    let zip = $("#zip");
    let zipLength= zip.val().length;
    let cvv = $("#cvv");
    let cvvLength = cvv.val().length;
  
     
   
   const validateName =function(){
    if ( name.val()=== ''  || name.val()=== "null" ){
        
        $(name).css("border", "5px solid red");
        
         return false;
            }
            else{
                $(name).css("border", "");
              
           return true;

            }

        };

const validateEmail = function(){
   
        
    if((emailPattern.test(email.val()))){
       
    
        $(email).css("border", "");
        return true;
       
      
      } 
     else {
      
        $(email).css("border", "5px solid red");
        return false;

     }

};








      const validateActivity = function(){
         
        
         if($('.activities label').find('input[type="checkbox"]:checked').length === 0){
           
            $('.activities').css("border", "5px solid red");
            return false;
          } 
         else {
           
            $('.activities').css("border", "");
            return true;
  
         }
        };



        const validateCC = function()
        {
           
            if (13 <= cc.val().length && cc.val().length <= 16){
                $(cc).css("border", "");
               
                return true;
               
                    }
                    else{
                        $(cc).css("border", "5px solid red");
                      
                         return false;
        
                    }
        
                };
        

                const validateZip = function()
                {
                   

                    if (zip.val().length=== 5){
                        $(zip).css("border", "");
                        
                        return true;
                       
                            }
                            else{
                                $(zip).css("border", "5px solid red");
                               
                                 return false;
                
                            }
                
                        };
               
                        const validateCVV = function()
                        {
                            

                            if (cvv.val().length=== 3){
                                $(cvv).css("border", "");
                                //console.log('you entered a valid CVV');
                                return true;
                               
                                    }
                                    else{
                                        $(cvv).css("border", "5px solid red");
                                       
                                         return false;
                        
                                    }
                        
                                };
                                
                        





// let user submit form unless there are errors


$('button').on('click', function (e) {

    validateName();
 validateActivity();
 validateCC();
 
 validateEmail();

 validateZip();
 validateCVV();

    if (validateName() === false || validateActivity()=== false || validateCC()=== false ||validateZip()=== false || validateCVV()===false|| validateEmail()=== false ) {

        e.preventDefault();

    } else {

        ("button").submit();

    }

    

});


