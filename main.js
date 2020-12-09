

$(document).ready(function () {

    let newImage, exitImage, divImage;
    $("img").click(function () {


        //1-create new div
        //2-append to body up htmldiv
        //3-create Images
        //4-append images to div
        //

        //create div 

        divImage = $('<div></div>');
        divImage.addClass("colors");
        $('#flw').append(divImage);
        $(divImage).animate({
            'width': "786px",
            'height': "735px",
            'z-index': '3',
            'position': 'absloute',
            'display': 'block',
            'margin-top': '-713px',
            'margin-left': '-50px',
            'background': 'red'
        })



        //create newimage with this.src

        newImage = $('<img />', {
            id: 'imgId',
            src: this.src,
            alt: 'Alt text'
        });

        $(divImage).append(newImage);

        $(newImage).animate({
            'width': "700px",
            'height': "650px",
            'z-index': '1',
            'position': 'fixed',
            'display': 'block',
            'margin-top': '20px',
            'margin-left': '20px',

        })

        //create exit button to remov slider gallary


        exitImage = $('<img />', {
            src: 'exit.png',
            alt: 'Alt text'
        });

        $(divImage).append(exitImage);
        $(exitImage).animate({
            'width': "40px",
            'height': "40px",
            'z-index': '3',
            'position': 'absolute',
            // 'display':'block',
            'padding-top': '-651px',
            // 'margin-top': '-725px',
            'margin-left': '-54px',

        })



        //start exit event

        $(exitImage).click(function () {

            $(divImage).remove();

        })

    })
    // end creation of slider gallary 








});









