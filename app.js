let sentenceArray = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA','oat itain oat tain nate eate tea anne inant nean','itant eate anot eat nato inate eat anot tain eat','nee ene ate ite tent tiet ent ine ene ete ene ate' ];
let sentenceIndex = 0; // This should be equal to which sentence they're on.
let letterIndex = 0;
const feedbackDiv = $("#feedback");


console.log(sentenceArray[sentenceIndex][letterIndex])

// hiding uppercase keyboard
$(document).ready(function(){
    $('#keyboard-upper-container').hide();

});

// when shift is held dwn, display upper case keyboard
$(document).keydown( function(e){
    if(e.keyCode == 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();

    };

    if(sentenceArray[sentenceIndex][letterIndex] == e.key) {
        feedbackDiv.append($("<span class='glyphicon glyphicon-ok'></span>"))
    } else {
        feedbackDiv.append($("<span class='glyphicon glyphicon-remove'></span>"))
        
    }
    letterIndex++

    if(sentenceArray == 0){
        sentenceArray
    }

});

// when shift is released, lowercase keyboard displays again
$(document).keyup( function(e){
    if(e.keyCode == 16) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();

    };
});

// displays in the browser when a key is pressed. How to display which they pressed in ASCII 
$(document).keypress(function(){
    alert( "you selected" + event.keyCode)
});

$('#sentence').html('<span>'+sentenceArray+'</span>');


// when keys are pressed it show green check and red x but doesnt restart
$(document).keypress(function(){
    let $keyPressed = $('#' + e.which);
    $keyPressed.css('background-color', 'yellow');
});


// trying to indicate when the user types an incorrect letter in the array 
$(document).keypress(function(){
    for ( i = 0; i < sentenceIndex.length; i++){
        if(e.which == sentenceIndex[i].innerText){
            if(event.keyCode != sentenceArray)
            console.log(" this is not in the sentence array, try again")
        }
    }
});


























