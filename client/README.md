<img src="https://user-images.githubusercontent.com/60367213/118917898-7c7e0a80-b8f7-11eb-8e4c-1770886f32e7.png" width="200">

# Frontend Developers of Caviar

All of the information you will need to contribute to the clint-side project.

## Scripts

In the root project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run lint`

Runs eslint with the local configuration.\
Will warn of any linting problems and list the files involved.

#### `npm run prettier`

Runs prettier with the local settings.\
Will warn of any prettier problems and list the files involved.

## File Structure

To prevent the project from turning into a file chaos, we will follow a file structure to organize all files and components.

<pre>
src/
 L assets/ [all images, videos, animations, etc.]
 L components/ [global components]
    L ExampleComponent
       L ExampleComponent.tsx
       L index.ts
 L pages/ [all pages of the website]
    L ExamplePage
       L components/ [local components for the page only]
       L ExamplePage.tsx
       L index.ts
 L util/ [all constants such as colors, gradients, spacing, etc.]
</pre>

## Adding Changes and Updating `master`

In order to introduce as few errors and bugs as possible to the `master` branch, we will only be able to push to `master` via pull requests. **Each pull request will require a review before being able to merge into `master`.**

###### NOTE: The steps below assume you cloned the project (`"forking"` might yield different steps):
###### `git clone https://github.com/RivasCVA/caviar-webapp.git`
\
When making a change...

**1\. Fetch the latest from `master`:**

#### `git pull origin master`

\
**2\. Create a new branch:**

#### `git branch branch-name`
#### `git checkout branch-name`

###### To do both at the same time:

#### `git checkout -b branch-name`

\
**3\. Make the changes and create a commit:**

#### `git add .`

#### `git commit -m "my message"`

\
**4\. Create a pull request:**

###### Make sure to have the [GitHub CLI](https://cli.github.com).

#### `gh pr create`

###### 1. Where should we push the branch?: RivasCVA/caviar-webapp

###### 2. Title: Give any reasonable title

###### 3. Body: Give any extra description if necessary (you can edit the body on GitHub)

###### 4. What's next?: Submit (or "Continue in browser" if you want to edit the body there before submitting)

###### NOTE: If the pull request is for an issue, mention the issue number anywhere in the body as "Resolves #1". This allows the issue to close automatically when the pull request is approved and merged.

###### NOTE: If you want to always use Vim as the editor for when adding the body message (defaults to Nano), call the command `gh config set editor vim`.

\
**5\. Once the PR has been approved, you can merge it to master:**

#### `gh pr merge`

###### 1. What merge method?: Squash and merge

###### 2. Delete branch locally and on GitHub?: yes

###### 3. What's next?: Submit

###### NOTE: When the merge is complete, the branch will be deleted and you will automatically be checked out into `master`. Run `git pull origin master` to get the latest changes you just merged.
