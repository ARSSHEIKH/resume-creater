let dvTwo = document.querySelector(".dvTwo-tab");
let dvOne = document.querySelector(".dvOne-tab");
let dvThree = document.querySelector(".dvThree-tab");

const signup_content1 = document.querySelector(".signup-form1").innerHTML;
const signup_content2 = document.querySelector(".signup-form2").innerHTML;
const signup_content3 = document.querySelector(".signup-form3").innerHTML;

document.querySelector('.signup-form2').innerHTML="";
document.querySelector(".signup-form3").innerHTML="";

dvOne.addEventListener('click', signup_func1);
dvTwo.addEventListener('click', signup_func2);
dvThree.addEventListener('click', signup_func3);

document.getElementById("dvOne-tab").style.backgroundColor = "#ff7b00";
document.getElementById("dvOne-tab").style.border = "3px solid #ff7b00";

let themeColorChange = "Light";
labelThemeToggler = document.getElementById("labelThemeToggler");

exampleColorInput = document.getElementById("exampleColorInput");
exampleColorInput.addEventListener("change", ()=>{
    document.querySelector("body").style.backgroundColor = exampleColorInput.value;
})
function themeToggler(){
    flexSwitchCheckDefault = document.getElementById("flexSwitchCheckDefault");
    labelThemeToggler = document.getElementById("labelThemeToggler");
    if(themeColorChange === "Dark"){
        themeColorChange = "Light";
        labelThemeToggler.innerHTML = "Light Theme?";
        labelThemeToggler.style.color = "rgb(53, 48, 44)"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#formHeading").style.color = "rgb(53, 48, 44)";
    }
    else if(themeColorChange === "Light"){
        themeColorChange = "Dark";
        labelThemeToggler.innerHTML = "Dark Theme?";
        labelThemeToggler.style.color = "white"
        document.querySelector("body").style.backgroundColor = "rgb(53, 48, 44)";
        document.querySelector("#formHeading").style.color = "white";
    }
}


function signup_func1(){
    document.getElementById("dvTwo-tab").style.backgroundColor = "#fff";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("dvThree-tab").style.backgroundColor = "#fff";
    document.getElementById("dvThree-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvOne-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvOne-tab").style.border = "3px solid #ff7b00";
    document.querySelector(".signup-form1").innerHTML = signup_content1;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";

    if(filled == true){
        document.getElementById('fname').value = UsersArr1[ind-1].fname;
        document.getElementById('lname').value = UsersArr1[ind-1].lname;
        document.getElementById('email').value = UsersArr1[ind-1].email
        document.getElementById('confemail').value = UsersArr1[ind-1].confemail
        document.getElementById('pass').value = UsersArr1[ind-1].pass
        document.getElementById('confpass').value = UsersArr1[ind-1].confpass
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    

    }
}

function signup_func2(){
    document.getElementById("dvOne-tab").style.backgroundColor = "#fff";
    document.getElementById("dvOne-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("dvThree-tab").style.backgroundColor = "#fff";
    document.getElementById("dvThree-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvTwo-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ff7b00";

    document.querySelector(".signup-form1").innerHTML = signup_content2;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
    if(filled == true){
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    
    }
}

function signup_func3(){
    document.getElementById("dvOne-tab").style.backgroundColor = "#fff";
    document.getElementById("dvOne-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("dvTwo-tab").style.backgroundColor = "#fff";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ebf3eb";
    document.getElementById("tabs-strings").style.marginTop = "12px";

    document.getElementById("dvThree-tab").style.backgroundColor = "#ff7b00";
    document.getElementById("dvTwo-tab").style.border = "3px solid #ff7b00";
    document.querySelector(".signup-form1").innerHTML = signup_content3;
    document.querySelector('.signup-form2').innerHTML="";
    document.querySelector(".signup-form3").innerHTML="";
}
function Users_Form1(fname, lname, email, confemail, pass, confpass) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.confemail = confemail;
    this.pass = pass;
    this.confpass = confpass;

}
function Users_Form2(NearestOff, address, address2, city, state, country, postalcode, phone, mphone) {
    this.NearestOff = NearestOff;
    this.address = address;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalcode = postalcode;
    this.phone = phone;
    this.mphone = mphone;

}
// var arr = [10]
// arr[0] = new Students("Anam", 20, 'karachi...')

// console.log(arr[0])
var UsersArr1 = [];
var UsersArr2 = [];
var ind = 0;
let fname;
let lname;
let email;
let confemail;
let pass ;
let confpass;

let NearestOff;
let address;
let address2;
let city;
let state;
let country;
let postalcode;
let phone;
let mphone;

let filled = false;
UsersArr1[ind] = new Users_Form1();
UsersArr2[ind] = new Users_Form2();

function submit_Form1(){
    fname = document.getElementById('fname').value
    lname = document.getElementById('lname').value
    email = document.getElementById('email').value
    confemail = document.getElementById('confemail').value

    filled = false;

    if((fname != "" && lname != "" && email != "" && confemail) && (email === confemail)){

        UsersArr1[ind].fname = fname;
        UsersArr1[ind].lname = lname;
        UsersArr1[ind].email = email;
        UsersArr1[ind].confemail = confemail;
        UsersArr1[ind].pass = pass;
        UsersArr1[ind].confpass = confpass;
        filled = true;
        signup_func2();
        document.getElementById("dvOne-tab").style.backgroundColor = "#add7a8";
        document.getElementById("dvOne-tab").style.border = "3px solid  #add7a8";    


        submit_Form2();
        // function submit_Form2(){
        //     NearestOff = document.getElementById('NearestOff').value
        //     address = document.getElementById('address').value
        //     address2 = document.getElementById('address2').value
        //     confemcityail = document.getElementById('city').value
        //     state = document.getElementById('state').value
        //     country = document.getElementById('country').value
        //     postalcode = document.getElementById('postalcode').value
        //     phone = document.getElementById('phone').value
        //     mphone = document.getElementById('mphone').value

        //     if(NearestOff != "Nearest Office" && address != "" && address2  != address && city != "" && state != "State" && country != "Country" && postalcode != "" && phone != "" && mphone != phone)
        //     {
        //         console.log("abcd")
        //     }
        // }
        
        ind++;
    }
    else if(email !== confemail){
        document.querySelector('.required-mark-confemail').innerHTML = "Confirm Email Address is not matched from above field";
    }
    else if(pass !== confpass){
        document.querySelector('.required-mark-confemail').innerHTML = "*";
    }
    else{
        document.querySelector('.required-mark-confemail').innerHTML = "*";
        document.getElementById('error-emptyfields').innerHTML = "Please All above fields"
    }
        
}