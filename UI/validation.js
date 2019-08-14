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
	if(fName.value == ""){
		username.style.border = "1px solid red";
        alert("enter your first name!");
        fName.focus();
        return false;
	}
}
