window.onload = function() {
    document.querySelector('.upload input[type="file"]').addEventListener('change', function() {
        document.querySelector('.upload-path').value = this.value.replace('C:\\fakepath\\', '');
    });
}
