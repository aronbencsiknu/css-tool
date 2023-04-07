$('.copy_code').on("click", function(){
    var element = $('.code_to_copy');
    var text = $(element).clone().find('br').prepend('\r\n').end().text()
    element = $('<textarea>').appendTo('body').val(text).select()
    document.execCommand('copy')
    element.remove()
    $('.copy_code').html('Copied.');
})
$(document).on('input', '.not_all', function() {
    setExamples($('#slider__br__tl').val(), $('#slider__br__tr').val(),$('#slider__br__br').val(),$('#slider__br__bl').val());
    $('#type__br__tl').val($('#slider__br__tl').val());
    $('#type__br__tr').val($('#slider__br__tr').val());
    $('#type__br__br').val($('#slider__br__br').val());
    $('#type__br__bl').val($('#slider__br__bl').val());
    $('.selector_all').css('opacity','0.4');
    $('.copy_code').html('Copy code');
});
$(document).on('input', '#slider__br__all', function() {
    setExamples($('#slider__br__all').val(),$('#slider__br__all').val(),$('#slider__br__all').val(),$('#slider__br__all').val());
    $('.not_all').val($('#slider__br__all').val());
    $('.type').val($('#slider__br__all').val());
    $('.selector_all').css('opacity','1');
    $('.copy_code').html('Copy code');
});

$('.type').on('input',function(e){
    $('#slider__br__tl').val($('#type__br__tl').val());
    $('#slider__br__tr').val($('#type__br__tr').val());
    $('#slider__br__br').val($('#type__br__br').val());
    $('#slider__br__bl').val($('#type__br__bl').val());
    setExamples($('#type__br__tl').val(),$('#type__br__tr').val(),$('#type__br__br').val(),$('#type__br__bl').val());
    $('.selector_all').css('opacity','0.4');
    $('.copy_code').html('Copy code');
});
$('#type__br__all').on('input',function(e){
    $('.slider').val($('#type__br__all').val());
    $('.type').val($('#type__br__all').val());
    setExamples($('#type__br__all').val(),$('#type__br__all').val(),$('#type__br__all').val(),$('#type__br__all').val());
    $('.selector_all').css('opacity','1');
    $('.copy_code').html('Copy code');
});
function setExamples(tl, tr, br, bl){
    var temp;
    if(tl === tr && tl === br && tl === bl){
        temp = tl + 'px';
    }
    else if(tl === br && tr === bl){
        temp = tl +'px ' + tr +'px';
    }
    else if(tr === bl){
        temp = tl +'px '+ tr+'px ' + br + 'px';
    }
    else{
        temp = tl +'px '+ tr +'px '+ br +'px '+ bl +'px';
    }
    
    $('.example_div').css('border-radius', temp);       
    $('.code_to_copy').html('border-radius: '+ temp + ';<br>-moz-border-radius: '+temp+';<br>-webkit-border-radius: ' +temp +';');
}