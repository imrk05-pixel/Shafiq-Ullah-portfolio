// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Contact Form Handler using FormSubmit.co
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            // Using FormSubmit.co with the user's email
            // This requires NO API keys. The user just needs to activate it once via email.
            const ACTION_URL = "https://formsubmit.co/ajax/shafiqkochay53@gmail.com";

            const status = document.getElementById("form-status");
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            // Show loading state
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const data = new FormData(event.target);

            try {
                const response = await fetch(ACTION_URL, {
                    method: "POST",
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "<span class='text-green-400'>Message Sent Successfully!</span>";
                    contactForm.reset();
                    btn.innerHTML = "Sent!";
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        status.innerHTML = "";
                    }, 3000);
                } else {
                    const jsonData = await response.json();
                    if (jsonData.message) {
                        status.innerHTML = "<span class='text-red-500'>" + jsonData.message + "</span>";
                    } else {
                        status.innerHTML = "<span class='text-red-500'>Oops! There was a problem submitting your form</span>";
                    }
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }
            } catch (error) {
                console.error(error);
                status.innerHTML = "<span class='text-red-500'>Network error. Please try again.</span>";
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }
});
