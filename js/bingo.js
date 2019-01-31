function showModal(description) {
    var modal = document.getElementById("bingoModal");
    modal.style.display = "flex";

    var modalDescription = document.getElementById("bingoModalDescription");
    modalDescription.innerHTML = description;

    setTimeout(() => {
        modal.style.opacity = 1;
    }, 50);
}

function hideModal() {
    var modal = document.getElementById("bingoModal");
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
var modal = document.getElementById("bingoModal");
  if (event.target == modal) {
    hideModal();
  }
}

function createCard(task, description, isDone, pictureURL) {
    if (isDone) {
        document.write(`<div class="flip-card" onclick='showModal("${description}")'>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${pictureURL}" alt="Avatar" style="width:100%; height: 100%">
            </div>
            <div class="flip-card-back">
              <p style="text-align: center; color: black;">${task}</p>
            </div>
        </div>
        </div>`);

        return;
    }

    // if this task has not been done
    document.write(`<div class="flip-card" onclick='showModal("${description}")'>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <p style="text-align: center;">${task}</p>
        </div>
        <div class="flip-card-back">
          <img src="img/question_mark.jpg" alt="Avatar" style="width:50%;">
        </div>
    </div>
    </div>`);
}
