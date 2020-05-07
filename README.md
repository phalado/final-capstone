# Microverse's Final Capstone Project: Book of Appointment

<h1 align="center"><img src="https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/welcome.png"></h1>

This is part of Microverse's final capstone project.
In this repository, I build the front end for a Dragon Flying Academy web app with the characters of [How to Train Your Dragon][httyd] series.


## Table of contents

- [Microverse's Final Capstone Project: Book of Appointment](#microverses-final-capstone-project-book-of-appointment)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [The Dragon Flying Academy](#the-dragon-flying-academy)
    - [How to open](#how-to-open)
    - [Technologies used](#technologies-used)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)


## About 

The project's goal was to create a book of appointment. The back-end should be a REST API done with Ruby on Rails. The front-end should be done with React and Redux. This README will be focused on the front-end. For more details about the API visit the back-end's repository.

The project's assignment can be seen [here][assignment].

The back-end repository can be found [here][back-end].

Link to a live version [here][live-version].

Repository: https://github.com/phalado/final-capstone


## The Dragon Flying Academy 

For this project, I created Berk's Academy web app. Berk is the only place in the world where dragons live side-by-side with humans. The dragon riders decided to create a dragon flying academy to teach the world how to ride a dragon.

In this web app, you can schedule a class with the instructor of your choice. To schedule a class just follow the steps:

* Signup in the [Signup page][signup]. You will be redirected to the [Login page][login], so login.
![signup-img][signup-img]
![login-img][login-img]
* Choose a dragon trainer on the [Instructors page][instructors].
![instructors-img][instructors-img]
* Click in the button to be redirected to the instructor's schedule page
![instructor-img][instructor-img]
* Choose a spot. You can schedule times with  a green text. Times with a yellow text were already scheduled by you. Red text shows other user's times. Click on Barf and Belch to navigate to the previous week's or next week's schedule.
![schedule-img][schedule-img]

An important detail: Dohko insists that, although he really trained a dragon, it's not a riding one.


### How to open

You can open the catalog online clicking [here][live-version] or locally following these steps:

* Click on the green button "Clone or Download"
* Click on Download ZIP
* Extract the project
* In your terminal, navigate to the game's folder
* Run *npm install*
* Run *npm start*

A tab will be opened in the browser.


### Technologies used

To create this project I used:

* JavaScript
* A bit of HTML and CSS
* eslint
* React
* Redux
* PropTypes
* Github
* Netlify


## Contact

Author: Raphael Cordeiro

Follow me on [Twitter][rapha-twitter],  visit my [Github portfolio][rapha-github], my [Linkedin][rapha-linkedin], or my [personal portfolio][rapha-personal].


## Acknowledgments

[Microverse][mcvs]

I have no business rights about the characters used in this API. This is only for learning purposes. All characters belong to [DreamWorks][httyd].


<!-- Links -->
[assignment]: https://www.notion.so/Final-Capstone-Project-Book-an-Appointment-41ded2ee99ff4fe4becf91acb332ca26
[live-version]: https://features--berksacademy.netlify.app/
[back-end]: https://github.com/phalado/final-capstone-api/
[httyd]: https://www.dreamworks.com/how-to-train-your-dragon
[mcvs]: https://www.microverse.org/
[rapha-github]: https://github.com/phalado
[rapha-twitter]: https://twitter.com/phalado
[rapha-linkedin]: https://www.linkedin.com/in/raphael-cordeiro/
[rapha-personal]: https://phalado.github.io/

[sigup]: https://features--berksacademy.netlify.app/signup
[login]: https://features--berksacademy.netlify.app/login
[instructors]: https://features--berksacademy.netlify.app/instructors

<!-- Images -->
[signup-img]: https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/signup-print.png
[login-img]: https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/login-print.png
[instructors-img]: https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/instructors-print.png
[instructor-img]: https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/instructor-print.png
[schedule-img]: https://raw.githubusercontent.com/phalado/final-capstone/develop/public/contents/schedule-print.png
