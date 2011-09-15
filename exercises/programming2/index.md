---
layout: default
javascript:
  - /javascripts/hints.js
---
[Running your code in vim](tutorials/vim-code-execution/)

# Basic Methods

Write a program that you can multiply two numbers (x,y).

{% highlight ruby %}
def multiply(x, y)
  retun x * y
end

puts multiply(4,2)
{% endhighlight %}

<hr/>

# Print Name
Write a program that takes a parameter (name) and greets that user.

{% highlight ruby %}
def greet name
  return "Hello #{name}, you rock!"
end

puts greet "phybernightmare"
{% endhighlight %}

<hr/>

# Smallest Number

Write a program that evaluates two numbers and returns the smallest.

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

Write a program that reverses a string

{% highlight ruby %}
def reverse(string)
  # use the built in method for reversing strings
  # see http://ruby-doc.org/core/classes/String.html#M001170
  string.reverse
end

test_string = "Praxis Program"
puts reverse(test_string)

{% endhighlight %}


