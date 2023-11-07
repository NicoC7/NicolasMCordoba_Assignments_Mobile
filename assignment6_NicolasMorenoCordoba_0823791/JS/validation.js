$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            "full-name": "required",
            "dob": "required",
            "gender": "required",
            "email": {
                required: true,
                email: true
            },
            "phone": {
                required: true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
            },            
            "address": "required",
            "cc-number": {
                required: true,
                pattern: /^[0-9]{10}$/
            },
            "expiration-date": "required",
            "cvv": {
                required: true,
                pattern: /^[0-9]{3}$/
            }
        },
        messages: {
            "full-name": "Please enter your full name",
            "dob": "Please enter your date of birth",
            "gender": "Please select your gender",
            "email": {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            "phone": {
                required: "Please enter a phone number",
                pattern: "Please enter a valid US phone number (e.g., 123-456-7890)"
            },
            "address": "Please enter your address",
            "cc-number": {
                required: "Please enter a valid credit card number",
                pattern: "Credit card number must be 10 digits long"
            },
            "expiration-date": "Please enter the expiration date",
            "cvv": {
                required: "Please enter your CVV",
                pattern: "CVV must be 3 digits long"
            }
        }
    });
});
