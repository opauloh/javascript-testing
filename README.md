# javascript-testing

The best way to learn about testing in Javascript, is to create my own assertion library, based on jest concepts

This library is for educatinal purposes, to learn about and understand how testing works under Javascript world

## notes

### eslint
- If you are migrating an existent project to use eslint, and probably with Continuous Integration, you will might want to set your .eslist rules to "warn", instead of "error"
- If you are using no-undef, you will probably want to set your env to use browser, configure it with:
```
"env": {
  "browser": true
}
```
- Instead of configure each rule on eslint, we can extend it from the recommended, and then override what we want to change, we can extend with the following:
```
"extends": [
  "eslint:recommended"
]
```

### fun facts
rc suffix (like in .babelrc and .eslintrc) stands for "run commands", Thus, it would seem that the "rc" part stands for "runcom", which I believe can be expanded to "run commands". In fact, this is exactly what the file contains, commands that bash should run.

