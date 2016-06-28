'use strict';

$('#owl').hide().one("load",function(){
    $(this).fadeIn(5000);
}).each(function(){
    if(this.complete) $(this).trigger("load");
});

$('#happening').hide().one("load",function(){
    $(this).fadeIn(7000);
}).each(function(){
    if(this.complete) $(this).trigger("load");
});

