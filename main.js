

$(document).ready(function () {

    let newImage,exitImage;
    $("img").click(function () {

        newImage = $('<img />', {
            id: 'imgId',
            src: this.src,
            alt: 'Alt text'
        });


        $('body').append(newImage);

        $(newImage).animate({
            'width': "700px",
            'height': "650px",
            'z-index': '3',
            'position': 'fixed',
            'display': 'block',
            'margin-top': '20px',
            'margin-left': '354px',



        }).append($('div'));
    })
    
    $('img').click(function () {

        exitImage = $('<img />', {
            src: 'exit.png',
            alt: 'Alt text'
        });
        $('body').append(exitImage);

        $(exitImage).animate({
            'width': "40px",
            'height': "40px",
            'z-index': '4',
            'position': 'absolute',
            // 'display':'block',
            'padding-top': '40px',
            'margin-left': '0px',



        }).append($('div'));

        $(exitImage).click(function () {
            $(newImage).remove();
            $(exitImage).remove();


            
    
        })
    })

  


});



 // let divImag;
    // $("img").click(function () {
    //     divImag = $('<div></div>');

    //     $('body').append(divImag);
    //     $(divImag).animate({
    //         'width': "700px",
    //         'height': "650px",
    //         'z-index': '3',
    //         'position': 'fixed',
    //         'display': 'block',
    //         'margin-top': '20px',
    //         'margin-left': '354px',


    //     }).append($('div'));

    // })




