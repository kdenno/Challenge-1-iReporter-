        let ui = new UI;

        document.addEventListener('click', (e) => {
            let classnames = e.target.className;
            switch (classnames) {
                case 'editpost':
                    let titlenode = e.target.parentElement.parentElement.parentElement.parentElement.children[0];
                    let post_content_node = e.target.parentElement.parentElement.parentElement.parentElement.children[1];
                    e.preventDefault();
                    ui.showEditForm(titlenode, post_content_node)
                    break;

                case 'closeoverlay':
                    ui.closeOverlay();
                    break;

                case 'update':
                    e.preventDefault();
                    ui.ShowUpdate();
                    break;

                case 'deletepost':
                    let parentnode = e.target.parentNode.parentNode.parentNode.parentNode;
                    ui.deletePost(parentnode)
                    break;
            }


        });

        // get flag posts 

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('statheader1') || e.target.classList.contains('statheader2')) {
                document.querySelector('.siteheading').textContent = (e.target.childNodes[0].data)

            }
        })