const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    // console.log(inputField.value);
    const li = document.createElement('div');
    li.innerHTML = `<div class="flex gap-4 justify-around m-2 bg-slate-300 p-2"><p class="input-item">
     ${inputField.value} </p><p class="process">In process</p> <button class=" confirm ">clickme</button><i class="fa fa-trash-o text-red-600 bg-amber-50 p-1 delete-trash" aria-hidden="true"></i></div> `
    const parent = document.getElementById('ul-list');
    parent.appendChild(li);
    inputField.value = ''
    const confirmBtn = document.getElementsByClassName('confirm');
    for (const button of confirmBtn) {
        button.addEventListener('click', function (e) {
            const hello = e.target.parentNode.childNodes[1];
            hello.innerText = 'completed'
            console.log(e.target.parentNode.childNodes[1]);
            console.log('hello');
        })
    }

    const deleteField = document.getElementsByClassName('delete-trash');
    for (const remove of deleteField) {
        remove.addEventListener('click', function (e) {
            const trackTr = e.target.parentNode.parentNode;
            trackTr.removeChild(e.target.parentNode);
        })
    }
})



// const ul = document.getElementById('ul-list');
// ul.addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target)
// })