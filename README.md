<p align="center">
  <a href="https://c19.md">
    <img alt="Gatsby" src="https://c19.md/images/c19.svg" width="100" />
  </a>
</p>
<h1 align="center">
  c19.md - Open Source tools against COVID-19 in Moldova
</h1>
<p>
Based on "Gatsby Material UI Starter".
</p>

This project is based on [Gatsby + Material UI (React Framework)](https://www.gatsbyjs.org/starters/dominicabela/gatsby-starter-material-ui/).

## Features

- Docker-enabled
- Material UI Framework
- Roboto Typeface (self hosted)
- SEO
- Offline Support
- Based on Gatsby Default Starter
- Lives on Netlify (static site) - with enabled auto-deployments.

## Quick start

1.  **Start local development.**

    Goal was not to pollute the host environment.
    
    All you need to have is: git, docker, docker-compose.
    Once you clone the environment - you just need to run:

    ```sh
    # Build the enviornment.
    docker-compose build
    
    # Run the `gatsby develop` - launches a local server.
    docker-compose up
    ```

2.  **Open the website.**

    Just navigate to you localhost: [http://localhost:8000/](http://localhost:8000/)

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `<project-name>` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

3.  **Editing the data**

    Data lives inside of `src/data` folder, as YAML files. So far there are 3 files: projects, ideas and mentors. They also reference files within this folder (images).
    
    Once you have modified the files, made the commit and pushed your code -> this will automatically trigger a deployment process (takes 1-2 minutes) and your changes will be live.
    
In case you need some help, feel free to reach-out to me here, on our [Slack](https://join.slack.com/t/c19md/shared_invite/zt-crwaj52o-t7WS8QBy2cM78eYd4fEhxw), or via [email](mailto:tech@c19md).