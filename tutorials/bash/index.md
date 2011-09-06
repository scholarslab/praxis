---
layout: default
title: 'Command Line Bootcamp'
---

# The Command Line

The transition to interacting with your computer on the command line can
be a little jarring at first if you're accustomed to working in an
environment dominated by windows, cusrors, buttons, and other GUI
pleasantries. Really, though, these graphical features are often just
façades for functionality that can be achieved with more flexibility and
speed by typing commands directly into the terminal. For a programmer, a day's
work is dominated by a fairly small set of core activities - editing
text files, creating and organizing directories, and traversing the file
system to access different resources. Even though the _content_ of these
activities can be really complex - say, the content of the code that gets
typed into the text files - the suite of utility tasks that surround and
support software development is relatively simple, and highly suited to a
keyboard-centric mode of interaction.

Getting comfy on the command line is a bit like learning to drive a
stick shift. At first, it can seem sort of ridiculous and obtuse. If
automatic transmissions exist, what's the point? Over time, though, you
start to realize that the manual transmission gives you a more complete
and robust level of control over the car. Instead of coaxing the car to
do what you want, you order it. And it obeys. This is exhilarating, and
you begin to realize that the stick shift solves a whole set of problems
and annoyances that, in the past, you didn't even know you had.

So what can you do on the command line? Theoretically, just about
anything. Some people would argue that the command line solution is almost always preferable to a
graphical interaface. I don't agree with that - I think that software
design is pervaded by an aestheticism and a vision of interactive grace
that can't be captured in the terminal. But it's definitely true
that a fluency with a core set of commands results in huge productivity
gains when performing routine tasks.

There are different kinds of consoles. The Windows console is different
from the terminals on unix/linux, and on \*nix systems there are
various alternatives. This tutorial references a console called bash,
which is the default on Mac and ubiquitous on unix-based platforms.

Anyway, on to the commands. If you're on Mac, click on the little magnifying
glass at the top right of the screen and type "Terminal." Once bash
starts, you'll see a little line of text with a "$" at the end. This is
the prompt - you can type commands in and then hit enter, and the
command will be executed.

## <code>pwd</code>

First, type <code>pwd</code> . (Here and throughout the rest of the tutorial,
always ignore trailing punctuation when commands are given inline - just type text in bold red). This stands for "present working directory."
This command just tells you where you are in the file path. When
you hit enter, you'll probably see something like "Users/yourname". This
means that you've started out in the home directory for your user
account. Don't worry too much about learning the whole Mac file
structure from the start - you learn it organically over time. Think of
<code>pwd</code> as a way to get your bearings. When I sit down at a
terminal, this is usually the first thing I type.

## <code>ls</code>

Now that we know where we are on the computer, the next thing you'll
usually want to know is what's in the current directory - what are the
files and folders that are accessible at this location on the system
path? As a lover of literature, I like to frame these things in
terms of core existential questions that irritate into art. Where am I?
What is the deep structure of my context? What are the things that exist
in my world? To see, type <code>ls</code> , which stands for "list". This
just outputs the contents of the current directory. Simple and highly useful.

## <code>cd</code>

Ok, now we can see where we are and what stuff exists in the current
directory. You'll almost never be in a situation where all your work is
in a single directory, though (or the one you start in...), so a really
important piece of the puzzle is the <code>cd</code> command, which stands for
"change directory". This does what you'd expect. Think of it as using
Windows Explorer or Mac Finder to move around to different folders on
your computer. Say we want to change into one of the directories that
exists inside of the User directory. You can do that by typing
<code>cd</code> , space, and then the name of the directory. As you start
typing the name, hit the tab button after a few keystrokes, and bash will try
to autocomplete the name. As you get faster with the commands, this
becomes a useful way to speed things up. If you're on a standard Mac
setup, go ahead and change into the "Desktop" directory with <code>cd
Desktop</code> .

Now, type the <code>ls</code> command again to see the contents of the new
directory. If the <code>cd</code> command worked, you should see different stuff
now. You should be able to recognize the contents of the Desktop folder;
there should be listings for the same files and directories on the
visual desktop. Now, let's go back to your user directory. To move
"upwards" on the filepath, type <code>cd ..</code> . The double period ".." stands
for going up a single directory level. So, if you wanted to go up two levels,
you'd type <code>cd ../..</code> . Three, <code>cd ../../..</code> . Etc.

So, after typing <code>cd ..</code> , you should be back in your users directory.

## <code>mkdir</code>

Say you want to create a new directory ("folder" in Windows parlance). I
put all of my work in a custom folder in my home Users directory called
"Projects." Let's go ahead and create that folder by typing <code>mkdir
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
directory, use the <code>touch</code> command. I'm not sure why it's called touch.
Type <code>touch textfile.txt</code> . This will create a blank text file called
textfile.txt. I often tend to type <code>ls</code> after any of these commands just
to make sure that I typed the previous command correctly and that the
new file exists.

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

To give a sense of how dangerous <code>rm</code> can be, consider this - the
command <code>rm -rf /</code> will delete the entire file structure on the hard
drive. That's because unix interprets the "/" as meaning the
highest-level directory on the system. So, the command goes through all
of the files on your computer and drops all of them. Bad times.

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
