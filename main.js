const CHAT_ID = "1681036866";
const TOKEN = "8442057644:AAGA9rcqIXb4CJCUh6eIuvvuO-QIRyEdhyw";


document.querySelector('.contectForm').addEventListener("submit", function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("message").value;



    const message = `
        📩 Yangi forma:
        👤 Ism: ${name}
        📧 Email: ${email}
        💬 Comment: ${comment}
    `;


    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(res => {
        alert("Xabar yuborildi! ❤️")
        console.log(res);
        document.querySelector(".contectForm").reset();
        
    })
    .catch(err => {
        alert("Xatolik ❌");
        console.error(err)
    })
})
