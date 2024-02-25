#!/bin/bash

read x
read y
read z

if [ $x -eq $y ] && [ $y -eq $z ] 
then
    echo EQUILATERAL
elif [ $x -eq $y ] && [ $y -ne $z ] || [ $x -eq $z ] && [ $y -ne $z ] || [ $y -eq $z ] && [ $x -ne $z ]
then
    echo ISOSCELES
else 
    echo SCALENE
fi