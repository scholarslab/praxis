---
layout: default
title: 'Command Line Bootcamp'
---

# The Command Line

The transition to interacting with your computer on the command line can
be a little jarring at first if you're accustomed to working in an
environment dominated by windows, cursors, buttons, and other GUI
pleasantries. Really, though, these graphical features are often just
façades for functionality that can be achieved with more flexibility and
speed by typing commands directly into the terminal.

Getting comfy on the command line is a bit like learning to drive a
stick shift. At first, it can seem sort of ridiculous and obtuse. If
automatic transmissions exist, what's the point? Over time, though, you
start to realize that the manual transmission gives you a more complete
and robust level of control over the car. Instead of coaxing the car to
do what you want, you order it. This is exhilarating, and
you begin to realize that the stick shift solves a whole set of problems
and annoyances that, in the past, you didn't even know you had.

This tutorial references a shell application called "bash," which is the default on
Mac and ubiquitous on unix-based platforms. If you're on Mac, click on the magnifying glass
at the top right of the screen, type "Terminal," and press Enter.
Alternatively, you can secure shell into your blue.unix UVa webspace (if
you're on Windows, you can do this with a program like [PuTTY][5]).
Where "yourusername" is your eServices account name (like "dm4fn"), type
<code>ssh yourusername@blue.unix.virginia.edu</code> , and enter your normal
eServices password. If it prompts you to set a terminal font, just do as
it suggests and type <code>vt100</code> and press Enter. Going forward,
I'll assume that you're in your blue.unix account, but it should be easy
to adjust the steps if you're working locally on a Mac.

## <code>pwd</code>

First, type <code>pwd</code> . (Here and throughout the rest of the tutorial,
always ignore trailing punctuation when commands are given inline - just type text in bold red). This stands for "present working directory."
This command just tells you where you are in the file path. When
you hit enter, you should see "home/yourusername". This
means that you've started out in the home directory for your user
account. Think of <code>pwd</code> as a way to get your bearings. When I sit
down at a terminal, this is usually the first thing I type.

## <code>ls</code>

Now that we know where we are on the computer, the next thing you'll
usually want to know is what's in the current directory - what are the
files and folders that are accessible at this location on the system
path? To see, type <code>ls</code> , which stands for "list". This
just outputs the contents of the current directory.

If your setup is like mine, you should see three folders - "myweb,"
"private," and "public\_html."

## <code>cd</code>

Ok, now we can see (a) where we are and (b)  what stuff exists in the current
directory. But you'll never be in a situation where all your work is
in a single directory, so a really important piece of the puzzle is the <code>cd</code> command, which stands for
"change directory". This does what you'd expect. Think of it as using
Windows Explorer or Mac Finder to move around to different folders on
your computer. Say we want to change into one of the directories that
exists inside of your home user directory. You can do that by typing
<code>cd</code> , space, and then the name of the directory. Go ahead and change into the
"private" directory with <code>cd private</code> .

Now, type the <code>ls</code> command again to see the contents of the new
directory. If changed directories successfully, you should see just one
file called home.html. Now, let's go back to your user directory. To move
"upwards" on the filepath, type <code>cd ..</code> . The double period ".." stands
for going up a single directory level. So, if you wanted to go up two levels,
you'd type <code>cd ../..</code> . Three, <code>cd ../../..</code> . Etc.

So, after typing <code>cd ..</code> , you should be back in your home user directory where you started.

## <code>mkdir</code>

Say you want to create a new directory ("folder" in Windows parlance). I
put all of my work in a folder called "Projects." Go ahead and change into the "private" folder with the command <code>cd private</code> , and then create a new folder called Projects by typing <code>mkdir
Projects</code> . "mkdir" stands for "make directory". It just creates a new
folder with nothing inside of it.

Once you type <code>mkdir Projects</code> , type <code>ls</code> again to confirm that the
folder was created. Then change into the new folder with <code>cd Projects</code> .
Once you're in the new folder, go ahead and create another subdirectory
inside of projects called whatever you want - say, <code>mkdir
testdir</code> . Then, change into the new testdir directory with <code>cd testdir</code> .

## <code>touch</code>

<code>mkdir</code> creates directories, but directories are just buckets for actual
data, which is contained in files. To create a new file in the current
directory, use the <code>touch</code> command.
Type <code>touch textfile.txt</code> . This will create a blank text file called
textfile.txt. I often tend to type <code>ls</code> or <code>pwd</code> before or after important
commands just to make sure that I'm in the right location and that the
previous command did what I wanted it to.

Now, create three more textfiles like this - <code>touch
{textfile2.txt,textfile3.txt,textfile4.txt}</code> . You can add as many new
files as you want to the comma-delimited list to create a bunch of files
with one command. Now, there should be 4 blank text files in the
directory "testdir", which sits inside of the "Projects" directory.

## <code>cp</code>

Say we have a file that we want to copy. In Finder/Explorer, you would
do this by clicking on the file, then hitting control (er, command, or
whatever) + c, and then hitting control + v to paste it again. In bash,
you can use the <code>cp</code> command. Let's copy "textfile4.txt" as a new file
called "copiedfile.txt". Type <code>cp textfile4.txt copiedfile.txt</code> . Then
type <code>ls</code> , and check to make sure that the copied file is there.

Often you want to copy entire directories. This is a little different.
Type <code>cd ..</code> to change up to the Projects directory, and then type <code>ls</code>
to view the contents. There should just be the "testdir" directory.
Imagine that you wanted to make a copy of that directory inside of
another directory. Let's go ahead and create that second directory. Type
<code>mkdir anotherdir</code> . Now, to copy "testdir" (and all of its files)
into "anotherdir", type <code>cp -r testdir anotherdir/</code> . Now, change into
another dir (<code>cd anotherdir</code>) and type <code>ls</code> to confirm that the folder
was copied. The "-r" is called a "flag" - a lot of commands have
optional functionality that can be specified with flags. In this case,
the "-r" stands for "recursive", which tells the <code>cp</code> utility to loop
through and copy the contents of the directory.

## <code>rm</code>

Often, you need to delete files. In Explorer or Finder, "deleting" is
kind of a misnomer - you "move things to the trash bin," etc. What that
means, though, is that you can recover the file if you decide that you
want it later. On the command line, though, delete means delete, no
questions asked. Once a file (or a directory) has been removed, it is
totally gone from the system and can never be recovered (short of some
kind of insane hardware-level recovery, but even that's unlikely).

Whenever you use <code>rm</code> , just make sure you're dialed in and not doing
something dopey. And make sure that the command is formed correctly; a
mistake here could destroy massive swaths of your file system.

Let's delete a single file. Change into the testdir directory that we
just copied. There should be the four text files in there. To remove a
single file, type <code>rm textfile1.txt</code> . Type <code>ls</code> to confirm that the file
was deleted. Now, delete two files at once with <code>rm
{textfile2.txt,textfile3.txt}</code> . Now, there should be just the last
"textfile4.txt" file - confirm this with <code>ls</code> .

Now, the scary part - deleting entire directories. Change back up into
the Projects directory ( <code>cd ../..</code> ). Again, type <code>ls</code> just to make sure
that you are where you think you are - there should be the original
"testdir" and the "anotherdir", which contains the (now mangled) copy of
"testdir". Delete "anotherdir" with this command - <code>rm -rf anotherdir/</code> .

Type <code>ls</code> - the directory should be gone. Here, the "-rf" flag is
similar to the "-r" flag that we used with "cp" - it stands for "remove
files". In other words, wipe out everythin in sight.

## <code>vim</code>

Vim is build directly into bash, which can be incredibly useful.
Normally, if you're doing heavy-duty development work that involves
making edits to lots of files at once, you'll want to use a standalone
version of the editor like macvim, which gives you extra
functionality (tabs, etc.). But if you just need to make a quick edit to
a file directly from the terminal - or if you're working exclusively in
a single file for a long amount of time - it can be useful to just fire
up the file in bash and edit away. This entire document, for
example, was composed without ever leaving the terminal.

You can create a new text file and open it in vim with a single command -
<code>vim testfile.txt</code> . Once the file is open, use the default
  vim movement and editing commands to change the file. Hit "i" to enter
the insert mode, and type something into the file.

To save, use the standard <code>:w</code> . Once you're finished with
the file, close it and return to the bash command prompt with
<code>:x</code> .

## <code>tar</code>

Last, we'll cover a compression utility called <code>tar</code> . A .tar file is
essentially the same as a .zip file - it's an archive that bundles
together a lot of files or directories into a single unit. In this
exercise, I won't spell out all of the traversal, listing, and
add/removal commands that you'll need to use - see if you can figure
them out.

Make sure you're in the Projects directory, and do this:

1. Create a new directory.
2. Change into the new directory.
3. Create three blank text files. Try to do this with a single command.
4. Create a new subdirectory.
5. Move the three files into the subdirectory. Again, try to use just
   one command.

Now, we have a folder with three files in it. Let's create a .tar file
called "anyname.tar" out of that folder with this command - <code>tar cvf
anyname.tar dir/</code> , where the "dir" is the name of the directory that you
created in step 4 above. Confirm that the file got created. The new file
contains a compressed copy of the directory. You can examine the
contents of a tar file without unpacking it with the command <code>tar tvf
anyname.tar</code> . This will list the files and folders in the tar.

Now do this:

1. Delete the original version of the directory with the three text
   files (careful here..).
2. Recreate the directory by unpacking the tar file with this command -
   <code>tar xvf anyname.tar</code>
3. List the directory contents to confirm that the directory was
   unpacked.

What do the little letters after the core <code>tar</code> command mean? These are
a bit cryptic, and you just have to remember them. Like <code>rm</code> and <code>cp</code> ,
<code>tar</code> has lots of options that you can configure. The string of letters
specifies a particular combination of behaviors that define the
functionality that you're trying to achieve. For example, "xvf" stands
for e**X**pand, **V**erbose, and **F**ile - which translates to:

> _"I want to expand an existing tar file, as opposed to creating a new one.
I want the tar utility to be "verbose" when it does its work, which means that it will
print out information about what it's doing. Last, I want to use the
file that I type at the end of this command as the source .tar file to
unpack."_

Imagine if poetry could be that condensed! Even closer readings, we would
need to perform. This stuff is just syntax that you have to
remember. I often have to check reference for commands like <code>tar</code> to
make sure that I have the options right, so don't worry about learning everything.
Google is always there.

Next, do this:

1. Delete the tar file that we created before.
2. Create a new tar file from the testing directory that contains the
   three text files. This time, though, use this variation on the
command: <code>tar czvf anyname.tgz</code>

The difference here is that the added "z" in the options tells tar to
use a utility called "gzip" to compress the tar file. This means that
the total size of the file will be smaller than the sum of its parts as
they exist normally on your computer. This is useful is you want to
package up a lot of data - always better if the file is smaller.

Now:

1. Delete the directory with the text files so that the only thing in
   the current directory is the .tgz file that you just created.
2. Unpack the compressed tar with this command: <code>tar xzvf anyname.tgz</code>

<code>tar</code> is a really powerful and highly configurable utility -
you can add files individually to a tar that already exists
(but not one that's compressed...), unpack file individually, and lots
of other stuff. Most of the commands that you'll use are really complex
programs in their own right - but you don't have to have comprehensive
knowledge of the full depth of the utilities to use them effectively and
benefit from them.

Really, the best way to get comfy on the command line is just to bumble
around on it for a month or so. Short of reckless use of
<code>rm</code> , not a whole lot can go wrong.


## Resources
* [An A-Z Index of the Bash command line for Linux][1]
* [Mac OS X Terminal Basics][2] (old, but still accurate)
* [The Ultimate Tar Command Tutorial with 10 Practical Examples][3]

[1]: http://ss64.com/bash/
[2]: http://homepage.mac.com/rgriff/files/TerminalBasics.pdf
[3]: http://www.thegeekstuff.com/2010/04/unix-tar-command-examples/
[4]: http://lenz.unl.edu/2011/04/09/life-on-the-command-line.html
[5]: http://www.chiark.greenend.org.uk/~sgtatham/putty/
