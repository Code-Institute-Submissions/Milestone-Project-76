<p align="center">
  <img src="/assets/wireframes/devices.png">
</p>
<h1>Milestone Project 2: Interactive Frontend Development</h1>
For this second milestone project, I decided to build this  website as an avid fitness enthusiast. I have always been into all thing's gym, nutrition and recuperation related and often google new activities, sources of nutrition and sports massage etc. in my area.
I believed a website where all these sources could be found at a glance would be useful for Galway City where I currently live.
The Galway Fitness website or GALFIT as I've abrieviated it for this project, was designed for this purpose. A hub for all things fitness related.  

https://oulshtock.github.io/Milestone-Project-2/


<h2>UX</h2>
My aim was to provide visitors with a simple to use website. Easy to navigate menus and with a click to bring up all the locations of the health activity of their choice. 
Below the navigation bar I positioned the map taking up the full page. The idea to add an embedded webpage next to the map that would open the website of that activity was planned but due to time constraints was pulled.

I also added an infowindow to the markers on the map. Therefore, when a user clicks on a marker at their prefered location an infowindow pops up with the name of the company and a link to their website they can click on. As mentioned above this was meant to appear embedded
in the website but was decided due to time constraints to leave it open in a new tab.

Social Media links are added to the bottom so new businesses can get in contact to have their location and website added.

###  Wireframe Concept
The wireframes are created with Justinmind. They where made as a part of the design process and are saved in **wireframes** folder as a png image file. 
[Check it out here!](https://github.com/Oulshtock/Milestone-Project-2/blob/master/assets/wireframes/mockup.png).

<h2>Technologies Used</h2>

In this project I used:
- [Gitpod](https://www.gitpod.io) for the development of this site. 
- HTML (HyperText Markup Lanhuage)
- CSS (Cascading Style Sheets)
- [Bootstrap](https://getbootstrap.com)
- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com)
- [Git](https://git-scm.com)
- [jQuery](https://jquery.com)
- [Javascript](https://www.javascript.com/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)


Other technologies used:

- [Justinmind](https://www.justinmind.com) for the mock-ups


<h2>Features</h2>

### Existing Features

- An image of a Barbell grabs the users sight when logged into the website. Straight away the user knows they are on a website related to fitness. 
- A navbar below the image of the landing page grants the user quick and easy access to the locations of the Activities, Nutrition and Recuperation. These links collapse on tablets and mobile devices in order to provide a more appealing experience.
- An info window pops up when clicked on any marker.
- A link to the website for each company appears on this info window that brings the user to a new tab with the website.
- As it was planned as a one page simple to navigate website, all content can be found on the one page.
- Font Awesome icons are used to provide links to social accounts.

### Features left to Implement

- In the future I want to add more links to search for additional related places in the city, such as Juice Bars, Running & Cycling Trails(Using Google Directions API) etc.
- I want to automate this using Google Places API. Due to time restrictions I had to manually do it for now.
- If I have had more time in the project I would have focused on and worked more with the UI. Although it is easy to use, I think it could be improved on.
- I want to embed the webpages of the companies in the website when a website link is clicked on. 

<h2>User Stories</h2>

- As a new visitor to Galway City, I want to easily navigate and to find gyms in the city relavant to my specific sport.
- As I have newly moved to Galway I want to find out where the local Gyms are in the city.
- As a busy person with little time to cook for myself, I want to find out where it is possible to purchase meal plans that will deliver in the area.
- As an avid gym goer, I want to know if there is any place I can buy supplements in Galway City.
- As a bodybuilder who recently injured a muscle, I would like to know if there are any Sports Massage Therapist or Physiotherapists in the area near me.
- I would like to be brought directly to the companies website and not have to browse looking for them and their website.


<h2>Testing</h2>

The code was checked with the following validators

- [W3CMarkupValidator](https://validator.w3.org)
- [W3CJigsawCSSValidator](https://jigsaw.w3.org/css-validator/)
- [Autoprefixer](https://autoprefixer.github.io/)
- [JavaScript Validator](http://beautifytools.com/javascript-validator.php)
- [Responsinator](http://www.responsinator.com/)

Also the project was developed with the constant use of Chrome Developer Tools in order to ensure responsivness on all devices. 

<h3>Manual testing</h3>

1. Navbar

    - Visit Home page from various sized screens to ensure dropdown menu works on smaller devices.
    - Hover over each navbar link to see of the effects work and the colour changes.
    - Click on each toggler button to ensure dropdown menu works.
    - Using Chrome Developer, alter the screen size in responsive mode to see if the navbar changes correctly.
    - Hover on each link to see if the effects work.
    - Click on each link to check if they have functionality and if they are linked to the correct markers.
    - Click on Logo GALFIT positioned on the left of the navbar to ensure that it brings one back to the Home page.


2. Map

    - Clicking on the links drops the markers onto the Map in the correct locations.
    - Using the Google map zoom function moved the map in and out without and the Markers held their locations accurately
   	- Click on links to websites on the infowindow of markers to ensure all links bring you to correct website.
    - The websites open in another tab so the user can remain on the GALFIT website at all times

3. Footer

   -  Social media links work but for this project as the website is fictional will not bring you to any account.

<h2>Deployment</h2>

This page was deployed by following the steps below:

- Log into GitHub.
- Select the repository of your project Oulshtock/Milestone-Project-2.
- At the top of the page, select the Settings Tab.
- Scroll down to the GitHub Pages section.
- Under Source, select Master Branch.
- The live link for the website will appear beneath the GitHub Pages header with "Your site is published at https://oulshtock.github.io/Milestone-Project-2"
- Click the link to see the website open in a new tab.


<h3>How to run this project locally</h3>

- Click on this link to the GitHub repository.
- Click on the green "Clone or download" button on the top right-hand side.
- Copy the clone URL for the repository that is provided.
- Open Bash in your IDE.
- Type 'git clone', and then paste the URL copied in the step above.
- e.g. git clone https://github.com/oulshtock/Milestone-Project-2.
- Press Enter to create the project locally on your github.	
	
<h2>Credits</h2>

- [W3SCHOOLS](https://www.w3schools.com)
- [favicon](https://favicon.io/)
- [Google Developer]https://developers.google.com/maps/documentation/javascript/tutorial

<h3>Content</h3>

All content on this website was written by me with the aid of the credited above. The results being displayed on screen are shown thanks to the Google Maps Javascript API.


<h3>Acknowledgements</h3>
I would like to thank my mentor Dick Vlaanderen for his patience, guidance and putting up with me throughout this Milestone. 
I would also like to thank the staff of Code Institute for their patience and always checking up on me to ensure I get through this course.