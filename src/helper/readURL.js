function readURL(event, ref) {

    let input = event.target;

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            ref.current.src = e.target.result
        };
        reader.readAsDataURL(input.files[0]);
    }
}