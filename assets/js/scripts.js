function cancelBtn(args) {
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('subero_modal_btn');
    cancelBtn.classList.add('subero_modal__btn__grey');
    cancelBtn.innerHTML = (args.hasOwnProperty('text')) ? args.text : 'Cancel';

    if (args.hasOwnProperty('callback')) {
        cancelBtn.addEventListener('click', args.callback);
    }

    cancelBtn.addEventListener('click', function() { hide_subero_modal() });

    return cancelBtn;
}

function confirmBtn(args) {

    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('subero_modal_btn');
    confirmBtn.classList.add('subero_modal__btn__blue');
    confirmBtn.innerHTML = (args.hasOwnProperty('text')) ? args.text : 'Confirm';

    if (args.hasOwnProperty('callback')) {
        confirmBtn.addEventListener('click', args.callback);
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
    if (args.hasOwnProperty('cancelButton')) {
        buttonsWrapper.appendChild( cancelBtn(args.cancelButton) );
    }

    // Confirm button
    let confirmButtonArgs = args.hasOwnProperty('confirmButton') ? args.confirmButton : {};
    buttonsWrapper.appendChild( confirmBtn(confirmButtonArgs) );
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('on');

    console.log(args);
}