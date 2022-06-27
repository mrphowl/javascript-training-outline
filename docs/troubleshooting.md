# Troubleshooting

Some issues I encountered during this course and how they are solved.

---

## Error when running `npm run lint`

```
TypeError: Module.createRequire is not a function
```
### Problem
This error seems to be because the version of Node.js used is too old or outdated as mentioned [here](https://stackoverflow.com/a/71334283).

### Solution
Install a higher version of Node.js. This is easier when using NVM.

```shell
nvm install --lts
nvm use --lts
```
Additional reference in setting up ESLint if using WebStorm - https://www.jetbrains.com/help/webstorm/eslint.html
Additional reference in setting up Prettier if using WebStorm - https://prettier.io/docs/en/webstorm.html
---

