import os
from flask import (
    Flask, flash, render_template, redirect,request, url_for)
from flask_pymongo import PyMongo
import datetime
from bson.objectid import ObjectId
import random

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

@app.route("/")

@app.route("/index")
def index():
    famous_irish_people = mongo.db.famous_irish_people.find()
    return render_template("index.html", famous_irish_people=famous_irish_people)

@app.route("/make_quiz")
def make_quiz():
    return render_template("make_quiz.html")

@app.route("/join_quiz")
def join_quiz():
    return render_template("join_quiz.html")

@app.route("/edit_quiz", methods=["POST"])
def edit_quiz():
    if request.method == "POST":
        selectedQuizName = request.form.get("quizURL")
        selectedTeamName = request.form.get("teamName")

        if mongo.db.activeQuizes.find({"quizname": selectedQuizName}).count() < 1:
            flash("Quiz doesn't exist")
            return redirect(url_for("join_quiz"))
        elif mongo.db.activeQuizes.find({ "participants": {selectedTeamName: {"score":0}}}).count() > 0:
            flash("Pick a new team name, name taken")
            return redirect(url_for("join_quiz"))
        else:
            name = {
                "quizname": mongo.db.activeQuizes.find_one({"quizname": selectedQuizName})["quizname"],
                "score" : 0
            }
            mongo.db.activeQuizes.update_one({"quizname" : selectedQuizName}, { "$push": {"participants" : {selectedQuizName: {"score":0}}}})
            flash("Team Name Added ")
            return redirect(url_for("join_quiz"))

    return redirect(url_for("join_quiz"))


@app.route("/create_quiz", methods=["POST"])
def create_quiz():

    famous_irish_people_count = mongo.db.famous_irish_people.count()
    geography_count = mongo.db.geography.count()
    history_count = mongo.db.history.count()
    music_count = mongo.db.music.count()
    sports_count = mongo.db.sports.count()
    st_patricks_day_count = mongo.db.st_patricks_day.count()
    question1 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question2 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question3 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question4 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question5 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question6 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question7 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question8 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question9 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]
    question10 = mongo.db.famous_irish_people.find()[random.randrange(famous_irish_people_count)]


    if request.method == "POST":
            selectedQuizName = request.form.get("quizName")
            time = str(datetime.datetime.now())

            if mongo.db.activeQuizes.find({"quizname": selectedQuizName}).count() > 0:

                flash("Quiz Name already taken")
                return redirect(url_for("make_quiz"))
            else:
                name = {
                    "quizname": request.form.get("quizName"),
                    "date_posted":  datetime.datetime.now(),
                    "participants": [{
                        request.form.get("teamName"): {
                            "score": 0
                        }
                    }],
                    "question1": question1,
                    "question2": question2,
                    "question3": question3,
                    "question4": question4,
                    "question5": question5,
                    "question6": question6,
                    "question7": question7,
                    "question8": question8,
                    "question9": question9,
                    "question10": question10
                }
                mongo.db.activeQuizes.insert_one(name)
                flash("Quiz Successfully Added ")
                return redirect(url_for("make_quiz"))

@app.route("/join", methods=["POST"])
def join():
    return redirect(url_for("index"))


@app.route("/get_leaderboard")
def get_leaderboard():
    leaderboard = list(mongo.db.leaderboard.find().sort("team_score", -1))
    return render_template("leaderboard.html", leaderboard=leaderboard)


# @app.route("/quiz/<quizid>")
# def quiz(quizid):


#     quiz = mongo.db.activeQuizes.find_one({"quizname": quizid})

#     flash(quiz)


#     #post = mongo.db.posts.find_one({"_id": ObjectId(post_id)})
#     return render_template("quiz.html")




if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
