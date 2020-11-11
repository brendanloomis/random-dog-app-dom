function getRandomDog(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => handleResults(responseJson));
}

function handleResults(responseJson) {
    console.log(responseJson);
    $('img').remove();
    for (let i = 0; i < responseJson.message.length; i++){
        $('.results').append(`<img src="${responseJson.message[i]}" class="img-results" alt="picture of dog">`);
    };
    $('.results').removeClass('hidden');
}

function handleForm() {
    console.log('Waiting for submit.');
    $('form').submit(function(event) {
        $('.img-results').remove();
        event.preventDefault();
        let num = $('#quantity').val();
        console.log(`Generating ${num} random dog pictures.`);
        getRandomDog(num);
    });
}

$(handleForm());