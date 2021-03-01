const text = document.querySelectorAll('.question-text');
const questionBtn = document.querySelectorAll('.question-btn');


questionBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const plus = e.target.firstElementChild;
    const minus = e.target.lastElementChild;
    plus.classList.toggle("show-text");
    if (plus.classList.contains('show-text')) {
        minus.classList.add("show-text");
    } else {
        minus.classList.remove("show-text");
    }

}));