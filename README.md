# Quantified Self Starter Kit (Old School)

This starter kit differs from the other QS starter kit, in that it does not use a build tool (webkit). Old school baby!

![http://i.giphy.com/anjRJ4nv9WJzO.gif](http://i.giphy.com/anjRJ4nv9WJzO.gif)

Just clone it down, and start editing HTML/JS/CSS.

## Running Tests

This project uses [Mocha](https://mochajs.org/) as the test runner, [Chai](http://chaijs.com/) for assertions, and [jQuery](https://jquery.com/) for integration test like functionality.

We'll need `node` and `npm` installed. Run this if you don't already have `node`:

```
$ brew install node
```

To install mocha, run the following:

```
$ npm install -g mocha
```

Tests must be run in a development server. We'll use a simple static file server called `asdf`

```
$ npm install -g asdf
```

And then run `asdf` from the root folder of your project

```
$ asdf
```

Now you have a dev server running at [http://localhost:5000](http://localhost:5000). Navigate to the test folder, and click on any `.html` files to run your tests.
