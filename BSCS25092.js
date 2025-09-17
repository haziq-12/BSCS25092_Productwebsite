function greet(){
    alert("Hello, welcome to Gofra");
}
greet();


document.getElementById("footer").innerHTML = new Date().getFullYear();

function instock(id)
{
 let check=document.getElementById(id).textContent;
 if(check.includes('in stock'))
 {
    alert("Item is out of stock");
 }
 else
 {
    alert("Item is in stock");
 }
}
 function validateForm() {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            if (!name || !email) {
                alert(" Please fill in all fields.");
                return false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert(" Please enter a valid email address.");
                return false;
            }
            alert(" Form submitted successfully!");
            return true; 
        }
        function sendMessage() {
    let input = document.getElementById("userInput");
    let chatWindow = document.getElementById("chatWindow");
    let message = input.value.trim();

    if (message === "") return;
    let userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatWindow.appendChild(userMsg);

    let botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerText = getBotResponse(message.toLowerCase());
    chatWindow.appendChild(botMsg);

    chatWindow.scrollTop = chatWindow.scrollHeight;
    input.value = "";
}

function getBotResponse(userText) {
    if (userText.includes("hello") || userText.includes("hi")) {
        return "Hi there! Welcome to Gofra.";
    } else if (userText.includes("products")) {
        return "We offer shirts of different stuff for summers and winters .";
    } else if (userText.includes("price")) {
        return "Our prices range from Rs. 2000 to Rs. 5000.";
    } else if (userText.includes("location")) {
        return "We are located in Lahore, Pakistan.";
    } else if (userText.includes("email")) {
        return "You can reach us at bscs25092@itu.edu.pk.";
    } else if (userText.includes("contact")) {
        return "Our contact number is 03193840654.";
    } else if (userText.includes("shop")) {
        return "Visit our Products page to explore and shop now!";
    } else {
        return "Sorry, I didn’t understand that. Please ask about products, prices, or contact info.";
    }
}