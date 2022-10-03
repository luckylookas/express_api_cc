# setup nodejs

1) install nvm
```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```

2) download nodejs 16  using nvm

```
nvm install v16
```

3) check nodejs

```
node -v
```

# setup express

```
mkdir myproject
cd myproject
npm init
npm install express body-parser 
npm install --save-dev nodemon
```
