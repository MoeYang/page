# -*- coding: utf-8 -*-
import os
from flask import Flask, render_template, Response

app = Flask(__name__, static_folder="static", template_folder=".")

@app.route("/")
def home():
    html= render_template("index.html")
    return Response(html, mimetype="text/html")

@app.route("/<page>.html")
def render_html(page):
    """
    仅匹配以 .html 结尾的页面
    /about.html -> about.html
    """
    filename = f"{page}.html"
    if os.path.exists(os.path.join(app.template_folder, filename)):
        return Response(render_template(filename), mimetype="text/html")
    else:
        return "404 Not Found", 404

@app.route("/health")
def health():
    return "ok"

if __name__ == "__main__":
    # 监听 9000 端口（阿里云 FC 自定义镜像要求）
    app.run(host="0.0.0.0", port=9000)
