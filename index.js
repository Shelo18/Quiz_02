document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector(".form-container");
    const submitButton=document.getElementById("submit");
    const submissionsList=document.querySelector(".submissions-list");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name=document.getElementById("name").value;
      const email=document.getElementById("email").value;
      const age=document.getElementById("age").value;
      if (name==="" || email==="" || age==="") {
        alert("შეავსეთ ყველა მოცემული ველი");
        return;
      }

      const submissionItem=document.createElement("div");
      submissionItem.classList.add("submission-item");
      submissionItem.innerHTML= `
        <div class="submission-details">
          <div class="detail-row">
            <p class="detail-label">Name:</p>
            <p class="detail-value">${name}</p>
          </div>
          <div class="detail-row">
            <p class="detail-label">Email:</p>
            <p class="detail-value">${email}</p>
          </div>
          <div class="detail-row">
            <p class="detail-label">Age:</p>
            <p class="detail-value">${age}</p>
          </div>
        </div>
      `;
  
      submissionsList.appendChild(submissionItem);
  
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("age").value="";
    });
  });
  