---
layout: default
javascript:
  - /javascripts/hints.js
---
[Running your code in vim](tutorials/vim-code-execution/)

# Basic Methods

## Multiply (Easy)
Write a method that you can multiple two numbers (x,y). Test with the
following examples:

* 4, 2
* 0, 4
* 900, 32
* 29999, 0

{% highlight ruby %}
def multiply(x, y)
  return x * y
end

puts multiply(4,2)
puts multiply(0, 4)
puts multiply(900, 32)
{% endhighlight %}
<hr/>

## Divide (Easy, with a special case)
Write a method that you can divide two numbers (x,y). Test with the
following examples:

* 4, 2
* 0, 4
* 900, 32
* 29999, 0

{% highlight ruby %}
def divide(x, y)
  if(y == 0) 
    y = x
  end
  return x / y
end

puts divide(4,2)
puts divide(0, 4)
puts divide(900, 32)
{% endhighlight %}

<hr/>

# Print Name
Write a method that takes a parameter (name) and greets that user.

{% highlight ruby %}
def greet name
  return "Hello #{name}, you rock!"
end

puts greet "phybernightmare"
{% endhighlight %}

<hr/>

# Smallest Number

Write a method that evaluates two numbers and returns the smallest. If the
numbers are the same, it should return a message stating so.

{% highlight ruby %}
def smallest_number(x, y)
  smallest = x

  if x == y
    smallest = "They are the same"
  elsif y < x
    smallest = y
  end

  smallest

end

puts smallest_number(400,2)

{% endhighlight %}

<hr/>

# String Reverse

Write a method that accepts a string and returns the characters in reverses order.

**Hint**: Look at the Ruby documentation.

{% highlight ruby %}
def reverse(string)
  # use the built in method for reversing strings
  # see http://ruby-doc.org/core/classes/String.html#M001170
  string.reverse
end

test_string = "Praxis Program"
puts reverse(test_string)

{% endhighlight %}

<hr/>

# Loops

## While Loop

Write a method that implements a while loop to count from 1 to 1000 and
print the result to the screen.

{% highlight ruby %}
def count(limit)
  counter = 0
  # note that do is optional with the while loop
  while counter <= limit
    puts counter
    counter += 1
  end
end

count(1000)

{% endhighlight %}

## Unless Loop

Write a method that implements an unless loop that counts from 0 to 10
and prints the result to the screen.

{% highlight ruby %}

def count(limit)
  counter = 0
  unless counter <= limit
    puts counter
    counter += 1
  end
end

count(10)

{% endhighlight %}
<hr/>

## Until Loop
{% highlight ruby %}
counter = 0
until counter == 5
  puts counter
  counter += 1
end
{% endhighlight %}
<hr/>

## For Loop
{% highlight ruby %}
counter = 0
for counter in (1..10)
  puts counter
end
{% endhighlight %}

<hr/>

## Times Loop
{% highlight ruby %}
5.times {|block| puts "Ruby is fun"}

{% endhighlight %}

<hr/>

# Classes
Write a simple class that defines a person with attributes of
`first_name`, `last_name` and has a method signature of `to_s` which
prints the object as "Jefferson, Thomas".

{% highlight ruby %}
class Person

  def initalize(fname, lname)
    @first_name = fname
    @last_name = lname
  end

  def to_s
    @last_name + ", " + @first_name
  end
end

tj = Person.new("Thomas", "Jefferson")
puts tj # note, puts calls to_s if it is availabe
{% endhighlight %}
<hr/>
