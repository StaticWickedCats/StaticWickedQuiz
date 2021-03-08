# StaticWickedQuiz

The StaticWicked Quiz from StaticWickedCats is a Quiz-based game. 
This is made in celebration of St.Patrick's Day on 17th March. Moreover to bring a sense of community and «togetherness» during a difficult time (Covid). 
Furthermore to make it so we all can test our knowledge of this day, including the traditions and culture of Ireland in a fun way, as well of the use of video chatting platforms, and gamification to enhance the experience. 

This project was developed by StaticWickedCats, students from [Code Institute](https://codeinstitute.net/):
- [Anna](https://github.com/annaweronica)
- [Chris](https://github.com/C-Undritz)
- [Fernanda](https://github.com/fernandagil)
- [Matt](https://github.com/matt-oc)
- [Rania](https://github.com/raniamarhoni)
- [Vanja](https://github.com/VTwin90)

With the guidance of our mentor [Rian](https://github.com/rianjs)

You can visit the deployed website [here](https://staticwickedquiz.herokuapp.com/).

---

## 1. UX

### 1.1. User Stories
- As a user, I want to have fun on St. Patrick's day, even while in lockdown.
- As a user, I want to learn more about Ireland to celebrate St. Patrick's day.
- As a user, I want to play with my friends and/or family while social distancing.
- As a user, I want to be able to see how good I did compared to other teams.

### 1.2. Design Choices

**Colours**: 
The colors used were shades of green, while having some specific details in a color of blue, purple, orange and pink, to link with the St. Patrick's Day theme, our main logo and give it a feel of a game. 
- Main Colors being used: #2AA167, #2FB675, #96F09E
- Gradient on Nav and Footer: #048243, #32BF84, #CAFFFB
- Added Shadow and Colors on Text: #EE3EC9, #9D3BE1
- Answer Boxes Colors: #FF914D, #EE3EC9, #9D3BE1, #38B6FF

**Fonts**: 
The font ‘Magz’ and ‘Orbitron’ was used, as it was or close to the logo design font as well as giving it a «game» feel. Which links with the theme of a quiz game. The fonts was imported from Google Fonts and from Cufon Fonts.

### 1.3. Wireframes
The wireframes were designed using [Balsamiq](https://balsamiq.com/). They're accessible in the following links:

|    Home   |    Quiz    |    Leaderboard    |
|    :----:    |     :----:   |    :----:    |
| [Home Page](wireframes/home.png) | [Quiz Page](wireframes/quiz.png) | [Leaderboard Page](wireframes/leaderboard.png) |

---

## 2. Features

**Home Page** includes:
- **Game's name and main logo**: allows users to identify where they are and the kind of game they're about to play.
- **Navigation Menu**: allows users to navigate the site in an easy and intuitive way.
- **Footer**: allows users to go to the group's social links.

**Quiz Page** includes:
- **Team name**: allows users to know the name of their team.
- **Quiz name**: allows users to know the name of their game. This name can be shared with friends so the join the same game as you.
- **Questions**: this includes a question and four possible answers where only one of them is right.
- **Timer**: allows the user to know how much time left the have to finish the game.

**Leaderboard Page** includes:
- a leaderboard: this allows the different teams to see which teams did best.

**Info Page** includes:
- Info cards: these include an image related to St. Patrick's Day. On the back of these images we get some information related to the images.

---

## 3. Technologies used

- [HTML5](https://html.com/)
- [CSS3](http://www.css3.info/) 
- [JavaScript](https://www.javascript.com/) 
- [Python](https://www.python.org/)
- [Bootstrap](https://getbootstrap.com/) 
- [Flask](https://www.fullstackpython.com/flask.html)
- [Mongo](https://www.mongodb.com/)
- [Regex]()
- [Gitpod](https://gitpod.io/)
- [VSCode](https://code.visualstudio.com/)
- [GitHub](https://github.com/) 
- [Heroku](https://www.heroku.com/)
- [Font Awesome](https://fontawesome.com/) 
- [Cufon Fonts](http://www.cufonfonts.com) 
- [Canva](https://www.canva.com/)

---

## 4. Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


The testing process can be seen [here](TESTING.md).

---

## 5. Deployment
	
1. As I was going to use Gitpod I used this [template](https://github.com/Code-Institute-Org/gitpod-full-template) to open a GitHub repository
2. To set up on Heroku you need to have a requirement.txt which will tell the application which applications and dependencies are required to run the app. You would also need a Procfile to know which file runs the app
3. Once I set up the requirement.txt and profile I went onto Heroku and set up a new app and selected the region closest to me
4. I then connected my Heroku to GitHub so it can automatically deploy when deploying to GitHub. 
5. I did this by going onto the Heroku app and under the tab deploy I selected GitHub
6. I then went onto automatic deploys and added in my repository
7. Before I clicked enable automatic deploys go onto settings and click on Reveal Config Vars. Once selected I added in the IP, Port, Secret key, Mongo URI, and Mongo Database
8. I went back to Gitpod and committed and push all the new files requirement.txt and profile to Github.
9. Then I went back to Heroku and selected Enable Automatic Deploys which will then build the app.

---

## 6. Credits
### 6.1. Content
The information to create questions were obtained from the following sources:
- https://www.fastweb.com/student-life/articles/saint-patricks-day-quiz
- https://www.irishcentral.com/culture/craic/st-patricks-day-trivia
- https://parade.com/1006852/kelseypelzer/st-patricks-day/
- https://www.irishcentral.com/roots/history/oldest-st-patricks-day-parade-us
- https://create.kahoot.it/share/a8080d5a-d8ab-486c-b7c8-b3495fb8c445
- https://www.ireland.com/en-no/magazine/culture/st-patricks-quiz/
- https://www.triviaquestionsnow.com/public/for/st-patricks-day-trivia?page=2
- https://www.sporcle.com/games/SporcleExp/famous-irish-people-multiple-choice
- http://123facts.com/play-quiz/Famous-Irish-People-6726.html
- https://www.irishtimes.com/life-and-style/abroad/st-patrick-s-day-quiz-100-questions-to-test-your-irishness-1.3428474
- https://www.beano.com/posts/irish-history-quiz
- https://www.irelandbeforeyoudie.com/the-10-best-irish-bands-of-all-time-ranked/
- https://www.fignotes.com/blog/the-9-most-popular-st.-patricks-day-songs-in-2019
- https://play.howstuffworks.com/quiz/what-do-you-know-the-history-st-patricks-day?remorapos=0&rmalg=es&remorasrc=ea0109a2-fe59-11e6-99d2-080027b55128&remoraregion=bottom
- https://memorylanetherapy.com/st-patricks-day-quiz-for-seniors/
- https://barsandbartending.com/st-patricks-day-trivia/
- https://eurovision.tv/story/a-decade-of-song-eurovision-winners-through-the-years-1970-1979
- https://www.funtrivia.com/playquiz/quiz18953615b4208.html
- https://www.paulsquiz.com/geography-and-places-quizzes-mainmenu-327/202-free-quiz-questions/72-geography-quizzes/1388-irish-geography-quiz-2
- https://www.worldometers.info/world-population/ireland-population/
- https://pubquizquestions.net/questions/geography/page-23
- https://www.irishmirror.ie/sport/irish-sport-quiz-questions-answers-22027110

Inspiration for flipping cards: [codeply.com](https://www.codeply.com/go/roydoXgaLr/bootstrap-4-flip-cards)

### 6.2. Media
All images in the **Info Page** are from Google resources with Creative Commons licenses.

### 6.1. Acknowledgments

I received inspiration for this project from X