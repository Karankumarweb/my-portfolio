var typed = new Typed(".typing", {
    strings: ["Java Full Stack Developer", "Spring Boot Developer", "REST API Developer", "Backend Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// contact form -> opens the visitor's mail app with the message prefilled
var cf = document.getElementById("contact-form");
if (cf) {
    cf.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("cf-name").value;
        var email = document.getElementById("cf-email").value;
        var subject = document.getElementById("cf-subject").value || "Portfolio enquiry";
        var msg = document.getElementById("cf-message").value;
        var body = msg + "\n\n" + name + " (" + email + ")";
        window.location.href = "mailto:kk4447058@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
}
