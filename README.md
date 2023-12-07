# CodeGist Blog - Web Application


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

CodeGist serves as a platform for documenting my personal experiences, challenges, and victories in the vast realm of software development. Here, I delve into a myriad of topics, including coding adventures, tech trends, and lessons learned along the way. Whether you're a fellow engineer, a coding enthusiast, or someone curious about the tech world, there's something here for everyone.

This repository contains the source code for the CodeGist web application. With a sleek and user-friendly design, the application is built using React, Tailwind CSS, React Router, Django, Django REST framework, PostgreSQL, Ckeditor.

## Features
- Home Page: The landing page welcomes visitors with a clean and intuitive design, offering easy navigation to different sections of the blog. It showcases the latest blog posts, providing a glimpse into the diverse content available.

- Blog Post Page: A dedicated page that displays individual blog posts. Users can explore a wealth of content, ranging from insightful articles to in-depth tutorials. Each post is presented in a reader-friendly format, making the blog a valuable resource.

- Blog Details Page: Dive deeper into specific blog posts with the blog details page. This feature allows users to view full content, including rich text, images, and other multimedia elements. Readers can engage with comments and share their thoughts on each post.

- About Page: Get to know more about the blogger and the inspiration behind the blog. The About page provides insights into the author's background, expertise, and the mission of the blog. It establishes a personal connection with the audience.

- Theme Toggle Feature: Enhance the reading experience with a theme toggle feature. Users can choose between light and dark modes to suit their preferences. This customization option adds a touch of personalization and ensures optimal readability in various environments.

## Technologies Used

The CodeGist web application is built using the following technologies:

- **React**: A popular JavaScript library for building user interfaces. It enables the creation of reusable UI components and efficient rendering.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of pre-defined classes to build custom and responsive designs quickly.
- **React Router**: A routing library for React applications. It helps manage navigation and allows for the creation of dynamic and multi-page experiences.
- **Django**: Serving as the robust backend framework for data management.
- **Django REST framework**: Empowering the creation of a versatile and efficient API.
- **PostgreSQL**: Providing a reliable and scalable database solution.
- **Ckeditor**: Enabling rich text content creation for a vibrant blogging experience


## Installation

To run the This Tech Thing web application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Eazyisreal/Blog

2. Navigate to project directory:

    ```bash
    cd blog

3. Install the dependencies

    ```bash
    npm install

4. Start the development server

    ```bash
    npm run dev

5. Open your browser and visit `http://localhost:5173` to see the application running locally



## How to run locally the backend

* Download this repo or run: 
```bash
    git clone https://github.com/Eazyisreal/Blog/blog-backend
```

#### In the root directory:
- Install all dependencies
```bash
    $ pip install -r requirements.txt
```
- Create an `.env` file and copy the contents from the `.env.example` to the file and set the respective values. A postgres database can be created with PG ADMIN or psql

- Run Locally
```bash
    $ python manage.py migrate 
```