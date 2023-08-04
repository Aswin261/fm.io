const rating = document.querySelectorAll(".num");
const submit = document.querySelector(".btn");
const tag = document.querySelector(".rating");
rating.forEach((element) => {
  element.addEventListener("click", (ele) => {
    ele.target.classList.toggle("active");
  });
});

submit.addEventListener("click", () => {
  let total = 0,
    val = 0;
  for (let i = 0; i < rating.length; i++) {
    if (rating[i].classList.contains("active")) {
      total += 1;
      val = i;
    }
  }
  if (total === 1) {
    tag.innerHTML = ``;
    const thankyou = document.createElement("div");
    thankyou.classList.add("tq");
    thankyou.innerHTML = `
    <img src="tq.svg" alt=""/>
    <p>You selected ${val + 1} out of 5</p> 
    <h3>Thank you!</h3>
    <p>We appreciate you taking the time to give a rating. If you ever need more support
        ,dont hesitate to get in touch!
    </p>`;
    tag.appendChild(thankyou);
  }
});
