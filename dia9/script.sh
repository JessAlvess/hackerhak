#!/bin/bash

# read x
# result=$(echo "scale = 4; $x" | bc -l)
#  printf "%0.3f" $result

printf "%0.3f" $(cat - | bc -l)