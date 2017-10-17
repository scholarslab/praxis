# Purpose
- Introduce Markdown, practice HTML, CSS, Git and GitHub skills, build a rudimentary site, learn the need for a site generator (CMS or static site generator like Jekyll).

# Method: 
- Pair programming (3 groups of 2). Each group/team will make a Markdown content page, then pass the page to the next group who will convert it to HTML, then pass it to the next group who will add CSS. Use Git and GitHub to pass and merge changes.

# Outcomes:
- 3 HTML documents, linked to each other and using a single CSS file.
- Increased confidence and skill working with HTML, CSS and Git.

# Resources
- Markdown: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- Git Commit Messages: https://chris.beams.io/posts/git-commit/
  - Just remember these 7 rules
    - Separate subject from body with a blank line
    - Limit the subject line to 50 characters
    - Capitalize the subject line
    - Do not end the subject line with a period
    - Use the imperative mood in the subject line
      - A properly formed Git commit subject line should always be able to complete the following sentence:
        - If applied, this commit will _your subject line here_
    - Wrap the body at 72 characters
    - Use the body to explain what and why vs. how


# Activity:

## Step 1: Create a Markdown file
- Each team will create a Markdown file and populate it with content.
- Each team will pick one of the following file names to name their document:
  - `index.md`
  - `about.md`
  - `project.md`
- Content for each page will be as follows:
  - index.md
    - Title, short descriptive paragraph about the three pages (can use boiler plate), find an image to use on the index page and add a link to it (using Markdown)
  - about.md
    - short paragraph about the Praxis program
    - short bio about the 2 members of the team with an image
    - placeholder for the other 4 Praxis members
  - project.md
    - paragraph about the project(s)
    - try to include a bullet or numbered list
    - try to include an image
- Add the files [markdown and image(s)] to the git repo
- Commit the files using a good commit message 
- Push the changes to the shared repo.

## Step 2: Convert Markdown to HTML
- Pull down the changes made to the repo.
- Each group pick a file different from what they created
  - `index.md` &rarr; `about.md`
  - `about.md` &rarr; `project.md`
  - `project.md` &rarr; `index.md`
- Convert the Markdown file to HTML, add in the appropriate HTML tags
- Rename the file with the `.html` extension, and test the file in your browser.
- The team now editing the about.md file, add your profile info and images.
- Add the files, commit and push.

## Step 3: Add CSS
- Pull down the changes made to the repo.
- Each group will now be editing their last file.
  - `about.html` &rarr; `project.html`
  - `project.html` &rarr; `index.html`
  - `index.html` &rarr; `about.html`
- Each group create a new file names `style.css`.
- Link that file in the HTML file you are working on.
- Add styles to the HTML file you are working on to make it look so awesome!
- The team now editing the about.html file should add your profile info and images.
- Add, commit and push changes.
