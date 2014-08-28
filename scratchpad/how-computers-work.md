---
layout: page
title: 'How Computers Work'
permalink: "/scratchpad/how-computers-work"
---

# How Computers Work

Computers are marvels of engineering, yet very few actually know how
they work (this holds true among a lot of software developers). 

## Transistors

Developed in the 40s, single tube

Current generation of Intel Haswell chips 1.4 billion on each chip

### What is a transistor?

Semiconductor devices that allow us to amplify signals and switching.
Different materials are used for these modes that have physical
properties that make these work faster. Your car stereo, headsets, TV
sets, etc., all use amplification transitors to help deliver sound to
you. With computers, transistors that "switch" (on and off) to "do
stuff" very quickly. Since a transitor doesn't have mechanical movement
(no magents, springs, etc), you can pack transistors together very tightly.

## What Does a Computer Do?

A computer can only "do" four things:

1. Basic mathematical and logical operations
1. Store and read values from memory (RAM)
1. Control program execution
1. Control and operate attached devices (your hard drive, video card,
   network card)

### Logical Operations

This is the most basic thing a computer can do:

* AND - if A is true, and B is true, then A and B are true. Otherwise,
  false;
* OR - if A or B is true, A OR B is true, otherwise, false;
* NOT - the opposite of value
* NOR - shorthandfor NOT OR (opposite value of an OR)
* NAND - shothand for NOT AND
* XOR - eXclusive OR: True if only one of the inputs is true; othewise
  false

If we looked at this as an electrical engineer as a "logic gate", we
can build these with a set of transistors in switching mode. 

TODO: simple AND transistor

### Propogation Delay
Logical operations don't happen instantly
A value is called 'stable' when its the final, correct value (there's
aleays output, but not always stable)
Each transistor has a delay where it responds to its inputs, which is
relative to the physical characteristics of the transistor (size,
materials, voltage, etc.)
Overall delay is the delay of the longest-path (the longest chain of
transistors)
An output is stable after the inputs have been stable for at leat the
gate delay.

### How computers do math

Computers represent number in binary (0 or 1). 
Basic math (+, -, \*, /) can be done with a series of logical operations
on each digit

<blockquote>
Numbers can be represented in different formats (called bases). You are
probably most familiar with the base 10 where numbers are digits (e.g.
0 - 9). However, you can convert these to other mathematical bases, some
of which you may have run across:

<ol>
  <li>Base 2 (binary) - digits 0 and 1</li>
  <li>Base 8 (octal) - digits from 0 - 7</li>
  <li>Base 16 (octal) - digits from 0 - 9, A-F</li>
<ol>
</blockquote>

TODO: logic gate for adding

Add two binary digits (0 or 1), a carry-in (do I need to carry over), comes out with a sum and a
carry out.

Can chain for bigger adders 

* Longest path for 1-bit operations

1-bit 1 nanosecond
2-bit 2 nanoseconds

The bigger the number, the longer it takes.

#### Peformance

* A 4-bit adder takes 4 nanoseconds
* 4 nanoseconds = 0.0000004 seconds
* In one second, we can do 1/(4x10<sup>-9</sup>) which if we simplify is
  2.5 x 10<sup>8</sup> 4-bit additions
* This means it's running at 2.5 * 10<sup>8</sup> per second, or hertz
  (Hz)
* 2.5 x 10<sup>8</sup> = 250 x 10<sup>6</sup> = 250 Megahertz

If you go faster than this, the result will be invalid because the gates
haven't delayed.

## The Clock 

How do you get different calculations running at different speeds
together?

Different operations can take different amounts of time (e.g. a 3-bit
addition vs a 4-bit addition). You need something to synchronize these
calculations that you're working on. Each component of an operation will
take the clock as an input, then when the clock changes, starts doing
its calculation.

For physics sake, the clock can't be faster than the longest path needed
to stabelize a value. The clock speed says how fast its going, but not
how much work is getting done. Your processor (central processing unit
or CPU) is rated at a clock speed, like 2.3Ghz (e.g. 2.3 x
10<sup>9</sup> times per second).

## Memory

Your computer needs to retrieve values they are working on, or store
results. 

Two basic operations: read and write (store)

There are a *lot* of different kinds of memory.

### Random Access Memory (RAM)

Like a memory in your brain; if you can remember somthing, you can pull
it up the same way, no matter how old the memory is, or where it is
stored. The way you store things in memory is with an address, a number
that represents where the value is. To get the value, you need an
address. To write to RAM, you have to tell it what the address and value
is you want to store, and it updates only that location with the value.

At an electrical engineering level, RAM is made out of flip-flops (sets
of transitors, not footware) which can hold a value. A flip-flop holds
a value until it is set again with a new value. If power is lost to the
flip-flop, so is the value (e.g. you turn off your computer).

To give you some idea of the number of transisters in your RAM, 1GB of
RAM can be implemented as 2<sup>30</sup> one-byte registers (or 1,073,741,824 transistors).

### This seems like a bad idea...

Yes, you need something to "persist" data for longer durations. In the
early days, tape drives were used to save this data, but this posed
another issue; you can only read forward or backward to find the
information you want, which takes different amounts of time depending on
where your information is located.

### Hard drives

Hard drives are magnetic devices that have magnetic platters that read
and write what is under it. To get the correct data, you turn the
circular platter to the correct position to read the data.

Hard drives spin at high speeds (generally 5,400, 7,200, 10,000 rpm) to
get data. The faster the disk spins, the faster you get data back. The
head moves from the outside to center of the disk. The time it takes to
spin the disk to the correct location and move the head to read the data
is the seek time. Seek times are in milliseconds, which is much (MUCH)
slower than RAM (which is in nanoseconds), but they have far more capacity and persist data from
power interuptions. 

TODO picture of a hard drive

## Computers run programs

A program is a set of instructions that tell a processor what to do
Each instruction is a simple operation, like retrieve a value from
memory, or perform a simple mathematical operation
Instructions are stored in order in memory, where the processor has fast
access to them
The processor executes each instruction in order, then goes to the next
one
Some instructions are for control flow, and can tell the processor to go
back and forth to perform certain instructions over. These are called
branches (or jumps for electrical engineers), and you can have
non-conditional branches, or branches that are taken if conditions are
met, like a value being equal, less than, or greater than.

## Computers Control Devices

A processor has several interfaces (or sets of connections) for
interacting with other devices (e.g. monitors, USB drives, etc.)

The interface defineds the language of how the devices talk to each
other (drivers)

By sending instructions to the device, the computer can control and read
back data.

Some devices, like video cards, read directly from system memory. This
is a lot faster and takes less processing time.

Some common interfaces: SATA, PCI Express, USB, Thunderbolt



# Three types of devices

CPU, RAM, I/O Devices

Hook them together with a "Mother Board" to hook the different
components together and provide power.




https://www.youtube.com/watch?v=PN7aO81pktU

https://www.youtube.com/watch?v=WIDzNyfVVg0
