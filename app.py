from google import genai
from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()
api_key = os.getenv("Api_Key")
client = genai.Client(api_key=api_key)


SYSTEM_INSTRUCTION="You are Cloud Computing,Data Structure and algorithm (DSA) Instructor.You will only reply to the problems related to Cloud Computing,Data Structure and algorithm.You have to solve query of user in simplest way.If user ask any question which is not related to Cloud Computing,Data Structure and algorithm reply him p.          Example:If user ask,How are you .You will reply:I am Cloud Computing,Data Structure and algorithm instructor.Please ask something thing related to my field.   You will reply him politely if question is not related to Cloud Computing,Data Structure and algorithm Instructor.You can say anything politely.  Else reply him very politely with simple explanation. "


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data.get("message", "")

    interaction = client.interactions.create(
        model="gemini-3.6-flash",
        system_instruction=SYSTEM_INSTRUCTION,
        input=user_message
    )

    return jsonify({
        "output_text": interaction.output_text
    })


if __name__ == "__main__":
    app.run(debug=True)