$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            minlength: 3,
            required: true,
            file: {
                extension: doc|pdf,
            },
            author: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            headline: "The minimun legth is 3 characters",
            file: {
                required: "Please enter the document",
                extension: "Please enter a document type doc or pdf"
            },
            author: {
                required: "Please enter an author",
                minlength: "The minimun lenght is 3 characters"
            }
        }
    });
});