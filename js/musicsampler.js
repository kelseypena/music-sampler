$(document).ready(function(){
    
    function hideAll() {
        $('#soundtrack1').hide();
        $('#soundtrack2').hide();
        $('#soundtrack3').hide();
        $('#soundtrack4').hide();
        $('#feverTitle').hide();
        $('#prettyoddTitle').hide();
        $('#vicesvirtuesTitle').hide();
        $('#bachelorTitle').hide();
    }
    
    hideAll();
    
    $('.albumCover').click (function() {
        hideAll();
        
    switch ( $(this).attr("id") ) {
        case "fever" :
            $('#soundtrack1').show();
            $('#feverTitle').slideToggle();
            break;
        case "prettyodd" :
            $('#soundtrack2').show();
            $('#prettyoddTitle').slideToggle();
            break;
        case "vicesvirtues" :
            $('#soundtrack3').show();
             $('#vicesvirtuesTitle').slideToggle();
            break;
        case "bachelor" :
            $('#soundtrack4').show();
             $('#bachelorTitle').slideToggle();
            break;
        }
    }); 
    
});
