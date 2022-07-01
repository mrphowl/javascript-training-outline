# Setting Up The Local Environment
This local setup is for macOS Moterey v12.13.1
## Browser, Editor and Terminal Setup
### Browser
You need at least 1 browser.
- Chrome: download from https://www.google.com/intl/en_ph/chrome/
- Firefox: download from https://www.mozilla.org/en-US/firefox/new/
- Safari: this browser comes pre-installed in Mac; update to the latest version
- Edge: download from https://www.microsoft.com/en-us/edge
### Editor
You can use any one of these or another editor or IDE of your choice.
- [VS Code](https://code.visualstudio.com/): get from https://code.visualstudio.com/download
- [Sublime](https://www.sublimetext.com) Text: download from https://www.sublimetext.com/
- [WebStorm](https://www.jetbrains.com/webstorm/): follow the instructions from https://www.jetbrains.com/help/webstorm/installation-guide.html#standalone
- [Vim](https://www.vim.org/): terminal-based; check in terminal if this is already installed or visit https://www.vim.org/download.php
- [Nano](https://www.nano-editor.org/): terminal-based; check in terminal if this is already installed or visit https://www.nano-editor.org/download.php
### Terminal Setup
To open the Terminal in macOS, press `command + space bar`, type in "Terminal" and then press `Enter`.
- [Homebrew](https://brew.sh/): copy and paste the installation command from the home page into your terminal
- Node Version Manager (NVM): install via [homebrew](https://formulae.brew.sh/formula/nvm)

  `brew install nvm`
- NodeJS: install via nvm or [homebrew](https://formulae.brew.sh/formula/node) if you only need a single version

  `nvm install --lts`

  `nvm use --lts`

  You can also install specific versions by specifying the version like

  `nvm install 18.1.0`

  `nvm use 18.1.0`

  After installation, you can check the versions of node, npm, and npx.

  `node -v` `npm -v` `npx -v`

## To Do
- Add instructions for Windows environment
