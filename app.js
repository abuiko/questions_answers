const questionBtn = document.querySelectorAll('.question-btn');


questionBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const question = e.target.parentElement.parentElement;
    const plus = e.target.firstElementChild;
    const minus = e.target.lastElementChild;

    plus.classList.toggle("hide-text");
    minus.classList.toggle("show-text");
    question.lastElementChild.classList.toggle('show-text');
}));