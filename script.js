const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addTask);

function addTask(e) {
    const notComplete = document.querySelector('.notComplete');
    const Complete = document.querySelector('.Complete');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !=='') {
        newLi.textContent = input.value;
        input.value = '';
        notComplete.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        Complete.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });
}