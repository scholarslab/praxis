# Set up

Use a terminal to do the following commands
  - **Mac**:

    - Applications->Utilities->Terminal.app

    - or use Spotlight: &#8984;-Space, and type in Terminal

  - **Windows**:

    - Option 1 (Easier in the long run): Install [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) and a Linux distribution (the default Ubuntu is fine) and then [Homebrew for Linux](https://brew.sh/)

    - Option 2 (Almost immediately harder): Use [git bash](https://git-for-windows.github.io/)

1. Clone the repo

    `$ git clone https://github.com/scholarslab/praxis `

2. Install gems and other software (OS X only; **Windows users find
   us**)

  - Go into the praxis directory

    `$ cd praxis`

  - And run bundle. This will install the Ruby gems needed, including Jekyll.

    `$ bundle`

# Build and run locally

Build the site using Jekyll and then run a local webserver to see what the site will look like.

    `$ bundle exec jekyll serve`

# Add a New Post

There's a tool to help generating what you need for new posts:

```shell
$ rake new_post[post-type,"Title of your post"]
Creating new post file _posts/post-type/2015-09-24-title-of--your-post.md
```

This will create a new post file in the correct location with the needed
header information.

Examples:
```shell
$ rake new_post[blog,"My Blog Post"]
$ rake new_post[memo,"My Memo"]
$ rake new_post[meeting-note,"My Meeting Note"]
```

You can check on what was generated with:

```
$ git status
```


# Development

Edit files, see the changes happen in real time

Best practice is to make your own branch, make changes there, and then merge
them into the main branch when done.

  - Create a new branch and switch to it

  `git branch my_awesome_branch`

  `git checkout my_awesome_branch`

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
