var verbing, holiday, person1, place, adj1, adj2, animals, noun1, person2, verb1, verbed, adj3, verb2, nouns, pastVerb, noun2, noun3, person3, person4;

var img = '<img id="header" src="" alt="">'
var imgSrc = './img/MadLibs-Logo.png'
var main = `<div id='main'>
<h1>Please enter some inputs!</h1>
<form action="">
    <label for="verbing">Verb/ing:</label>
    <input id="verbing" type="text" name="verbing" value="">
    <label for="holiday">Holiday:</label>
    <input id="holiday" type="text" name="holiday" value="">
    <label for="person1">Person:</label>
    <input id="person1" type="text" name="person1" value="">
    <label for="place">Place:</label>
    <input id="place" type="text" name="place" value="">
    <label for="adj1">Adjective:</label>
    <input id="adj1" type="text" name="adj1" value="">
    <label for="adj2">Adjective:</label>
    <input id="adj2" type="text" name="adj2" value="">
    <label for="animals">Animal Plural:</label>
    <input id="animals" type="text" name="animals" value="">
    <label for="noun1">Noun:</label>
    <input id="noun1" type="text" name="noun1" value="">
    <label for="person2">Person:</label>
    <input id="person2" type="text" name="person2" value="">
    <label for="noun2">Noun:</label>
    <input id="noun2" type="text" name="noun1" value="">
    <label for="verb1">Verb:</label>
    <input id="verb1" type="text" name="verb1" value="">
    <label for="verbed">Verb/ed:</label>
    <input id="verbed" type="text" name="verbed" value="">
    <label for="adj3">Adjective:</label>
    <input id="adj3" type="text" name="adj3" value="">
    <label for="verb2">Verb:</label>
    <input id="verb2" type="text" name="verb2" value="">
    <label for="nouns">Noun(plural):</label>
    <input id="nouns" type="text" name="nouns" value="">
    <label for="pastVerb">Past Verb:</label>
    <input id="pastVerb" type="text" name="pastVerb" value="">
    <label for="noun2">Noun:</label>
    <input id="noun2" type="text" name="noun2" value="">
    <label for="noun3">Noun:</label>
    <input id="noun3" type="text" name="noun2" value="">
    <label for="person3">Person:</label>
    <input id="person3" type="text" name="person3" value="">
    <label for="person4">Person:</label>
    <input id="person4" type="text" name="person4" value="">
    <button class="submit">MadLib!</button>
</form>
</div>`



function render() {
    $('body').prepend(img);
    $('#header').attr('src', imgSrc);
    $('#header').after(main);

    $('.submit').click(function(e){
        e.preventDefault();

        verbing = $('#verbing').val();
        holiday = $('#holiday').val();
        person1 = $('#person1').val();
        place = $('#place').val();
        adj1 = $('#adj1').val();
        adj2 = $('#adj2').val();
        animals = $('#animals').val();
        noun1 = $('#noun1').val();
        person2 = $('#person2').val();
        noun2 = $('#noun2').val();
        verb1 = $('#verb1').val();
        verbed = $('#verbed').val();
        adj3 = $('#adj3').val();
        verb2 = $('#verb2').val();
        nouns = $('#nouns').val();
        pastVerb = $('#pastVerb').val();
        noun2 = $('#noun2').val();
        noun3 = $('#noun3').val();
        person3 = $('#person3').val();
        person4 = $('#person4').val();

        var madLibs = `Ok so I was <span class='red'>${verbing}</span>! I'm an adult, 
        I'm supposed to snoop, especially around 
        <span class='red'>${holiday}</span> time! What <span class='red'>${person1}</span> doesn't 
        snoop? I just so happened to be in our 
        <span class='red'>${place}</span>. Normally I'm not up there, it's 
        <span class='red'>${adj1}</span> and <span class='red'>${adj2}</span>. Plus there are 
        <span class='red'>${animals}</span>, yuck! I couldnt help myself! 
        There it was right by my little sister's 
        old <span class='red'>${noun1}</span>. Guess <span class='red'>${person2}</span> didn't think 
        I would <span class='red'>${verb1}</span> it. I <span class='red'>${verbed}</span> it, 
        it felt <span class='red'>${adj3}</span>. Should I <span class='red'>${verb2}</span> it? 
        Looking closer I saw some <span class='red'>${nouns}</span>. 
        I got even closer and <span class='red'>${pastVerb}</span> a 
        <span class='red'>${noun2}</span>! The hidden <span class='red'>${noun2}</span> was alive! 
        A yelp came from the <span class='red'>${noun2}</span>. I opened the <span class='red'>${noun2}</span> 
        and to my surprise a <span class='red'>${noun3}</span> was inside! 
        Guess who else was hidden in the <span class='red'>${place}</span>? 
        <span class='red'>${person3}</span> and <span class='red'>${person4}</span> just knew I was 
        <span class='red'>${verbing}</span>!`;
    
        var html = `<img src='../img/titleMad.PNG'>\n
        <h3>${madLibs}</h3>\n
        <button class='again'>Play Again?</button>`
    
        $('#main').fadeOut('slow', function() {
            $('#main').html(html);
            $('#main').fadeIn('slow');

            $('.again').click(function(){
                location.reload();
            })
        });
    });
}
render();







