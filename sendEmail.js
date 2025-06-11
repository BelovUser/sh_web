document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.querySelector(".email");
    const msg = document.getElementById("msg");
    const email = emailInput.value;

    let url = 'https://api.sheety.co/a59775132ca7bc078fb092c47ebe8cba/sh/list1';
    let body = {
        list1: {
            email: `${email}`
        }
    }
    fetch(url, {
        method: 'POST',
        headers: {  "Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    msg.textContent = "Thanks! We will keep you updated.";
    msg.classList.add("visible");
    emailInput.value = "";
});