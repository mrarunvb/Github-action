document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const buttonElement = document.getElementById('changeMessage');
    
    messageElement.textContent = 'Hello from JavaScript!';
    
    buttonElement.addEventListener('click', function() {
        messageElement.textContent = 'You clicked the button! ' + new Date().toLocaleTimeString();
    });
});