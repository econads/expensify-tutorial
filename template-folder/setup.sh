#!/bin/bash

#open text editor
code --folder-uri public

#open prefered browser with url
firefox -new-window https://bx-watchmen.udemy.com &
#firefox https://reactjs.org/docs/getting-started.html
firefox -new-window http://127.0.0.1:8080 &

yarn run dev-server &
