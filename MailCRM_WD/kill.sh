#!/bin/bash
ps -ef |grep -i java |awk '{print $2}' |xargs kill -9