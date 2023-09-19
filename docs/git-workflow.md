# Git workflow

Lets say we have a tast with a name `LEIFIAPP-7` and the developer decided to work on that task.

The developer should go and create a new branch from `develop` with the name `feature/LEIFIAPP-7` and push the branch to remote origin before starting to work on it.

Then the developer should create a pull request targeting develop, which should have no changes. After that the developer can start working on their task.

Once a developer is finished with his/her task, they should verify that their code `follows code conventions`. The developer The developer should then post the link to the PR in slack and mention 2 other developers to review it.

Once 2 approvals are given, the developer can start merging their PR into develop.
