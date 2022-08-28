"use strict";

$(function () {
    $('#root').hide();

    // here we can apply use DSPLAY values to your template
    var u = dsplayTemplateUtils;

    // to get the entire data object use
    // in development mode, it will use the values from your dsplay-data.js file
    // in production mode, it will get the values from the DSPLAY Android app
    var data = JSON.parse(u.DSPLAY.getData());
    console.log('data', data);

    // you can algo get individual values using the built-in shortcuts
    console.log('media', u.media);
    console.log('template', u.template);
    console.log('config', u.config);

    $('.title').html(u.template.title);

    var opacity = parseFloat(u.template.text_opacity);
    $('.text')
        .html(u.media.name)
        .css({ opacity });

    $('img').attr({ src: u.template.image });

    // dsplayTemplateUtils can make our lives easier
    // use the method tval to get string values with a optional default value
    // the methods tbval, tival, tfval are useful for non-string values (boolean, integer, float)

    var fontSize = u.tval('base_font_size', '1.5em');
    $(document.body).css({ fontSize });

    var titleOpacity = u.tfval('title_opacity', 1);
    $('.title').css({ opacity: titleOpacity });

    $('#root').fadeIn();
});