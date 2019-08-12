//selecting all text elements
const fName= document.forms['signup']['fName'];
const lName= document.forms['signup']['lName'];
const address= document.forms['signup']['address'];
const email= document.forms['signup']['email'];
const bio=document.forms['signup']['bio'];
const occupation= document.forms['signup']['occupation'];
const expertise= document.forms['signup']['expertise'];
const password= document.forms['signup']['password'];
const password_confirm= document.forms['signup']['password2'];

const validate =()=>{
	//validate first name
	if(fName.value == ""){
		fName.style.border = "1px solid red";
        fName.focus();
        fName.classList.add("error");
        return false;
	}
	//validate last name
	if(lName.value == ""){
		lName.style.border = "1px solid red";
        lName.focus();
        lName.classList.add("error");
        return false;
	}
	//validate address
	if(address.value == ""){
		address.style.border = "1px solid red";
        address.focus();
        address.classList.add("error");
        return false;
	}
	//validate email
	if(email.value == ""){
		email.style.border = "1px solid red";
        email.focus();
        email.classList.add("error");
        return false;
	}
	//validate bio
	if(bio.value == ""){
		bio.style.border = "1px solid red";
        bio.focus();
        bio.classList.add("error");
        return false;
	}
	//validate occupation
	if(occupation.value == ""){
		occupation.style.border = "1px solid red";
        occupation.focus();
        occupation.classList.add("error");
        return false;
	}
	// validate expertise
	if(expertise.value == ""){
		expertise.style.border = "1px solid red";
        expertise.focus();
        expertise.classList.add("error");
        return false;
	}
	//validate password
	if(password.value == ""){
		password.style.border = "1px solid red";
        password.focus();
        password.classList.add("error");
        return false;
	}
	//validate confirm password
	if(password.value !== password_confirm.value){
		password.style.border = "1px solid red";
		password_confirm.style.border = "1px solid red";
        password_confirm.focus();
        password_confirm.classList.add("error");
   		alert( "Passwords do not match!" );
        return false;
	}

}
