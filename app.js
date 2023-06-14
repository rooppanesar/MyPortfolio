(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// function sendEmail(){
//     var params = {
//         name: document.getElementById("name").value , 
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value
//     }

//     const serviceID = "service_hi0fuye";
//     const templateID = "template_h1fgsoj";
    
//     emailjs
//     .send(serviceID, templateID, params)
//     .then(
//         res =>{
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("subject").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message sent successfully");
//         }
//     )
//     .catch((err) => console.log(err));
// }



// function sendEmail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       subject: document.getElementById("subject").value,
//       message: document.getElementById("message").value
//     };
  
//     emailjs.send('service_hi0fuye', 'template_h1fgsoj', params)
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert("Your message sent successfully");
//         // Clear the form fields
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("message").value = "";
//       }, function(error) {
//         console.log('FAILED...', error);
//       });
//   }
  