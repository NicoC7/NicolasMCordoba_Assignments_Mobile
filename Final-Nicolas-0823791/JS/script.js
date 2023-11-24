$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            headline: {
            minlength: 3,
            required: true
            },
            file: {
                required: true,
                extension: "doc|pdf",
            },
            author: {
                required: true,
                minlength: 3
            },
            date: {
                required: true
            }
        },
        messages: {
            headline: {
                minlength: "The minimun legth is 3 characters",
                required: "Please enter a headline"
            },
            file: {
                required: "Please enter the document",
                extension:"select valied input file format"
            },
            author: {
                required: "Please enter an author",
                minlength: "The minimun lenght is 3 characters"
            },
            date: {
                required: "Please enter a date"
            }
        }
    });
});