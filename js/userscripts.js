        // show overlay
        let editlinks = document.querySelectorAll('.editpost');
        editlinks.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                let postTitle = (e.target.parentElement.parentElement.parentElement.parentElement.children[0].innerText);
                let postContent = (e.target.parentElement.parentElement.parentElement.parentElement.children[1].innerText);
                // update text field
                document.querySelector('#editpost_input').setAttribute('value', postTitle);
                // update text area
                document.querySelector('#editpost_textarea').value = postContent;


                let overlaydiv = document.querySelector('.irepoverlay');
                let newclass = overlaydiv.className + ' is-visible';
                overlaydiv.setAttribute('class', newclass)
            });
        });

        // close overlay
        document.querySelector('.closeoverlay').addEventListener('click', () => {
            let overlaydiv = document.querySelector('.irepoverlay');
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