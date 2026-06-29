emailjs.init("SDA-wbBq_I1h4YHgk");

const form = document.getElementById("contact-form");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark"); 
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
        "service_xhtwfp1",
        "template_r32twez",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});