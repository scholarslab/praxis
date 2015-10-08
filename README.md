# Set up

Use a terminal to do the following commands
  - **Mac**:

    - Applications->Utilities->Terminal.app

    - or use Spotlight: &#8984;-Space, and type in Terminal

  - **Windows**:

    - Use [git bash](https://git-for-windows.github.io/)

1. Clone the repo

    `$ git clone https://github.com/scholarslab/praxis `

2. Install gems and other software (OS X only; **Windows users find
   us**)

  - Go into the praxis directory

    `$ cd praxis`

  - And run bundle. This will install the Ruby gems needed, including Jekyll.

    `$ bundle`

  - Install a syntax highlighter, the Python package Pygments

    `$ easy_install Pygments`

  - Install the Nodejs application, a web server for viewing changes on your
    machine.

    `$ brew install node`

    - and then

    `$ npm install`

    - and to install bower, a package manager for the web (basically, you run
      it to put together all of the files to make a website)

    `npm install -g bower grunt-cli`

    - and then install the things bower needs

    `$ bower install`

# Add a New Post

There's a tool to help generating what you need for new posts:

```shell
$ rake new_post[post-type,"Title of your post"]
Creating new post file _posts/post-type/2015-09-24-title-of--your-post.md
```

This will create a new post file in the correct location with the needed
header information.

For example, to create a new memo:
```shell
$ rake new_post[blog,"My Blog Post"]
$ rake new_post[memo,"My Memo"]
$ rake new_post[meeting-note,"My Meeting Note"]
```

You can check on what was generated with:

```
$ git status
```

# Run locally

## New Way

Let `grunt` do the heavy lifting:

```
$ grunt
```


## Old Way

Foreman is a program that starts all of the other programs (web server,
compilers, etc) that need to run for you to run the site locally.

In this case, it is starting Jekyll's built in web server and a program call
compass that will watch for any changes in files, and update the Jekyll web
server.

  `$ foreman start`

# Development

Edit files, see the changes happen in real time

Best practice is to make your own branch, make changes there, and then merge
them into the main branch when done.

  - Create a new branch

  `git branch my_awesome_branch`

  - Edit your files, and then add and commit them.

  `git add filename`

  a shortcut to add all of the files you changed is to replace the filenames with a period

  `git add .`

  and then commit

  `git commit -m "A good message here"`


# Deployment

Once you are done making changes on your local computer, you can push them up
to the server

  ```
  git checkout gh-pages
  git merge my_awesome_branch
  git push
  ```
