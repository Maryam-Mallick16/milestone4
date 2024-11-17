// get reference to the form and display area //
const form = document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplayElemnt = document.getElementById('resume-display')as HTMLDivElement

//handle form submission//
form.addEventListener('submit ' , (event:Event) =>
    event.preventDefault();//prevent page reload]]
})
//collect input values//
const Name = ( document.getElementById('name') as HTMLInputElement).value
const email = ( document.getElementById('email') as HTMLInputElement).value
const phone = ( document.getElementById('phone') as HTMLInputElement).value
const Education = ( document.getElementById('Education') as HTMLInputElement).value
const Experience = ( document.getElementById('Experience') as HTMLInputElement).value
const skills= ( document.getElementById('skills') as HTMLInputElement).value

//Generate the resume content dynamically//
const resumeHTML =
<h2><b>Resume</b></h2>
<h3>personal information</h3>
<p><b>Name:</b>${name}<p>
<p><b>email:</b>${email}</p>
<p><b>phone:</b>${phone}</p>

<h3>education</h3>
<p>${Experience}</p>
<h3>skils</h3>
<p>${skills}</p>
  ;
  