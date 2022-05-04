#!/bin/bash

#1 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele. 
mkdir unix_tests
cd unix_tests

#2 - Crie um arquivo de texto com o nome trybe.txt. 
touch trybe.txt

#3 - Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.
cp trybe.txt trybe_backup.txt

#4 - Renomeie o arquivo trybe.txt.
mv trybe.txt trybe_renomeado.txt

#5 - Dentro de unix_tests, crie um novo diretório chamado backup.
mkdir backup

#6 - Mova o arquivo trybe_backup.txt para o diretório backup.

mv trybe_backup.txt backup/trybe_backup.txt

#7 - Dentro de unix_tests, crie um novo diretório chamado backup2.
mkdir backup2

#8 - Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
mv backup/trybe_backup.txt backup2/trybe_backup.txt

#9 - Apague a pasta backup
rmdir backup

#10 - Renomeie a pasta backup2 para backup.
mv backup2 backup

#11 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
pwd
ls

#12 - Apague o diretório backup
rm -rf backup

#13 - Limpe o terminal
clear

#14 - Mostre na tela as 5 primeiras skills do arquivo skills.txt.
head -n 5 skills.txt

#15 - Mostre na tela as 4 últimas skills do arquivo skills.txt.
tail -n 4 skills.txt

#16 - Apague todos os arquivos que terminem em .txt.
rm *.txt
