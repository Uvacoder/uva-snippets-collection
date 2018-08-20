   <h1>Git and Github</h1>


First command we have is
```html
git init
```
That creates the repository.

    <!-- //Creating a file// -->
    Doing "touch" or creating in the file manager does the same.

    <!-- //Creating a git init// -->
    When doing a "git init", create a git repository

    <!-- //Config the name and email// -->
    $ git config --global user.name 'Ricardo Moreira'
    $ git config --global user.email 'Ricardo Moreira'

    <!-- //Add a file to stage index// -->
    "git add ." to add them to stage ready to commit, i.e. to the snapshot be taken of the change

    If in the meanwhile we change something in the file and save and do a "git status", it says that we have files not staged.

    <!-- //To commit// -->
    git commit
    then write initial commit and :wq to get out

    After commit, is the same, if we do a change we have to add it and then commit
    To be faster in the commit we can do:
    $ git commit -m 'Just add letter to test how it changes'


    <!-- .gitignore -->
    To add something in the file that we don´t wont to add to git.
    Then in the file gitignore we add the files or directories that we don´t want to add

    <!-- Creating a branch -->
    git branch (name of the branch)
    git checkout login <!-- - To get inside the branch -->

    <!-- Merging a branch -->

    git merge (name of the branch to merge)  <!-- - we have to be inside the master branch now -->
    :wq

    <!-- Work with a repository -->
    Open github account and create a repository. Follow the steps:

    …or create a new repository on the command line

    echo "# Image-gallery" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/mugas/Image-gallery.git
    git push -u origin master

    …or push an existing repository from the command line
    git remote add origin https://github.com/mugas/Image-gallery.git
    git push -u origin master

    …or import code from another repository
    You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

    After is upload, when created a new file and added and commited would not show up 
    till we push it.

    <!-- To clone it -->

    Copy the link, and go to git bash and 
    git clone and the link you copied



<style>
        h1 {
            color:blue;
            text-align:center;
        }

        h2{
            color:green;
        }

        h4{
            color:red;
        }
</style>
