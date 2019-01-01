class UI {
    constructor() {
        this.overlay = document.querySelector('.irepoverlay');
        this.maploader = document.querySelector('.maploader');
        this.postTitle;
        this.postContent;
    }
    addClass(thenode, classname) {
            thenode.setAttribute('class', classname)

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
                    <div class="siteheading">Incident Location</div>
                    <div class="maploader loadmap"></div>
                    
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
        // this.overlay.setAttribute('class', newclass)
        this.addClass(this.overlay, newclass)


    }

    loadMap() {
        // this.maploader.setAttribute('class', newclass)
        this.addClass(this.maploader, 'maploader loadmap')

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