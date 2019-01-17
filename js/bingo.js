
function createCard(task) {
    document.write(`<div class="flip-card">
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
