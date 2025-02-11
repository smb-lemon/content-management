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

Hero and Projects Component are added.

### Hero 

Hero component updated with hero.svg image and random dummy data (lorem ipsam).

### Image Resouces

[unDraw](https://undraw.com)

### API Configure

To set api, SpaceId and AccessToken are available in [Contentful](https://contentful.com). Space ID, Access Token and explore code examples.

Space ID - " " <br>
Access Token -" "

### Install SDK
```sh
 npm install contentful
```
### Get Entries

```js
import { createClient } from 'contentful';

const client = createClient({
  space: '',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_TOKEN,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error);
```
### Custom Hook

Creating custom hooks with Loading and Projects state values.

### Render Project

Render data in project