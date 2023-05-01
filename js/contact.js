export function sendMail(API_KEY) {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all the fields before sending the email.");
    return;
  }

  let params = {
    name: name,
    email: email,
    message: message,
  };
  const serviceID = "service_swqxnsq";
  const templateID = "template_19j455q";

  emailjs.init(API_KEY);

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      alert("Email sent successfully!");
    })
    .catch((err) => console.log(err));
}