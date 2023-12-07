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

1. **Home Page**: A visually appealing landing page that introduces users to This Tech Thing and its purpose. It provides a brief overview of the community and showcases testimonials from satisfied mentees and mentors.

2. **Mentor Page**: This section allows mentors to create profiles, providing details about their areas of expertise, experience, and availability. Mentors can showcase their skills and offer mentorship to interested mentees.

3. **Mentee Page**: Aspiring mentees can browse through the profiles of mentors and select those who align with their goals and interests. They can explore mentor profiles, view their availability, and request mentorship from specific mentors.

4. **About Us**: This page provides information about This Tech Thing, including its mission, values, and team members. It offers transparency and builds trust with the community.

5. **Blog**: An interactive blog platform where mentors and mentees can share their experiences, insights, and knowledge with the wider community. Users can read, comment, and engage with the blog posts.

6. **Mentee Application**: A dedicated page for mentees to apply for mentorship. Mentees can fill out an application form, providing information about their background, goals, and areas of interest. This information helps mentors in understanding mentees' requirements.

7. **Mentor Application**: Potential mentors can submit their applications through this page. They can provide details about their professional experience, expertise, and preferred mentorship approach. The information shared assists in connecting them with mentees who align with their skills.

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