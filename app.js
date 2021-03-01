const questionBtn = document.querySelectorAll('.question-btn');
const text = document.querySelectorAll('.question-text');


questionBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const question = e.target.parentElement.parentElement;
    const plus = e.target.firstElementChild;
    const minus = e.target.lastElementChild;

    plus.classList.toggle("show-text");

    if (plus.classList.contains('show-text')) {
        minus.classList.add("show-text");
        question.lastElementChild.classList.add('show-text');
    } else {
        minus.classList.remove("show-text");
        question.lastElementChild.classList.remove('show-text');
    }

}));