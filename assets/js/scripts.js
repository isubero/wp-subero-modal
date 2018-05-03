function cancelBtn(callback) {
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('subero_modal_btn');
    cancelBtn.classList.add('subero_modal__btn__grey');
    cancelBtn.innerHTML = 'Cancel';

    if (callback) {
        cancelBtn.addEventListener('click', callback);
    }

    cancelBtn.addEventListener('click', function() { hide_subero_modal() });

    return cancelBtn;
}

function confirmBtn(callback) {
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('subero_modal_btn');
    confirmBtn.classList.add('subero_modal__btn__blue');
    confirmBtn.innerHTML = 'Confirm';

    if (callback) {
        confirmBtn.addEventListener('click', callback);
    }

    confirmBtn.addEventListener('click', function() { hide_subero_modal() });

    return confirmBtn;
}

function hide_subero_modal() {
    let modal = document.getElementById('subero_modal');
    modal.classList.add('hidden');
    modal.classList.remove('on');
}

function launch_subero_modal(args) {
    let modal = document.getElementById('subero_modal');
    let modalHeader = document.getElementById('subero_modal_title');
    let modalMsg = document.getElementById('subero_modal_msg');
    let buttonsWrapper = document.getElementById('subero_modal_buttons_wrapper');

    // Insert info
    modalHeader.innerHTML = args.title;
    modalMsg.innerHTML = args.msg;

    // Cancel button
    if (args.showCancelButton == true) {
        let cancelCallback = (args.cancelButtonCallback) ? args.cancelButtonCallback : null;
        buttonsWrapper.appendChild(cancelBtn(cancelCallback));
    }

    // Confirm button
    let confirmCallback = (args.confirmButtonCallback) ? args.confirmButtonCallback : null;
    buttonsWrapper.appendChild( confirmBtn(confirmCallback) );
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('on');

    console.log(args);
}