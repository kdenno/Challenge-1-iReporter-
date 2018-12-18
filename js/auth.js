// mimic authentication procedure for Admin. with browser Local Storage
document.addEventListener('DOMContentLoaded', (e) => {
        // check if dummy auth object exists
        const auth_obj = localStorage.getItem('admin_creds')
        const userauth_obj = localStorage.getItem('user_creds')

        if (!auth_obj) {
            const admin_creds = {
                username: 'admin',
                pass: '123'
            }
            localStorage.setItem('admin_creds', JSON.stringify(admin_creds))
        }
        if (!userauth_obj) {
            const user_creds = {
                username: 'user',
                pass: '123'
            }
            localStorage.setItem('user_creds', JSON.stringify(user_creds))
        }
    })
    // get creds
const authobj = JSON.parse(localStorage.getItem('admin_creds'))
const userauthobj = JSON.parse(localStorage.getItem('user_creds'))

document.getElementById('submitbtn').addEventListener('click', (e) => {
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value

    if (email == authobj.username && pass == authobj.pass) {
        window.location = 'admin.html'
    } else if (email == userauthobj.username && pass == userauthobj.pass) {
        window.location = 'userprofile.html'
    } else {
        document.getElementById('status').innerHTML = `Wrong credentials for admin use <br> username: admin <br> password: 123 <br> for normal user <br>username: user<br>password: 123`
    }
})