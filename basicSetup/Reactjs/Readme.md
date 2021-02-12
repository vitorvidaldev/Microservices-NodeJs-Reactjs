# Basic ReactJs Project

There isn't an easy way to use React without installing node on your computer/development environment.

The installation instructions for Ubuntu 20.0.4 can be found bellow. The installation instructions for other OSs are straightfoward and are not included in this file.

## NodeJs Installation - Ubuntu 20.0.4

Run the following commands

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

```
sudo apt install nodejs
```

Verify the installation running

```
node --version
npm --version
```

## Create New ReactJs Project

To create a new react app, run the following command.

```
npx create-react-app my-app
```

## Running the app locally

Inside the app's directory, you can run the following commands.

Starts the development server.
```
npm start
```

Bundles the app into static files for production.
```
npm run build
```

Starts the test runner.
```
npm test
```

Removes this tool and copies build dependencies, configuration files and scripts into the app directory.
```
npm run eject
```