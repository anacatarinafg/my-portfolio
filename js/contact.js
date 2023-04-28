function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_swqxnsq";
  const templateID = "template_19j455q";

  console.log(serviceID);
  console.log(templateID);
  console.log("ola");
  console.log(params);
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      alert("Email sent successfully!");
    })
    .catch((err) => console.log(err));
}
