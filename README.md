# Quantified Self Starter Kit (Old School)

This starter kit differs from the other QS starter kit, in that it does not use a build tool (webkit). Old school baby!

![http://i.giphy.com/anjRJ4nv9WJzO.gif](http://i.giphy.com/anjRJ4nv9WJzO.gif)

Just clone it down, and start editing HTML/JS/CSS.

## Running Tests

This project uses [Mocha](https://mochajs.org/) as the test runner, [PhantomJS] as the browser, [Chai](http://chaijs.com/) for assertions, and [jQuery](https://jquery.com/) for integration test like functionality.

To install phantom, run the following:

```
$ brew install phantomjs
$ brew install node
$ npm install mocha mocha-phantomjs
```

To run your tests, run the following from your terminal

`$ mocha-phantomjs test/*-test.html`
