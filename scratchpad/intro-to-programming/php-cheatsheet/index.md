---
layout: page
title: "PHP Cheatsheet"
date: 2013-12-20 14:23
comments: false
sharing: true
footer: true
---

# PHP Cheatsheet

## Variables
Variable names use underscores between "words" for complex names. They
begin with `$` and end with `;`.

{% highlight php %}
$number = 5;

$scholars_lab = array(
  'bethany',
  'wayne',
  'eric', 
  'jeremy', 
  'david'
);

$person1 = $person2; // sets $person1 to the value of $person2
{% endhighlight %}

## Conditional Tests (if)

Place `if`, `elseif`, `else` and the ending `}` on separate lines.

{% highlight php %}
if($number == 5) {
  echo "Success";
} elseif ($number == 7) {
  echo "Praxis FTW";
} else {
  echo "FAIL";
}
{% endhighlight %}


## Operators
{% highlight php %}

// Arithmethic Operators
-$a     // negation (opposite of $a)
$a + $b // addition
$a - $b // subtraction
$a * $b // multiplication
$a / $b // division
$a % $b // modulus (remainder)

// Assignment
$a = 4; // equality
$a += $b // $a = $a + $b
$a -= $b // $a = $a - $b
$a *= $b // $a = $a * $b
$a /= $b // $a = $a / $b
$a %= $b // $a = $a % $b

// Comparison
$a == $b   // equality
$a === $b  // identical
$a != $b   // not equal
$a <> $b   // not equal
$a !== $b  // not identical
$a < $b    // less than
$a > $b    // greater than
$a <= $b   // less than or equal to
$a >= $b   // greater than or equal to

// Increment
++$a // pre-increment
$a++ // post-increment
--$a // pre-decrement
$a-- // post-decrement

// logical
! $a     // not
$a && $b // and
$a || $b // or
$a xor $b // true if $a or $b is true, but not both

// String
. // concatination

{% endhighlight %}

## Function Definitions

Function should return values which can be assigned to variables.

{% highlight ruby %}
function make_positive($number)
{
  if($number < 0) {
    $number *= -1
  }
  return $number;
}
{% endhighlight %}

## Arrays
Arrays hold values and are referenced by their position, with positions
starting at 0.

{% highlight php %}
$empty_array = array();
$another_array = array(1, 2, "three");

echo $empty_array[0]; // PHP Notice:  Undefined offset: 0 in php shell code on line 1
echo $another_array[2]; // "three"

$another_array[0] = "nonsense";
var_dump($another_array);
{% endhighlight %}

## Associative Arrays
Associative arrays hold values and are referenced by their `key`
assignment. They are often referred to as `key` `value` pairs.

{% highlight php %}

$states = array(
  "VA" => "Virginia",
  "NC" => "North Carolina",
  "MD" => "Maryland"
);

var_dump($states);
{% endhighlight %}


## Loops
Loops allow you to repeat actions.

{% highlight php %}

$numbers = array(1, 2, 3, 5, 8, 13, 21);

$states = array(
  "VA" => "Virginia",
  "NC" => "North Carolina",
  "MD" => "Maryland"
);

foreach($numbers as $number) {
  echo $number;
}

foreach($states as $code => $state) {
  echo "$code stands for $state";
}

{% endhighlight %}


