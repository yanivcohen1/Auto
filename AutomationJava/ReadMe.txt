Command line instructions
git status
git branch --unset-upstream
Git global setup

git config --global user.name "Yaniv Cohen"
git config --global user.email "ycohen@group.williamhill.plc"

Create a new repository

git clone git@git.nonprod.williamhill.plc:ycohen/sac-automation-tools.git
cd sac-automation-tools
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder or Git repository

cd existing_folder
git init
git remote add origin git@git.nonprod.williamhill.plc:ycohen/sac-automation-tools.git
git add .
git commit
git push -u origin master