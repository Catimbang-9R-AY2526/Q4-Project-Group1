// Image Upload Preview Logic
const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.getElementById('fileName');
const avatarPreview = document.getElementById('avatarPreview');

fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        // Update file name text
        fileNameDisplay.textContent = this.files[0].name;

        // Create a file reader to display the image
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Change the inner HTML of the avatar to show the uploaded image
            avatarPreview.innerHTML = `<img src="${e.target.result}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
        }
        
        reader.readAsDataURL(this.files[0]);
    }
});

// Change Password Button Interaction
const changePassBtn = document.getElementById('changePassBtn');

changePassBtn.addEventListener('click', function() {
    alert("Change Password functionality would trigger here.");
});