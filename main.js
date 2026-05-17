document.addEventListener("DOMContentLoaded", () => {

    // Select all custom buttons
    const buttons = document.querySelectorAll(".btn-custom");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".card");
            const subject = card.querySelector("h2").textContent;
            const activity = card.querySelector("h5").textContent;

            // Actions depending on button text
            if (button.textContent.includes("Take")) {
                alert(`Opening activity:\n${subject} - ${activity}`);
            }

            else if (button.textContent.includes("Submit")) {
                alert(`Submitting project for:\n${subject}`);
            }

            else if (button.textContent.includes("Play")) {
                alert(`Playing video clip for:\n${subject}`);
            }

        });

    });

});