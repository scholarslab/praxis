---
layout: default
---

# Executing Ruby from Vim
There are many different ways to run the programs you are writing. Here
are two ways to run your code directly from Vim.

To quickly execute the code in the current buffer, issue this in
command-mode:

{% highlight vim %}

:!ruby %

{% endhighlight %}

Sometimes you need to be able to see a bit more. Instead of switching
back and forth to the terminal, you can use the Conque plugin to create 
a buffer to run your programs:

{% highlight vim %}

:ConqueTermSplit bash ; for OS X users
:ConqueTermSplit Powershell.exe ; for Windows users


{% endhighlight %}

Now you can jump between buffers to run your code with `<c-ww>`. You can
execute your program in the Conque buffer with:

{% highlight ruby %}

ruby [file_name].rb

{% endhighlight %}

