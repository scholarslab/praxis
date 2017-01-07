---
layout: post
title: "Git review, task management, and other things on 10-29"
author: "Gillet Rosenblith"
date: 2015-10-29 11:24
comments: true
category: meeting-note
---
Git tutorial
git: remember commit messages
git—version tracking/control on files in directory
Folder-specific—won’t know about things outside of directory—so know where you are, keep track of that

* git init initializes folder as git repository. GIT INIT.
      * only need to git init once.
* Whenever in git repository, good to git status to know if there are files w/changes that you haven’t committed, are there files that git doesn’t know about it—helps you know what general state of git repository is
* Branching. A thing we haven’t done. Apparently it’s cool. And we are on branch master.
* Shows you untracked files, which it sees, but isn’t tracking. which is okay. you don’t have to commit everything—can even make git ignore that git can ignore. Like passwords. Which shouldn’t be committed to repository somewhere.
  * git ignore is a dot file— atom .gitignore. then a box pops up and then you say what you want to ignore
  * If a file is untracked in git, you first have to add it to allow git to track
* In all commands, git is the program, and after program name = command w/in git itself
* Good when making changes to make them all related to specific task—makes it easier for other people to review—best to be granular, specific, etc.
    * E.g., more readable headings—so focus on that as opposed to changing overall layout of site--this is good project mgmt workflow
* There is always a way to back out
* Anytime you do a - and then a letter that’s a flag; -m is to do a message. Write REALLY GOOD COMMIT MESSAGES about stuff
* "git log" lists all of the commands made in repository with messages—if you want to look at a specific commit you can do "git show" and commit hash
* git remote -v shows you where local is and where it will be pushed to?
* git checkout if you’ve modified file will check it out to whatever current version it is on your repository now—returns your local it to whatever the current status is in git remote repository
* git pull. Just do it. Early and often. (like voting).
* Git pull; rake task; jekyll serve (or grunt) to preview changes; then git status, git add, git commit, git push

Ronda! on Project Management

* You are managing tasks, not people. Manage work not people.
* Agile project mgmt
* Generate list of discrete tasks—if it task feels like it has multiple tasks, break it up
* Prioritize that list with first one that needs to be done
* Three columns:
* Tasks: prioritized lists w/top priority —> bottom priority (sticky notes w/tasks written out)
* Doing: (sticky notes—claim whoever is doing that work); each person should only have one sticky note in doing column at a time
* Done—move sticky notes to done when finished
* May run into problems when doing when you realized task wasn’t broken down far enough—move back to tasks and shift around
* Hardest part often being unsure of when you’re done
* Good idea to brainstorm tasks and agree on priorities; can be good to have person facilitating convo
* Keep conversation about each discrete
* If there are things on list that don’t get done and that’s okay, then those go at bottom
* You may start and realize one isn’t viable; talk regularly enough that you find a moment when it happens so you can agree altogether and move on
* Three different color sticky notes for each project (go-go is pink!)
* Figure out what we want to be the end goal for each project
* When things are do; how long things will take—part of the prioritization; typically each task = one day of work; if it’s bigger than that, make that clear or see if you can break it down into smaller tasks that are one-day
* Can tie tasks to tickets and milestones in git
* In case you forgot, Jeremy loves git commit messages. So do em well.
* Put initials on stickies when moving to doing



Planning:
* Embodied time
* Go-go
* Value and time
* Time and media studies

Shoot for project page—what should I learn from each project, what it does in terms of long-term goals
* Doesn’t have to be a tangible result, per se

* Go-go: cultural study
* ER/SB: Embodied time—game dvlpmt but also thinking about experiential time/habits awareness—how we value and structure time
     * RDT: Common language—span of time—our common girdle
     * Jeremy interested in ways that technology shapes our time structures; computers shutting down after particular period of time;
     * JB: The fact that we want to track it is the commonality—can expose a lot quirks, issues—like a makerspace thing
     * How you experience time as one person; being reflective for one week
     * Being intentional and mindful
* Memo on what you want to do for time on Monday

Start to think about learning code, getting to a place where we can do D3:
* Scott to send out links to classes we do on our own—e.g., code academy & node school
* We all do first three units and come in with prepared question


PS Shout out to Ethan for fixing the formatting of this. And to Lydia for moral support. 
