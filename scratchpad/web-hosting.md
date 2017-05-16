---
layout: default
permalink: "/scratchpad/web-hosting/"
---

# So You Want A Website...

## Some things to consider:

There are several things to consider when creating and publishing your website.
Just a few:

* What kind of content, and how much?
* What is your timeline for your project?
* Who is your intended audience?
* Are there any technical restrictions or incompatabilities?
* Do you have the technical skills you need, or know how to acquire
them? (hint-Scholars' Lab, your librarian, web resources such as
[StackOverflow][stack], or the [Hard Way series][zed]...)


## Hosting

Once you have your content (and skills) in place, you'll need a place to put
your awesome site. A few (not complete!) are listed below:

There are a lot of options out there for web hosting, and the right one for you
depends on what your needs are, and how much you're willing to invest in this
endeavor. The following list are some options with various technologies that
they support.

### [Github Pages][ghp]

[Github ][gh] provides hosting for static web content and [jekyll][jekyll], a
static site generator (a favorite tool in the Scholars' Lab). This is a great
option for building your personal digital identity, but does not allow you to
run software like Omeka or Wordpress (though [jekyll][jekyll] is a replacement
for Wordpress).

**Cost**: Free with a [Github][gh] account.

### [Heroku][heroku]

Heroku is a "cloud application platform" that allows you to deploy applications
to their platform using `git`. This works great for small-scale applications,
and the platform is capable of running just about any type of application. It
even provides a database ([PostgreSQL][pg] as well a [many
addons][heroku-addons] to handle almost any kind of application. This is
another favorite of the Scholars' Lab as [Prism][prism] is hosted there (as
well as other experiments).

**Cost**: To start out, free. You are then able to scale as needed. See their
[pricing page](https://www.heroku.com/pricing) for more information.

It's worth noting, this does not include storage. You will need to access that
through an [addon service][heroku-addon].


### [appfog][appfog]

appfog is a cloud application platform much like [Heroku][heroku]. One of the
nice things this provides is "one-click' installation of many popular web
applications (Wordpress, django, drupal, and others). This is a great option if
you like the idea of running these applications, but the commandline is still
intimidating.

**Cost**: 30-day free trial. After that, $20/month for a basic account (not
including storage).

### Virtual Private Servers

You can quickly find yourself pushing against the limitations of the "easy"
cloud application platforms is that it can get a bit expensive if you are
running a custom application with specific software dependencies. This is where
Virtual Private Servers, or **VPS**, services come in to play. Instead of
rending a physical server, you rent a "virtual server" that is hosted on a
server to run your applications. For all intents and purposes, this is the same
as a physical server, meaning you are responsible for setting them up,
installing software  updates, and managing the configuration of anything you
need to run.

Some that the staff at the Scholars' Lab has used for projects include:

* [Digital Ocean](https://www.digitalocean.com)
* [OpenShift](https://www.openshift.com)
* [Linode](https://www.linode.com)
* [Amazon EC2](https://aws.amazon.com/ec2/)

### Shared Hosting

Typically this is the most inexpensive solution, and a good option if you have
very low computing needs.

* [acuGIS](http://www.acugis.com/): Runs a full stack for running all of
Nealtine (even the parts for georeferrenced maps) with one-click installers.
This site includes academic discounts.
* [bluehost](https://www.bluehost.com/): Plans starting at $4.95 / month. Good
for running WordPress.


## DNS

When you host your own site, you will want a custom domain name for your site.
[Hover](https://www.hover.com) is a good **D**omain **N**ame **S**ervice that
lets you point a URL (e.g. `scholarslab.org`) at a server address (e.g.
`67.23.31.99`). There are others-check a few out to compare.

[stack]: http://stackoverflow.com/
[zed]: http://learncodethehardway.org/

[prism]: http://prism.scholarslab.org/
[heroku-addons]: https://addons.heroku.com/
[pg]: http://www.postgresql.org/
[jekyll]: http://jekyllrb.com/
[gh]: https://github.com
[ghp]: https://pages.github.com
[heroku]: https://heroku.com
[do]: https://www.digitalocean.com
[os]: https://www.openshift.com
[linode]: https://www.linode.com
[appfog]: https://www.appfog.com
[ec2]: https://aws.amazon.com/ec2/
