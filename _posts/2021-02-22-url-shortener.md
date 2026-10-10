---
layout: post
title: "URL Shortener"
date: 2026-10-10
---

Sure, many people have done a [URL Shortener](https://github.com/colingillette/url-shortener), but I thought it would be a good quick project for me because of two reasons:

1. I had been so busy with my job the last few years that I didn't have a ton of time to pursue portfolio projects.
2. This was a good excuse to play around with AI tools that my professional work would not approve.

I let copilot go to town on this project a little bit, caring more about my ability to guide the agent than testing my own coding skills. I know I could have coded this entirely by hand based on my experience, but that's not really a helpful skill anymore. It's much more pertinent to use the tools of the moment.

## Tech Stack

- Spring Boot: Easy decision because it's where I've had most of my professional experience. If I'm going to experiment with AI, I should lean on a language I know well.
- Postgres: I'm not very familiar with Postgres, but this was a very simple database so it was worth learning.
- Docker: Easy containerization for Postgres and eventually the application as well if I'm so inclined.

## Workflow

This application can be split into three major categories of functionality:

### URL Shortener

Unsurprisingly, the most "complicated" portion was upserting a short URL + long URL combination. I've also added an email field to track down users if I ever publish this.

A short URL can be provided by using the GET path `hostname/{shortUrl}`. The user will be automatically redirected to their target website if the long URL link exists, or to this website if it does not (*evil laugh).

Whenever a valid short URL is accessed, I record that the interaction occured, which brings us to our next section.

### Hit Tracker

Everytime a short URL redirect occurs, I track the time and give it a unique identifier. Besides the audit information being useful, if this were ever a deployed service there might be a monetization opportunity for links used a large amount of times. Another opportunity might be to limit the number of sites a user can manage, but that would have to be more complex to avoid a bunch of email spoofs.

### Admin Functions

If I don't want to log into Postgres to see my test data, I can just dump it into a response body.

## Future Changes

These are changes I should make, but may or may not depending on schedule:

- Authentication and roles (user vs admin)
- Real Deployment to AWS
- CI/CD through something like GitHub Actions

This is a pretty basic project where I was more concerned with the implementation, so these steps may be overkill for now.