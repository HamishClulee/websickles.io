#!/usr/bin/env bash
cd server
kill -9 $(lsof -t -i:8297)
yarn dev --fix