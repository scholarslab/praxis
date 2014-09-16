# Readme

Run bundler to install required gems; you'll also need Pygments

    bundle && easy_install Pygments && npm install && bower install

## Development

Open the code project and run it with `foreman`

```
$ foreman start
```

If you really want to be hard core, you can create an alias in for this
in bash. In your `~/.bash_profile`, add this:

```
alias fs="foreman start"
```

Then, open a new terminal window (or run `source ~/.bash_profile`)


## Deployment

Just push it to gh-pages branch on github.

```
$ git co gh-pages
$ git merge my_awesome_branch
$ git push
```
     

