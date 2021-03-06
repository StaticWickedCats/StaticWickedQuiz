import os 
from flask import (
    Flask, flash, render_template, redirect,request, url_for)
from flask_pymongo import PyMongo
import datetime
from bson.objectid import ObjectId

if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

#activeQuizes = []

@app.route("/") 
@app.route("/index")
def index():
    famous_irish_people = mongo.db.famous_irish_people.find()

    


    return render_template("index.html", famous_irish_people=famous_irish_people)


@app.route("/create_quiz", methods=["POST"])
def create_quiz():
    if request.method == "POST":
            time = str(datetime.datetime.now())
            name = {
                "quizname": request.form.get("quizname"),
                "date_posted":  datetime.datetime.now(),
            }
            #activeQuizes.append(request.form.get("quizname"), )
            mongo.db.activeQuizes.insert_one(name)
            flash("Quiz Successfully Added " + request.form.get("quizname") + time)
            return redirect(url_for("index"))


# ---------------------------------------------------------------------------------------------------------
@app.route("/get_leaderboard")
def get_leaderboard():
    leaderboard = list(mongo.db.leaderboard.find().sort("team_score", -1))
    return render_template("leaderboard.html", leaderboard=leaderboard)






# ---------------------------------------------------------------------------------------------------------




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
