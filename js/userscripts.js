        // show overlay    
        let postTitle;
        let postContent;
        let overlaydiv = document.querySelector('.irepoverlay');
        document.addEventListener('click', (e) => {
            if (e.target.className === 'editpost') {

                e.preventDefault();

                postTitle = (e.target.parentElement.parentElement.parentElement.parentElement.children[0]);
                postContent = (e.target.parentElement.parentElement.parentElement.parentElement.children[1]);
                // update text field
                document.querySelector('#editpost_input').value = postTitle.innerText;
                // update text area
                document.querySelector('#editpost_textarea').value = postContent.innerText;


                let newclass = overlaydiv.className + ' is-visible';
                overlaydiv.setAttribute('class', newclass)
            }

        });
        // show update
        document.getElementById('update').addEventListener('click', (e) => {
            e.preventDefault();
            // update
            postTitle.innerText = '';
            postTitle.innerText = document.querySelector('#editpost_input').value
            postContent.innerText = document.querySelector('#editpost_textarea').value
            overlaydiv.setAttribute('class', 'irepoverlay')

        });


        // close overlay
        document.querySelector('.closeoverlay').addEventListener('click', () => {
            overlaydiv.setAttribute('class', 'irepoverlay')
        });
        // delete post 
        let deleteArr = document.querySelectorAll('.deletepost');
        deleteArr.forEach(element => {
            element.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.parentNode.parentNode.remove();

            })
        });

        // get flag posts 
        let flagdataArr = document.querySelectorAll('.flagdata');
        flagdataArr.forEach((element) => {
            element.addEventListener('click', (e) => {
                if (e.target.classList.contains('statheader1') || e.target.classList.contains('statheader2')) {
                    document.querySelector('.siteheading').textContent = (e.target.childNodes[0].data)

                }

            })
        });