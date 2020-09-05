# Refactoring Hooks 🎣

Often times there are 2 or more `useState` hooks that share common data.  In these cases
you can refactor them out to a single custom hook.

## But why?

There are a few main reasons why we want to refactor in this scenario:

### Readability

By using a custom hook it provides a richer api that describes what we are doing.

### Testability

We can test our code easier when it is in smaller pieces.

### Simplicity

We can reduce the overall complexity of a component simply by writing less code.

## Where is the code?

The original code is on the `related-states` branch.

For the refactored example code, it is on the `related-states-refactored` branch.

[Demo App](https://zealous-poitras-777120.netlify.app/)
