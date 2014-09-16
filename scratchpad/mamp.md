---
layout: default
title: Local WordPress Development with MAMP and WampServer
permalink: "/scratchpad/mamp-and-wamp/"
tags: "mamp"
---

# Local WordPress Development with MAMP and WampServer

When developing PHP applications or working with content management
systems that require the LAMP stack (Linux, Apache, MySQL, PHP), it's
handy to have a server stack running locally. That way, you're not
dependent on a separate development server or an internet connection. If
you're adventurous, you can compile the required software from scratch,
but thankfully some kind folks have made some applications to get a web
server up and running fairly easily: 
<abbr tite="Mac, Apache, MySQL, PHP"><a href="http://www.mamp.info/en/index.html">MAMP</a></abbr>
for Mac and <a href="http://www.wampserver.com/">WampServer</a> for
Windows. Each of these is a separate desktop application that, when
installed and launched, will start up a web server that includes a MySQL
user and password, and PHPMyAdmin for administering your databases.

This tutorial will walk you through installing MAMP and WampServer,
respectively. It will also explain some features of each, and provide
brief instructions for setting up WordPress for local development.

## MAMP

### Installing MAMP

1. <a href="http://www.mamp.info/en/downloads/index.html">Download MAMP and MAMP Pro</a>, unzip the downloaded file, and run the package installer.
2. Once installed, you'll find the application at
   `Applications/MAMP/MAMP`. Double-click the application.
3. If presented with a Warning screen, click the "Launch MAMP" option.
   You can uncheck the "Check for MAMP Pro" checkbox if you'd prefer.
4. Click the "Start Servers" button to start your web server.
5. If successful, MAMP should open a new browser window pointing to a
   MAMP help page served locally on your computer. Note the address:
   `localhost:8888/MAMP/`. `localhost` is the address of your computer.

   This screen presents some information about your system, including
   your MySQL user and password. It also presents you with a link to
   PHPMyAdmin.
6. Now we need to create a database for our WordPress instance. <a href="http://localhost:8888/MAMP/phpmyadmin.php?lang=en-iso-8859-1">Click on the PHPMyAdmin link</a> to access your PHPMyAdmin panel. At the top of the page, you'll see a row of tabs. Click the "Databases" tab.
7. Now you're presented with a page listing all your current databases,
   with a simple form above the list for creating new database. We'll
   create a database called "wordpress", and click the "Create" button.
   Once processed, your new "wordpress" database should appear in the
   list with the other databases.

You're now ready to install WordPress and other software that runs on PHP and MySQL.

### Installing WordPress on MAMP

1. <a href="http://wordpress.org/download/">Download the latest version of WordPress</a>. Alternatively, you can
   check out the latest version from their <a href="http://core.svn.wordpress.org/" title="WordPress Subversion repository">Subversion repository</a> or the
   mirrored <a href="https://github.com/WordPress/WordPress" title="WordPress on Github">GitHub repository</a>. If you check out the code from Subversion or GitHub, you should make sure to use a stable `tag` instead of the `trunk` in Subversion or `master` branch in Github, for stability. (Tagged versions should be stable, and are never changed by the host developers.)
2. Put the wordpress directory inside the `htdocs` folder in
   `Application/MAMP`. So, all your WordPress files should be at
   `Application/MAMP/htdocs/wordpress`.
3. Inside the `wordpress` directory, there's a file called
   `wp-config-sample.php`. Copy that file to a new file, and name it
   `wp-config.php`.
4. Open your new `wp-config.php` file. This is where we'll tell
   WordPress how to connect to our database. There are three constants
   we'll need to update: `DB_NAME` (the name of our database), `DB_USER`
   (our MySQL user), and `DB_PASSWORD` (the password for our MySQL user).
   Where each of those is defined, we'll change the string immediately
   following them to the proper values, like so:

   ```php
   /** The name of the database for WordPress */
   define('DB_NAME', 'wordpress');

   /** MySQL database username */
   define('DB_USER', 'root');

   /** MySQL database password */
   define('DB_PASSWORD', 'root');
   ```

    Save your changes.

5. Now that we've given WordPress a configuration file with information
   to connect to our database, we should be able to go through
   WordPress's "<a href="http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install">Famous 5-minute Install</a>". <a href="http://localhost:8888/wordpress/">Visit to your local WordPress instance</a>, and if WordPress finds your database successfully, you'll be presented with a simple form to install WordPress. Fill out this form, including a site title and an admin user for WordPress (this is a different user from your MySQL user. This will be a user unique to this local installation of WordPress.) Submit the form, the click the login button to log in to your WordPress admin panel.

## WampServer Installation


