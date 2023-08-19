// const rating = document.querySelectorAll(".num");
// const submit = document.querySelector(".btn");
// const tag = document.querySelector(".rating");
// rating.forEach((element) => {
//   element.addEventListener("click", (ele) => {
//     ele.target.classList.toggle("active");
//   });
// });

// submit.addEventListener("click", () => {
//   let total = 0,
//     val = 0;
//   for (let i = 0; i < rating.length; i++) {
//     if (rating[i].classList.contains("active")) {
//       total += 1;
//       val = i;
//     }
//   }
//   if (total === 1) {
//     tag.innerHTML = ``;
//     const thankyou = document.createElement("div");
//     thankyou.classList.add("tq");
//     thankyou.innerHTML = `
//     <img src="tq.svg" alt=""/>
//     <p>You selected ${val + 1} out of 5</p>
//     <h3>Thank you!</h3>
//     <p>We appreciate you taking the time to give a rating. If you ever need more support
//         ,dont hesitate to get in touch!
//     </p>`;
//     tag.appendChild(thankyou);
//   }
// });

const form = document.querySelector("form");
const mail = document.querySelector("#mail");
const label = document.querySelector("label");
let err = null;
const container = document.querySelector(".container");
const success = document.querySelector(".success");
// const id = document.querySelector("b");
form.addEventListener("submit", (e) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@.*\.com$/;
  e.preventDefault();

  if (!emailPattern.test(mail.value) && !err) {
    err = document.createElement("span");
    err.innerHTML = `Valid email required`;
    mail.classList.add("active");
    label.appendChild(err);

    mail.addEventListener("focus", () => {
      if (err) {
        label.removeChild(err);
        mail.classList.remove("active");
        err = null;
      }
      sessionStorage.clear();
    });
  } else {
    sessionStorage.setItem("mail", mail.value);
    window.location.href = "./success.html";
  }
});
