#!/bin/bash
read tecla

if [[$tecla = 'y' -o $tecla = 'Y']]
then
echo YES
elif [[$tecla = 'n' -o $tecla = 'N']]
echo NO
else
echo Digite 'n' para não ou 's' para sim
fi

