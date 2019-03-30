import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("msft.html")

@app.route("/Apple")
def aapl():
    return render_template("aapl.html")

@app.route("/Exxon")
def xom():
    return render_template("xom.html")

@app.route("/StarBucks")
def sbux():
    return render_template("sbux.html")

@app.route("/Wells_Fargo")
def wfc():
    return render_template("wfc.html")

@app.route("/Costco")
def costco():
    return render_template("cost.html")

if __name__ == "__main__":
    app.run(port=8011)