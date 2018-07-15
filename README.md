# Blugger

Blugger is a minimalist blog project that consumes data from Blogger's api.
Just clone the project and configure it with your Blogger data (BlogID and ApiKey), then run it!
#### Basic config.
Add your Blogger api credentials inside `config/index.js`.
``` code
    ...
    // Blogger data.
    blogId: '<YOURBLOGID>',
    apiKey: '<YOURAPIKEY>',
    ...
```
Save and voila!
#### Build Setup

``` bash
# clone the project
git clone git@github.com:andreslopezferro/blugger.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
This project is using [vuejs](https://vuejs.org/v2/guide/).
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).