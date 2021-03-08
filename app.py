import os
from flask import (
    Flask, flash, render_template, redirect, request, url_for, make_response)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import random
import threading
from datetime import datetime, timedelta
import re

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
        elif mongo.db.activeQuizes.find({"participants": {selectedTeamName: {"score":0}}}).count() > 0:
            flash("Pick a new team name, name taken")
            return redirect(url_for("join_quiz"))
        else:
            mongo.db.activeQuizes.update_one({"quizname" : selectedQuizName}, { "$push": {"participants" : {selectedTeamName: {"score":0}}}})

            flash("Team Name Added ")
            quizid = selectedQuizName
            return redirect(url_for('quiz', quizid=quizid))

    return redirect(url_for("join_quiz"))


@app.route("/create_quiz", methods=["POST"])
def create_quiz():

    # get count for all the question rounds
    famous_irish_people_count = mongo.db.famous_irish_people.count()-1
    geography_count = mongo.db.geography.count()-1
    history_count = mongo.db.history.count()-1
    music_count = mongo.db.music.count()-1
    sports_count = mongo.db.sports.count()-1
    st_patricks_day_count = mongo.db.st_patricks_day.count()-1
    all_question_rounds = [famous_irish_people_count, geography_count, history_count, music_count, sports_count, st_patricks_day_count]

    question_list_order = []
    number_of_questions = 0
    #get 24 questions
    while number_of_questions < 24:
        question_each_round = 0
        #get 4 questions from each section of questions
        for question_round in all_question_rounds:
            questions_in_round = []
            while question_each_round < 4:
                num = random.randint(0, question_round)
                if num not in questions_in_round:
                    questions_in_round.append(num)
                    question_list_order.append(num)
                    question_each_round += 1
                    number_of_questions += 1

    if request.method == "POST":
            selectedQuizName = re.sub(r"[^a-zA-Z0-9]","",request.form.get("quizName"))
            selectedTeamName = request.form.get("teamName")
            time = datetime.now().strftime("%H:%M:%S")

            if mongo.db.activeQuizes.find({"quizname": selectedQuizName}).count() > 0:
                flash("Quiz Name already taken")
                return redirect(url_for("make_quiz"))
            else:
                quizid = selectedQuizName
                name = {
                    "quizname": selectedQuizName,
                    "date_posted":  time,
                    "participants": [{
                        selectedTeamName: {
                            "score": 0
                        }
                    }],
                    "questions": {
                        "question1": mongo.db.famous_irish_people.find()[int(question_list_order[0])],
                        "question2": mongo.db.famous_irish_people.find()[int(question_list_order[1])],
                        "question3": mongo.db.famous_irish_people.find()[int(question_list_order[2])],
                        "question4": mongo.db.famous_irish_people.find()[int(question_list_order[3])],
                        "question5": mongo.db.geography.find()[int(question_list_order[4])],
                        "question6": mongo.db.geography.find()[int(question_list_order[5])],
                        "question7": mongo.db.geography.find()[int(question_list_order[6])],
                        "question8": mongo.db.geography.find()[int(question_list_order[7])],
                        "question9": mongo.db.history.find()[int(question_list_order[8])],
                        "question10": mongo.db.history.find()[int(question_list_order[9])],
                        "question11": mongo.db.history.find()[int(question_list_order[10])],
                        "question12": mongo.db.history.find()[int(question_list_order[11])],
                        "question13": mongo.db.music.find()[int(question_list_order[12])],
                        "question14": mongo.db.music.find()[int(question_list_order[13])],
                        "question15": mongo.db.music.find()[int(question_list_order[14])],
                        "question16": mongo.db.music.find()[int(question_list_order[15])],
                        "question17": mongo.db.sports.find()[int(question_list_order[16])],
                        "question18": mongo.db.sports.find()[int(question_list_order[17])],
                        "question19": mongo.db.sports.find()[int(question_list_order[18])],
                        "question20": mongo.db.sports.find()[int(question_list_order[19])],
                        "question21": mongo.db.st_patricks_day.find()[int(question_list_order[20])],
                        "question22": mongo.db.st_patricks_day.find()[int(question_list_order[21])],
                        "question23": mongo.db.st_patricks_day.find()[int(question_list_order[22])],
                        "question24": mongo.db.st_patricks_day.find()[int(question_list_order[23])]

                    }}
                mongo.db.activeQuizes.insert_one(name)
                resp = make_response(redirect(url_for('quiz', quizid=quizid)))
                resp.set_cookie('team', selectedTeamName)
                resp.set_cookie('url', selectedQuizName)
                return resp



@app.route("/join", methods=["POST"])
def join():
    return redirect(url_for("index"))


@app.route("/get_leaderboard")
def get_leaderboard():
    leaderboard = list(mongo.db.leaderboard.find().sort("team_score", -1))
    return render_template("leaderboard.html", leaderboard=leaderboard)


@app.route("/quiz/<quizid>")
def quiz(quizid):
    quiz = mongo.db.activeQuizes.find_one({"quizname": quizid})
    name = request.cookies.get('team')
    url = request.cookies.get('url')
    return render_template("quiz.html", quiz = quiz, name = name, url = url)

def delete_old_quiz():
    threading.Timer(600.0, delete_old_quiz).start()
    mongo.db.activeQuizes.delete_many( { "date_posted" : {"$lt" : (datetime.now() - timedelta(hours=1)).strftime("%H:%M:%S")} })
delete_old_quiz()

@app.route("/add_score", methods=["POST"])
def add_score():
    if request.method == "POST":
        name = request.cookies.get('team')
        team_entry = {
        "team_name" : name,
        "team_score" : int(request.data)
        }
        mongo.db.leaderboard.insert_one(team_entry)
        return '', 200

@app.route("/info")
def info():
    return render_template("info.html")

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
