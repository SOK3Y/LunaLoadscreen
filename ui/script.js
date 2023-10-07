var play = false;
var isLoaded = false;
var myAudio = document.getElementById("music");
var resname = 'LunaLoadscreen'
var infoActive = false;

function hidels() {
    $.post('https://' + resname + '/hidels', JSON.stringify({}));
}

window.addEventListener('message', (event) => {
    let data = event.data
    if (data.stop == true){
        var loadMessage = $('.bottom-container .text a')
        loadMessage.fadeOut(200)
        setTimeout(() => {
            loadMessage.html('Zasoby serwera załadowane');
            loadMessage.fadeIn(200);
            setTimeout(() => {
                loadMessage.fadeOut(200);
                setTimeout(() => {
                    loadMessage.html(`<button id='joinServer'>Dołącz do gry</button>`);
                    $('.bottom-container').addClass('loaded');
                    loadMessage.fadeIn(200);
                    isLoaded = true;
                }, 200);
            }, 1500);
        }, 200);
    }
})

$(document).on('click', '#joinServer', function() {
    if (isLoaded) {
        hidels()
    }
});

myAudio.volume = 0.2;

function onKeyDown(event) {
    switch (event.keyCode) {
        case 27:
            if (infoActive) {
                infoActive = false;
                $('#info').removeClass('info_active');
                $('.info-container').fadeOut(200);
                setTimeout(() => {
                    $('.logo').fadeIn(200)
                }, 200);
            }
            break;
        case 32: //SpaceBar                    
            if (play) {
                myAudio.pause();
                play = false;
            } else {
                myAudio.play();
                play = true;
            }
            break;
    }
    return false;
}

window.addEventListener("keydown", onKeyDown, false);