document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderFormBread').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your bread order is being processed');
    });

    document.getElementById('orderFormCupcakes').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your cupcake order is being processed');
    });

    document.getElementById('orderFormSmoothies').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your smoothie order is being processed');
    });
});
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Show alert
    alert("Order is being processed");
}