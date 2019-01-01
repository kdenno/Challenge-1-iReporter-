// let nodelist = document.querySelectorAll('.status')

// nodelist.forEach(function(node) {
//     node.addEventListener('click', function(e) {
//         console.log(e.target.className)
//     })
// })
let allrecordslist = document.querySelectorAll('.allrecords');
allrecordslist.forEach(function(node) {
    node.addEventListener('click', function(e) {
        document.querySelector('.siteheading').innerText = ("All " + e.target.getAttribute('data'))

    })


});


document.addEventListener('click', function(e) {
    if (e.target.className === 'status') {
        e.target.parentElement.parentElement.parentElement.children['0'].innerText = e.target.innerText
    }
})