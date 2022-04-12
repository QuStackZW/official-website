'use strict'

import { Router } from 'express';
let Blog = require('../models/blog.model');

Router.route('/').get((req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/blog/add').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const created = Date.parse(req.body.created);
    const updated = Date.parse(req.body.updated);
    const tags = req.body.tags;
    const comments = req.body.comments;
    const newBlog = new Blog({
        title,
        content,
        author,
        created,
        updated,
        tags,
        comments
    });

    newBlog.save()
        .then(() => res.json('Blog added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/blog/:id').get((req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/blog/edit').post((req, res) => {
    Blog.findById(req.params.id)
        .then(blog => {
            blog.title = req.body.title;
            blog.content = req.body.content;
            blog.author = req.body.author;
            blog.created = Date.parse(req.body.created);
            blog.updated = Date.parse(req.body.updated);
            blog.tags = req.body.tags;
            blog.comments = req.body.comments;

            blog.save()
                .then(() => res.json('Blog updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

Router.route('/blog/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json('Blog deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;
