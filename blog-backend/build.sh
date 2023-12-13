#!/bin/bash

pip install --upgrade pip==23.3.1

pip install -r requirements.txt

gunicorn blog.wsgi
