#!/bin/bash

#open text editor
code .

#open prefered browser with url
#firefox https://reactjs.org/docs/getting-started.html
firefox -new-window http://127.0.0.1:8080 &
firefox -new-window https://bx-watchmen.udemy.com &

yarn run dev-server
