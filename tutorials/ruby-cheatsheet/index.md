---
layout: page
title: "Ruby Cheatsheet"
date: 2011-09-20 14:23
comments: false
sharing: true
footer: true
---
# Ruby Cheatsheet


# Variables
Variable names use underscores between words for complex variable names

{% highlight ruby %}
number = 5
my_number = 7
{% endhighlight %}

# Conditional Tests (if)

Place `if`, `elsif`, `else`, and `end` on separate lines. 

{% highlight ruby %}
if number == 5
  puts "Success"
elsif number == 7
  puts "Praxis FTW"
else
  puts "FAIL"
end
{% endhighlight %}

# Method Calls

Parathenses are optional, but makes method calls more readable.

{% highlight ruby %}
puts "Word"
puts("Word")
{% endhighlight %}


# Method Definitions

Methods can return values which can be assigned to a variable.

{% highlight ruby %}
def make_positive(number)
  if number < 0
    -number
  end
  number
end

puts make_positive(-5)
{% endhighlight %}

# Iterators



