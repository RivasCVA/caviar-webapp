# Developers of Caviar

Below is all of the information you will need to contribute to the project.

## All Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run lint`

Runs eslint with the local configuration.\
Will warn of any linting problems and list the files involved.

#### `npm run prettier`

Runs prettier with the local settings.\
Will warn of any prettier problems and list the files involved.

## File Structure

To keep the project from turning into code-chaos, we will follow a file structure to organize all files and components.

<pre>
src/
 L assets/ [all images, videos, animations, etc.]
 L components/ [global components]
    L ExampleComponent
       L ExampleComponent.tsx
       L index.ts
 L pages/ [all pages or sections of the website]
    L ExamplePage
       L components/ [local components for the parent page only]
       L ExamplePage.tsx
       L index.ts
 L util/ [constants such as colors, gradients, spacing, etc.]
</pre>

## Updating `master`

In order to introduce as little errors and bugs as possible to the `master` branch, we will only be able to push to `master` via pull requests.

When making a new change...

1. Fetch the latest from `master`:

#### `git pull origin master`

2. Create a new branch:

#### `git branch branch-name`
#### `git checkout branch-name`

###### or to do both as the same time:

#### `git checkout -b branch-name`

3. Make the changes and make a commit

#### `git add .`

#### `git commit -m "MY MESSAGE"`

4. Create a pull request:

###### make sure to have the [GitHub CLI](https://cli.github.com).

#### `gh pr create`

###### Then follow the CLI's instructions to add details for the pull request. You can always edit the title and message on GitHub after it has been created, if needed.

5. Once the PR has been approved, you can merge it to master

#### `gh pr merge`

###### choose `squash and merge`.

###### press `Y` to delete the branch locally and on GitHub.