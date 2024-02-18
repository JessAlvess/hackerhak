#!/bin/bash

read t
yes=Y
yes1=y
no=N
no1=n

if [[ $t = $yes ]]
then
    echo YES
elif [[ $t = $yes1 ]]
then
    echo YES
elif [[ $t = $no ]]
then
    echo NO
elif [[ $t = $no1 ]]
then
    echo NO
fi