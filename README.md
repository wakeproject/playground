Playground for Wahlque Demos
============================

Preparation
-------------

Installing node.js

```bash
sudo apt-get install nodejs
```

Setup antinode static webserver

```bash
cd ~
makdir devtools
cd devtools
git clone git://github.com/mhansen/antinode.git
wget https://raw.github.com/gist/2913723/8173f6cdbba7f7e21163d6254f1b08077a645171/antinode
chmod 777 antinode
cd ~/bin
ln -s ../devtools/antinode/antinode ./
```

Don't forget to setup your github keys
https://help.github.com/articles/generating-ssh-keys

Fork and merge back
-------------------

###How to fork

Please refer the document https://help.github.com/articles/fork-a-repo


###Contribute your own idea on your own fork

Assuming your github account is GREATECODER

```bash
git clone git@github.com:GREATECODER/playground.git
cd playground
git submodule init
git submodule update
antinode
```
now you can visit http://localhost:8080/

Play with it and contribute your own idea on your own fork

###Request a merge back to the main version

Please refer the document https://help.github.com/articles/using-pull-requests
