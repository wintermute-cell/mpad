#!/bin/env sh

cd $HOME/src/mpad/server
export PORT=8777
gunicorn app:app -b 192.168.178.34:$PORT
