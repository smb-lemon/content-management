### Vite Configuration

Create a vite project <br>
```sh
npm create vite@latest project-name
```
Install Dpendencies <br>
```sh
npm install
```
Start the development server <br>
```sh
npm run dev 
```
### Structure

Hero and Projects Component are added.Starting with Hero and Projects Component, we have taken h2 heading as initial.
Into App component, we have added a main tag with the Hero and Projects Component. In Hero component, we have taken section tag 
with the class hero.Inside the section, we have a div with class hero-center.Inside div, we have another div with class hero-title.Inside the div, we have a h1 heading and paragraph tag to show some dummy text.Completing this div, we want to create another div in hero-center div for the image. Importing the hero image to the Hero component, we can set img tag to file name.

### Contentful Account

For data, we can use contentful. Contentful helps us to connect our data as a api. We can set our data by going to content model and add a content model.Then we can navigate to the content option and add our entries to created model folder. We have to publish all the content to access them.

### API Key

To get api info, we can go to the api key option in contentful. To set contentful api, we have to install contentful in npm.
```sh
npm install contentful
```
Then we can look for spaceId and accessToken for configuring the api.
```js
import { createClient } from "contentful";

const client = createClient({
    space:'',
    environment: '',
    accessToken: ''
});

client.getEntries({content_type:'projects'})
.then((response)=> console.log(response));
```
Then we can import the api file to projects.jsx

### Custom Hook

We will create custom hook so that we can display the loading info and the project.We are creating two hooks, one for loading and one for project.In `useFetchProjects`, we can create two usestate for them.As we are creating `useState` and `useEffect`, we will import them from react.Firstly, the loading state will be true by default and the project state will be an empty array. We are then creating an async function named `getData` and passing the `try-catch` block.In the try block, we want to await the client for getEntries. So we can create a const variable named response which will have the `await client getEntries` for the projects.If we are successful, we can `setLoading(true)`. In the catch block, we can log the error and also `setLoading(true)`. Now we can work on useEffect and pass getData() into it. For parsing the data, we can create a variable named projects initiated with `response.item.map` for iterating the properties.Then we want to access the fields.For the `title url image`, we can set the variable with `item.fields`.For the id, we can pass value as `item.sys.id` in `id` variable.For the image, creating the const variable img and passing the `image` if it exists,`fields` if it exists, `file` if it exists and then pick the `url` `const img = image?.fields?.file?.url`. Then we can return the item. Completeing the map function, we can set `setProjects(projects)`.Lastly in the fetchProjects function, we can return loading and projects.

### Project Log

 We can import the fetchProject into projects.Then initiate the loading and project as fetchProject and log them into the console.

### Render Project

For loading,we can add the loading into if condition and output h2 element.In the return, we can add a section with class projects.Under the section, we have a div with class title and inside that div we have another div with class title-underline. Then we have another div with classname project-center.Once the user clicks on the card, there will be navigated to actual location of that card.So we can map of projects on display all our cards.Setting id, title, image, url into map, we can get all our values.In map, we can return a link assosiated with key, href, target, rel, classname. Also a img tag for the image. 

### Deploy 

Singing up Netlify and push the repo to deploy for the deployment.

### Webhook

Webhook is a feature which essentially allow us to dynamically build our application on Netlify every single time we will make some changes to our data in Contentful.To set up webhook, we can go to netlify, find Build Hook option and set a hook using any random name. We can copy the url and move to the Contentful site and look for webhook option.Then we can add with a name and paste the url which we got from netlify. Then we are good to update the data and netlify site will automatically update this for us. 