const validate =()=>{
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
        pass_confirm_div.style.color = "white";
        pass_confirm_div.innerHTML= "Passwords do not match!";
        return false;
	}
	
}

const validateLogin =()=>{
	const username= document.forms['login']['email'];
	const password= document.forms['login']['password']
	if(username.value == ""){
		username.style.border = "1px solid red";
        username.focus();
        username.classList.add("error");
        return false;
	}
	if(password.value == ""){
		password.style.border = "1px solid red";
        password.focus();
        password.classList.add("error");
        return false;
	}
}



const upgrade = document.querySelectorAll('.Upgrade');
for(let i=0; i<upgrade.length; i++){
	upgrade[i].addEventListener('click', ()=>{
		upgrade[i].innerHTML = "mentor";
		upgrade[i].style.backgroundColor= "green";
});

}

const accept =document.querySelectorAll('.accept');
const decline= document.querySelectorAll('.decline');
	for(let i=0; i<accept.length; i++){
	accept[i].addEventListener('click', ()=>{
    	accept[i].innerHTML = 'Session accepted';
    	decline[i].style.display= 'none';

});

}

for(let i=0; i<decline.length; i++){
	decline[i].addEventListener('click', ()=>{
    	decline[i].innerHTML = 'Session declined';
    	accept[i].style.display= 'none';

});

}
const goBack =()=>{
	window.history.back();
}
const buttonMore = document.querySelectorAll('.more');
	for(let i=0; i<buttonMore.length; i++){
	buttonMore[i].addEventListener('click', ()=> {
        location.href = "ViewMentor.html";
    });
}
// const el = document.querySelector('.set');
// if(el){
const buttonMentor = document.querySelector('.set');
    buttonMentor.addEventListener('click', ()=>{
	location.href = "MentorPage.html";
});	
    
const buttonAdmin = document.querySelector('.set1');
    buttonAdmin.addEventListener('click', ()=>{
	location.href = "Admin.html";
});	
const buttonlog = document.querySelector('.logOut');
    buttonlog.addEventListener('click', ()=>{
	location.href = "index.html";
});	

const bookSession = document.querySelector('.bookSession');
	bookSession.addEventListener('click', ()=>{
	bookSession.innerHTML = "Session Booked";
	bookSession.style.backgroundColor = "green";
});


