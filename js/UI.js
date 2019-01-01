class UI {
    constructor() {
            this.overlay = document.querySelector('.irepoverlay')
            this.postTitle;
            this.postContent;
        }
        // show overlay
    showEditForm(titlenode, postcontent_node) {
        this.postTitle = titlenode;
        this.postContent = postcontent_node;
        let editform = `
        <div class="formswrapper">
            <div class="formswrapperinner">
                <div class="closeoverlay">X</div>
                <form>
                    <div>
                        <input type="text" name="editpost" id="editpost_input" value="${this.postTitle.innerText}">
                    </div>
                    <div>
                        <textarea name="textareaedit" id="editpost_textarea">
                        ${this.postContent.innerText} </textarea>
                    </div>
                    <button class="update">Update</button>
                </form>
            </div>
        </div>
        `;
        let newclass = this.overlay.className + ' is-visible';
        this.overlay.innerHTML = editform;
        this.overlay.setAttribute('class', newclass)


    }

    ShowUpdate() {

        // update
        this.postTitle.innerText = '';
        this.postTitle.innerText = document.querySelector('#editpost_input').value
        this.postContent.innerText = document.querySelector('#editpost_textarea').value
        this.closeOverlay();
    }

    // close overlay
    closeOverlay() {
        this.overlay.setAttribute('class', 'irepoverlay')
    }

    deletePost(parentNode) {
        parentNode.remove();

    }
}