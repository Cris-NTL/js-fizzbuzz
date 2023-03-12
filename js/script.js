const containerElement = document.querySelector(".container-fluid");

let rowElement = document.createElement('div');
rowElement.classList.add('row');
containerElement.appendChild(rowElement);

for (let i = 1; i <= 100; i++) {
    
    let color;
    let message;

    if (i % 3 === 0 && i % 5 === 0) {
        color = 'var(--fizz-buzz)';
        message = "fizz-buzz";
    }
    else if (i % 3 === 0) {
        color = 'var(--fizz)';
        message = "fizz";
    }
    else if (i % 5 === 0) {
        color = 'var(--buzz)';
        message = "buzz";
    }
    else {
        color = 'var(--default)';
        message = i;
    }

    const colElement = document.createElement('div');
    colElement.classList.add('col');
    colElement.style.backgroundColor = color;
    colElement.innerHTML = `<p>${message}</p>`;
    rowElement.appendChild(colElement);

    if (i % 10 === 0) {
        rowElement = document.createElement('div');
        rowElement.classList.add('row');
        containerElement.appendChild(rowElement);
    }
}