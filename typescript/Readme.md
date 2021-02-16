# Basic Nodejs setup using Typescript

Run the following command to create the configuration files for typescript and nodejs.

```
tsc --init
npm init -y
```

In `package.json`, configure the following script to compile and start your server.

```
"scripts": {
    "start": "npm run build",
    "build": "nodemon --watch '*.ts' --exec 'ts-node' index.ts"
  },
```
