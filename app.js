// variables
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const ans = document.querySelectorAll('.ans');
const one = document.querySelectorAll('.one');
const ques = document.querySelectorAll('.ques');


// addEventListener
for(let i=0; i<plus.length; i++) {
    plus[i].addEventListener('click', () => {
        ans[i].classList.remove('hidden');
        minus[i].classList.remove('hidden');
        plus[i].classList.add('hidden');

        one[i].style.height = "max-content";
        one[i].style.backgroundImage = "linear-gradient(to right, #e25a41, #9d228e)";
        ans[i].style.color = 'white';
        ques[i].style.color = 'yellow';
    })
}

for(let i=0; i<minus.length; i++) {
    minus[i].addEventListener('click', () => {
        ans[i].classList.add('hidden');
        minus[i].classList.add('hidden');
        plus[i].classList.remove('hidden');

        one[i].style.background = 'rgb(250, 245, 235)';
        ques[i].style.color = 'rgba(0, 0, 0, 0.89)';

    })
}    