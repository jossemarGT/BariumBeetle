# Barium Beetle

Copper Mantis web client.

## Make it run!
This application depends of Copper Manits backend and a http server (like Apache, Nginx or even BrowserSync node module) to make it accesible to any web browser and run.

That being said you can go to **Deploy this application** section and check each step accomplish this task.

## Deploy this application

First you need have to install all the dependencies, then run the default `gulp` task and finally deploy the application that lives inside of `dist` directory.

## Contribute

* Clone this repo

```bash
$ git clone <repo url> && cd <repo directory>
```

* Install the project dependencies

```bash
$ npm install
$ bower install
```

* Run the static http server with `gulp`

```bash
$ gulp serve
```

* Remeber to have CopperMantis running

```bash
$ # In other terminal
$ git clone <CopperMantis repo url> && cd <CopperMantis directory>
$ docker-compose up # To stop it just use Ctrl+C
```

### Dev dependencies

- Node v0.12.7 or greater
	- bower
	- gulp

### Gulp Tasks

You can run indepently each task inside of `gulp` directory, but the most important tasks are:

- `gulp` this command runs the *default* task which build the application just to be delivered into `dist` directory.
- `gulp serve` this task spin up a static http server (BrowserSync) and chain the `watch` task in order to refresh automaticly your web browser for every change that you make in the source code.
