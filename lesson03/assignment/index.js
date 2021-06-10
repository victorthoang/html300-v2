//creating array object called employeeInfo
const employeeInfo = [
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ];
//using map to create a new array for each element
let employeeInfoHTML = employeeInfo.map(function(el){
return `
<article class='employee-card'>
  <section class='employee-identity'>
    <img class='employee-img' src='./img/headshot.jpg' alt='a dog wearing a black bow tie'>
    <h1>${el.name}</h1>
    <h2>${el.jobTitle}</h2>
  </section>
  <section class='employee-resume'>
    <ul>
      <li><b>Company: </b>${el.company}</li>
      <li><b>Experience: </b>${el.experience}</li>
      <li><b>School: </b>${el.school}</li>
      <li><b>Major: </b>${el.major}</li>
      <li><b>Email: </b>${el.email}</li>
      <li><span><img class="linkedin-image" src="./img/linkedin.svg" alt="linkedin image"></span> ${el.linkedInUrl}</li>
      <li><b>Code Languages: </b>${el.codeLanguages}</li>
    </ul>
  </section>
</article>
`
});
//stick it all in the div with the container class.
document.querySelector(".employee-card-container").innerHTML = employeeInfoHTML;