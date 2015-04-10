
// myBio 

var bio = {
	"name": "Michael Cleveland",
	"role": "Engineer/ Web Developer",
	"contacts": {
		"mobile": "614.370.8271",
		"email": "mcleveland213@gmail.com",
		"github": "mcleveland1",
		//"twitter": "",
		"location": "Hilliard, Ohio"
	},
	"welcomeMessage": "I'm a network engineer working to develop programming skills. I started the ND program\
	to enrich my understanding of the Web.",
	"skills": ["Electrical Engineering","HTML","JavaScript"],
	"bioPic": "images/jazz.jpg"
};

// workHistory

var work = {
  "jobs": [
  {
  "employer": "AT&T",
  "location" : "Columbus, Ohio",
  "title": "Power Engineer",
  "dates": "2000 - present",
  "description":"Develop specifications for complex products and systems.\
  	Manage engineering projects, design layouts, order, install, and remove power equipment."
  },
  {
  "employer": "AT&T",
  "location" : "Columbus, Ohio",
  "title": "Customer Service Specialist",
  "dates": "1994 - 2000",
  "description":"Install, troubleshoot, maintain and repair outside cable facilities."
  }
 ]
};

// projects with artificial data

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2015",
      "description": "Fusce consequat tortor a fermentum vulputate. Donec purus purus,\
      tristique tempus magna in, porta porttitor lorem.",
      "images": ["http://lorempixel.com/output/technics-q-c-200-200-4.jpg",
		"http://lorempixel.com/output/abstract-q-g-200-200-5.jpg"]
    }
  ]
};

// education 

var education = {
    "schools": [
        {
            "name": "The Ohio State University",
            "location": "Columbus, OH",
	    //"degree": "On hold",  I have not yet earned any degrees.
            "majors": ["Electrical Engineering"],
	    "dates": 2013, // I'm not sure when I was last enrolled
            "url": "http://www.osu.edu"
        },
        {
            "name": "Columbus State Community College",
            "location": "Columbus, OH",
	    //"degree": "none",
	    // I did not earn a degree. I used some classes towards transferring to OSU.
            "majors": ["Electronic Engineering"],
	    "dates": 2012, // I'm not sure when I was last enrolled
            "url": "http://www.cscc.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End ND",
            "school": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com/course/nd001"
        }
    ]
};

// display bio

bio.display = function () {

var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedPicture);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

// code to display twitter account if I had one
/*
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
*/

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
$("#header").append(formattedSkills);
};
bio.display();

// display work

work.display = function() {
  for (job in work.jobs) {

  $("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
$(".work-entry:last").append(formattedworkDates);
var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedworkDescription);
 }
};
work.display ();

// display sample project

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
$(".project-entry:last").append(formattedDescription);

if (projects.projects[project].images.length > 0) {
  for (image in projects.projects[project].images) {
var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
$(".project-entry:last").append(formattedImage);
    }
   }
  }
};
projects.display();

// display education

education.display = function() {

$("#education").append(HTMLschoolStart);

  for (school in education.schools) {
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        
// I have not earned any degrees so I did not display anything on the resume	

// var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
// $(".education-entry:last").append(formattedSchoolName + formattedDegree);
$(".education-entry:last").append(formattedSchoolName);
var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
$(".education-entry:last").append(formattedDates);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
$(".education-entry:last").append(formattedLocation);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
$(".education-entry:last").append(formattedMajor);
var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
$(".education-entry:last").append(formattedonlineUrl);
   };

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  for (onlineschool in education.onlineCourses) {
var formattedonlineTitleName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineschool].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineschool].school);
$(".education-entry:last").append(formattedonlineTitleName + formattedonlineSchool);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineschool].date);
$(".education-entry:last").append(formattedonlineDates);
var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineschool].url);
$(".education-entry:last").append(formattedonlineUrl);
    }
};
education.display();

// international name button

function inName(name) {

  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice (0,1).toUpperCase() +
  name[0].slice (1).toLowerCase();

  return name [0] +" "+name[1];
}

$("#main").append(internationalizeButton);

// display map

function displayMap() {
  
$("#mapDiv").append(googleMap);
};
displayMap();
