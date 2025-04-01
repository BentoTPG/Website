function copyText() {
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = "bentotpg"; // Text to copy
    document.body.appendChild(tempInput);

    // Select the text field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the input
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally alert the user
    alert("Copied: bentotpg");
}