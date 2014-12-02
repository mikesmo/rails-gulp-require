
*** Setup rails ***
1. Install rvm
> curl -L https://get.rvm.io | bash -s stable --ruby
> rvm requirements
> rvm install 2.1.2
> rvm use 2.1.2 --default

2. Create gemset 
> rvm gemset use 2.1.2@rails-gulp-require --create

If you get:
RVM is not a function, selecting rubies with 'rvm use ...' will not work.

Then make sure the following lines are in ~/.profile
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
source ~/.rvm/scripts/rvm

3. Create rails
> rails new rails-gulp-require -O -V --no-skip-spring -T --no-rc

Error fix:
Gem::RemoteFetcher::UnknownHostError: no such name
See: http://railsapps.github.io/openssl-certificate-verify-failed.html
> rvm osx-ssl-certs status all
if the ssl's are old:
> rvm osx-ssl-certs update all

Update brew:
> cd /usr/local
> git fetch origin
> git reset --hard origin/master

Then:
> brew update
> brew uninstall openssl
> brew install openssl
> brew link openssl --force
> brew install curl-ca-bundle

Turns out: rubygems.org was down. Change Gemfile to:
source 'https://ruby.taobao.org/'


*** Install Node and npm using nvm ***
http://www.wenincode.com/installing-node-jsnpm-without-sudo/

1. Install nvm
> curl https://raw.githubusercontent.com/creationix/nvm/v0.12.1/install.sh | bash

2. Restart terminal

3. List Node versions:
> nvm ls-remote

4. Install the latest
> nvm install 0.11.14

5. Verify
> nvm current
> node -v
> npm -v


*** Install npm packages ***

1. Install gulp gloabally
> npm install -g gulp

2. Create npm package
> npm init

3. Install gulp
> npm install gulp --save-dev

4. Install gulp-uglify
> npm install gulp-uglify --save-dev

5. Install gulp-concat
> npm install gulp-concat --save-dev

6. Install gulp-coffee
> npm install gulp-coffee --save-dev

7. Install event-stream
> npm install event-stream --save-dev

