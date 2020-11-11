function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => handleResults(responseJson));
}

function handleResults(responseJson) {
    console.log(responseJson);
    $('.results').append(`<img src="${responseJson.message}" class="img-results" alt="picture of dog">`);
    $('.results').removeClass('hidden');
}

function handleForm() {
    console.log('Waiting for submit.');
    $('form').submit(function(event) {
        $('.img-results').remove();
        event.preventDefault();
        let num = $('#quantity').val();
        console.log(`Generating ${$('#quantity').val()} random dog pictures.`);
        for (let i = 0; i < num; i++){
            getRandomDog();
        }
    });
}

$(handleForm());