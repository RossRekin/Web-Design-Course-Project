var nav = document.getElementById('nav');

window.onscroll = function() {

    if (window.pageYOffset > 100) {

        nav.style.position = "fixed";
        nav.style.top = 0;

    } else {
        nav.style.position = 'relative';
        nav.style.top = 100;
    }
}





function checkInput() {


    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var subject = document.getElementById('subject').value;

    if (firstName.length < 3 || !firstName.match(/[A-Za-z]/g)) {
        document.getElementById('validateInfo').innerHTML = "invalid first name!!"

        return false;
    }
    if (lastName.length < 3 || !lastName.match(/[A-Za-z]/g)) {
        document.getElementById('validateInfo').innerHTML = "invalid last name!!"
        alert('invalid last name');
        return false;
    }
    if (!phoneNumber.match(/[0-9]/g) || phoneNumber.length != 10) {
        document.getElementById('validateInfo').innerHTML = "invalid phone number!!"

        return false;
    }
    if (subject.length < 3) {
        document.getElementById('validateInfo').innerHTML = "invalid subject !!"
        alert('Invalid subject');
        return false;
    }


}