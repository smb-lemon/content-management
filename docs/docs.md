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