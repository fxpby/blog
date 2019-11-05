#!/bin/sh
cd ../../logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log