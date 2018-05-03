
function launch_subero_modal(args) {
    let modal = document.getElementById('subero_modal');
    let modalHeader = document.getElementById('subero_modal_title');
    let modalMsg = document.getElementById('subero_modal_msg');

    // Insert info
    modalHeader.innerHTML = args.title;
    modalMsg = args.msg;

    console.log(args);

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('on');
}

function hide_subero_modal() {
    let modal = document.getElementById('subero_modal');
    modal.classList.add('hidden');
    modal.classList.remove('on');
}