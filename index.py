# -*- coding: utf-8 -*-
from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder=".")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/health")
def health():
    return "ok"

if __name__ == "__main__":
    # 监听 9000 端口（阿里云 FC 自定义镜像要求）
    app.run(host="0.0.0.0", port=9000)
