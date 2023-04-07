$('.copy_code').on("click", function(){
    var element = $('.code_to_copy');
    var text = $(element).clone().find('br').prepend('\r\n').end().text()
    element = $('<textarea>').appendTo('body').val(text).select()
    document.execCommand('copy')
    element.remove()
    $('.copy_code').html('Copied.');
})
$(document).on('input', '.slider', function() {
    
    $('#type__bs__hl').val($('#slider__bs__hl').val());
    $('#type__bs__vl').val($('#slider__bs__vl').val());
    $('#type__bs__br').val($('#slider__bs__br').val());
    $('#type__bs__sr').val($('#slider__bs__sr').val());
    $('#type__bs__so').val($('#slider__bs__so').val());
    $('.copy_code').html('Copy code');
    setExamples($('#slider__bs__hl').val(),$('#slider__bs__vl').val(),$('#slider__bs__br').val(),$('#slider__bs__sr').val(),$('#colorpicker_shadow').val(),$('#slider__bs__so').val());
});
$('.type').on('input',function(e){
    $('#slider__bs__hl').val($('#type__bs__hl').val());
    $('#slider__bs__vl').val($('#type__bs__vl').val());
    $('#slider__bs__br').val($('#type__bs__br').val());
    $('#slider__bs__sr').val($('#type__bs__sr').val());
    $('#slider__bs__so').val($('#type__bs__so').val());
    $('.copy_code').html('Copy code');
    setExamples($('#type__bs__hl').val(),$('#type__bs__vl').val(),$('#type__bs__br').val(),$('#type__bs__sr').val(),$('#colorpicker_shadow').val(),$('#type__bs__so').val());
});
$("#which_set__bs").change(function() {
    $('.copy_code').html('Copy code');
    setExamples($('#type__bs__hl').val(),$('#type__bs__vl').val(),$('#type__bs__br').val(),$('#type__bs__sr').val(),$('#colorpicker_shadow').val(),$('#type__bs__so').val());
});
$('#colorpicker_shadow').on('input',function(e){
    $('.copy_code').html('Copy code');
    setExamples($('#type__bs__hl').val(),$('#type__bs__vl').val(),$('#type__bs__br').val(),$('#type__bs__sr').val(),$('#colorpicker_shadow').val(),$('#type__bs__so').val());        
    $('#slider__bs__so').css('background','linear-gradient(90deg, #ffffff 0%, '+$(this).val()+' 100%)');
});
$('#colorpicker_bg').on('input',function(e){
    $('.copy_code').html('Copy code');
    $('.example_bg').css('background-color',$(this).val());
});
$('#colorpicker_box').on('input',function(e){
    $('.copy_code').html('Copy code');
    $('.example_div').css('background-color',$(this).val());            
});
function setExamples(hl, vl, br, sr, sc, so){
    so /= 100;
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sc);
    var temp;
    
    if(hl > 0 && vl > 0 && sr == 0 && br == 0){
        temp = hl +'px '+ vl +'px rgba(' + parseInt(rgb[1], 16) +','+parseInt(rgb[2], 16)+','+parseInt(rgb[3], 16)+','+so+')';
    }
    else if(hl > 0 && vl > 0 && sr == 0){ 
        temp = hl +'px '+ vl +'px '+ br +'px rgba(' + parseInt(rgb[1], 16) +','+parseInt(rgb[2], 16)+','+parseInt(rgb[3], 16)+','+so+')';
    }
    else{
        temp = hl +'px '+ vl +'px '+ br +'px '+ sr +'px rgba(' + parseInt(rgb[1], 16) +','+parseInt(rgb[2], 16)+','+parseInt(rgb[3], 16)+','+so+')';
    }

    if($('#which_set__bs').is(':checked')){
        temp = 'inset '+ temp;
        $('.example_div').css('box-shadow', temp);
        $('.code_to_copy').html('box-shadow: ' + temp + ';<br>-webkit-box-shadow: ' + temp + ';<br>-moz-box-shadow: '+ temp +';');
    }
    else{
        $('.example_div').css('box-shadow', temp);
        $('.code_to_copy').html('box-shadow: ' + temp + ';<br>-webkit-box-shadow: ' + temp + ';<br>-moz-box-shadow: '+ temp +';');  
    }
    
}