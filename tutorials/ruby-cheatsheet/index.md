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


# Formatting

* Use UTF-8 as the source file encoding
* Use two-space indent (NO TABS)
* Use Unix style line endings

    Use `$git config --global core.autoclrf true` to ensure Window's
style doesn't creep in

* Use spaces around operators, and curly braces ('{', '}') after commas and semicolons

{% highlight ruby %}
sum = 1 + 2
a, b = 1, 2
1 > 2 ? true : false; puts "hi"
[1, 2, 3].each { |e| puts e }
{% endhighlight %}

* No spaces after '(', or between braces ('[', ']').

{% highlight ruby %}
some(arg).other
[1, 2, 3].length
{% endhighlight %}

* Indent `when` as deep as `case`.
{% highlight ruby %}
case
when song.name == 'Tik Tok'
  puts "Not again!"
when song.duration > 120
  puts "That's really long"
when Time.now.hour > 21
  puts "It's time to start coding"
else
  song.play
end

epoch = case year
        when 1607..1777 then "Colonial Period"
        when 1778..1812 then "Early Republic"
{% endhighlight %}

* Use an empty line before the return value of a method (unless it only
  has one line), and an empty line betwee `def` declarations.

{% highlight ruby %}
def some_method
  do_something
  do_something_else

  result
end

def do_something
  result
end
{% endhighlight %}

* Use RDoc and its conventions for documentation.
* Use empty lines to break up a method in to logical paragraphs.
* Keep lines to fewer than 80 characters.

## Syntax
* Use `def` with parentheses when there are arguments. Omit parentheses
  when the method does not accept any arguments

{% highlight ruby %}
def some_method
  # payload
end

def method_with_arguments(arg1, arg2)
  # payload
end
{% endhighlight %}

* Never use `for`, unleass you know exactly why. **Iterators** should be
  used instead

{% highlight ruby %}
arr = [1, 2, 3]

# bad
for elem in arr do
  puts elem
end

# good
array.each { |elem| puts elem }

{% endhighlight %}

* Never use `then` for multi-line `if/unless`

{% highlight ruby %}
# bad
if some_condition then
  # payload
end

# good
if some_condition
  # payload
end
{% endhighlight %}

* Favor ther ternary operator over `if/then/else/end` constructs. It's
  more common and concise.

{% highlight ruby %}
# bad
result = if some_condition then something else something_else end

# good
result = some_condition ? something : something_else
{% endhighlight %}

* Use one expression per branch in a ternary operator. This also means that ternary operators must not be nested. Prefer `if/els`e constructs in these cases.

{% highlight ruby %}
# bad
some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

# good
if some_condition
  nested_condition ? nested_something : nested_something_else
else
  something_else
end
{% endhighlight %}

* Use `&&` and `||` for boolean expressions. Use `and` and `or` for flow
  control. 

{% highlight ruby %}
# boolean expression
if some_condition && some_other_condition
  do_something
end

# control flow
document.saved? or document.save!
{% endhighlight %}

* Avoid multi-line ternary operations, use `if/unless` instead
* Favor modifier `if/unless` usage when you have a single-line body. 
{% highlight ruby %}
# bad
if some_condition
  do_something
end

# good
do_something if some_condition

# another good option
some_condition and do_something
{% endhighlight %}

* Favor `unless` over `if` for negative conditions (or control flow
  `or`)

{% highlight ruby %}
# bad
do_something if !some_condition

# good
do_something unless some_condition

# another good option
some_condition or do_something{% endhighlight %}

