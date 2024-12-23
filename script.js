function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission to allow AJAX

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Create a request object for AJAX submission
    const request = new XMLHttpRequest();
    request.open('POST', form.action, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // Display success popup
                showPopup('Success! Your message has been sent.');
            } else {
                // Display error popup
                showPopup('Error! Something went wrong. Please try again.');
            }
        }
    };
    request.send(formData);
}

function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
