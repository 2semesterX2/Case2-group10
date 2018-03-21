$(document).ready(function(){ // when the doc is ready
    
    
    const sections = $('section'); // find all sections
    
    sections.addClass('invisible'); // hide 'em all
    sections.first().removeClass('invisible'); // show the first one
    

    $(document).on('click', 'a[href^="#"]', function (event) { // when you click a # link
        
        event.preventDefault(); // prevent the link

        sections.addClass('invisible'); // hide all sections
        $($.attr(this, 'href')).removeClass('invisible'); // show the target one
    });
    
    const first = "The Old Kingdom";
    const second = "Giza";
    const third = "Cruel and heretic";
    
    $(document).click(function(event) {
    var text = $(event.target).text();
    var target = event.target;
});
    
    function rw(text, target) {
        if (text === first || text === second || text === third) {
            target.style.backgroundColor = "green";
        }
    }
        
    $("section#six p").click(rw);
    
    
});
