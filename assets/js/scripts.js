class SuberoModal {
    constructor(args) {
        this.plugin_url = suberoModal_ajax_object.plugin_url;
        this.ajax_url = suberoModal_ajax_object.ajax_url;

        args = args || {};
        this.layout = args.hasOwnProperty('layout') ? args.layout : 'vertical';
        this.id = args.hasOwnProperty('id') ? args.id : null;
        this.banner = args.hasOwnProperty('banner') ? this.setBanner(args.banner, this.plugin_url) : null;
        this.image = args.hasOwnProperty('image') ? this.setImage(args.image, this.plugin_url) : null;
        this.title = args.hasOwnProperty('title') ? args.title : 'Insert a title';
        this.message = args.hasOwnProperty('message') ? args.message : 'Insert a message';
        this.cancelButton = args.hasOwnProperty('cancelButton') ? args.cancelButton : null;
        this.confirmButton = args.hasOwnProperty('confirmButton') ? args.confirmButton : {};
        this.closeIcon = args.hasOwnProperty('closeIcon') ? args.closeIcon : false;

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

        if ( this.layout == 'horizontal' ) {
            contentDiv.classList.add('subero_modal_content_horizontal');
        } else {
            contentDiv.classList.add('subero_modal_content_vertical');
        }

        modalDiv.appendChild(contentDiv);

        // Close icon
        if ( this.closeIcon ) {
            let closeIcon = document.createElement('div');
            closeIcon.classList.add('subero_modal_closeIcon');
            closeIcon.innerHTML = "X";
            closeIcon.addEventListener('click', this.hide);
            contentDiv.appendChild(closeIcon);
        }

        // Create left column
        let leftColDiv = document.createElement('div');
        leftColDiv.classList.add('subero_modal_left_col');
        contentDiv.appendChild(leftColDiv);

        // left column banner
        if (this.banner) {
            let banner = document.createElement('img');
            banner.classList.add('subero_modal_banner');

            // Aditional banner classes added by the user
            if (this.banner.classes) {
                banner.classList.add(...this.banner.classes);
            }

            // Custom Width/Height
            if ( this.banner.width ) {
                banner.setAttribute('width', this.banner.width);
            }
            if ( this.banner.height ) {
                banner.setAttribute('height', this.banner.height);
            }

            banner.setAttribute('src', this.banner.src);
            leftColDiv.appendChild(banner);
        }

        // Create right column
        let rightColDiv = document.createElement('div');
        rightColDiv.classList.add('subero_modal_right_col');
        contentDiv.appendChild(rightColDiv);

        // Header
        let modalHeader = document.createElement('header');
        modalHeader.classList.add('subero_modal_header');
        rightColDiv.appendChild(modalHeader);

        // Figure - image - icon
        if (this.image) {
            let figure = document.createElement('figure');
            let image = document.createElement('img');
            
            image.classList.add('subero_modal_img');
            
            // Aditional classes added by the user
            if (this.image.classes) {
                image.classList.add(...this.image.classes);
            }

            // Custom image Width/Height
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
        rightColDiv.appendChild(body);

        // Footer
        let footer = document.createElement('footer');
        footer.classList.add('subero_modal_footer');
        rightColDiv.appendChild(footer);
        
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

    setBanner(args, pluginUrl) {
        let banner = {};
        banner.src = args.hasOwnProperty('src') ? args.src : pluginUrl + '/assets/img/thumb-up-circle.png';
        banner.classes = args.hasOwnProperty('classes') ? args.classes : null;
        banner.width = args.hasOwnProperty('width') ? args.width : null;
        banner.height = args.hasOwnProperty('height') ? args.height : null;
        return banner;
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

        let hideOnClick = args.hasOwnProperty('hideOnClick') ? args.hideOnClick : true;
    
        if ( hideOnClick ) {
            cancelBtn.addEventListener('click', this.hide);
        }
    
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
        
        let hideOnClick = args.hasOwnProperty('hideOnClick') ? args.hideOnClick : true;
    
        if ( hideOnClick ) {
            confirmBtn.addEventListener('click', this.hide);
        }
    
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