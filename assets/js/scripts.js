class SuberoModal {
    constructor(args) {
        this.plugin_url = suberoModal_ajax_object.plugin_url;
        this.ajax_url = suberoModal_ajax_object.ajax_url;

        args = args || {};
        this.id = args.hasOwnProperty('id') ? args.id : null;
        this.image = args.hasOwnProperty('image') ? this.setImage(args.image, this.plugin_url) : null;
        this.title = args.hasOwnProperty('title') ? args.title : 'Insert a title';
        this.message = args.hasOwnProperty('message') ? args.message : 'Insert a message';
        this.cancelButton = args.hasOwnProperty('cancelButton') ? args.cancelButton : null;
        this.confirmButton = args.hasOwnProperty('confirmButton') ? args.confirmButton : {};

        // Bind hide() method
        this.hide = this.hide.bind(this);

        // Create modal
        this.createModal();
    }

    createModal() {
        // Modal main div
        let modalDiv = document.createElement('div');
        modalDiv.classList.add('subero_modal');
        modalDiv.classList.add('hidden');

        if ( this.id ) {
            modalDiv.setAttribute('id', this.id);
        }

        // Modal content
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('subero_modal_content');
        modalDiv.appendChild(contentDiv);

        // Header
        let modalHeader = document.createElement('header');
        modalHeader.classList.add('subero_modal_header');
        contentDiv.appendChild(modalHeader);

        // Figure - image - icon
        if (this.image) {
            let figure = document.createElement('figure');
            let image = document.createElement('img');
            
            image.classList.add('subero_modal_img');
            
            // Aditional classes added by the user
            if (this.image.classes) {
                image.classList.add(...this.image.classes);
            }

            // Custom Width/Height
            console.log(this.image.width);
            if ( this.image.width ) {
                image.setAttribute('width', this.image.width);
            }
            if ( this.image.height ) {
                image.setAttribute('height', this.image.height);
            }

            image.setAttribute('src', this.image.src);
            figure.appendChild(image);
            modalHeader.appendChild(figure);
        }

        // Body
        let body = document.createElement('div');
        body.classList.add('subero_modal_body');

        // Title
        let title = document.createElement('h4');
        title.classList.add('subero_modal_title');
        title.innerHTML = this.title;
        body.appendChild(title);

        // Message span
        let message = document.createElement('span');
        message.classList.add('subero_modal_msg');
        message.classList.add('subero_modal_body_text');
        message.innerHTML = this.message;

        body.appendChild(message);
        contentDiv.appendChild(body);

        // Footer
        let footer = document.createElement('footer');
        footer.classList.add('subero_modal_footer');
        contentDiv.appendChild(footer);
        
        // Buttons
        let buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('subero_modal_buttons_wrapper');
        footer.appendChild(buttonsWrapper);

        // Cancel button
        if (this.cancelButton) {
            buttonsWrapper.appendChild( this.cancelBtn(this.cancelButton) );
        }

        // Confirm button
        buttonsWrapper.appendChild( this.confirmBtn(this.confirmButton) );

        // Save HTML Object
        this.html = modalDiv;

        // Append modal div to document Body
        let documentBody = document.querySelector('body');
        documentBody.appendChild(modalDiv);
        
    }

    setImage(args, pluginUrl) {
        let image = {};
        image.src = args.hasOwnProperty('src') ? args.src : pluginUrl + '/assets/img/thumb-up-circle.png';
        image.classes = args.hasOwnProperty('classes') ? args.classes : null;
        image.width = args.hasOwnProperty('width') ? args.width : null;
        image.height = args.hasOwnProperty('height') ? args.height : null;
        return image;
    }

    cancelBtn(args) {
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('subero_modal_btn');
        cancelBtn.classList.add('subero_modal__btn__grey');
        cancelBtn.innerHTML = (args.hasOwnProperty('text')) ? args.text : 'Cancel';
    
        if (args.hasOwnProperty('callback')) {
            cancelBtn.addEventListener('click', args.callback);
        }
    
        cancelBtn.addEventListener('click', this.hide);
    
        return cancelBtn;
    }

    confirmBtn(args) {
        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('subero_modal_btn');
        confirmBtn.classList.add('subero_modal__btn__primary');
        confirmBtn.innerHTML = (args.hasOwnProperty('text')) ? args.text : 'Confirm';
    
        if (args.hasOwnProperty('callback')) {
            confirmBtn.addEventListener('click', args.callback);
        }

        confirmBtn.addEventListener('click', this.hide);
    
        return confirmBtn;
    }

    hide() {
        this.html.classList.add('hidden');
        this.html.classList.remove('on');
    }

    show() {
        this.html.classList.remove('hidden');
        this.html.classList.add('on');
    }
}