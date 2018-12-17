// mimic authentication procedure for Admin. with browser Local Storage
document.addEventListener('DOMContentLoaded', (e) => {
    // check if dummy auth object exists
    const auth_obj = localStorage.getItem('admin_creds');
    if (!auth_obj) {

        const admin_creds = {
            username: 'admin',
            pass: '123'
        }
        localStorage.setItem('admin_creds', JSON.stringify(admin_creds));

    }

});
// get creds
const authobj = JSON.parse(localStorage.getItem('admin_creds'));


document.getElementById('submitbtn').addEventListener('click', (e) => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if (email == authobj.username && pass == authobj.pass) {
        window.location = "admin.html"

    }
})