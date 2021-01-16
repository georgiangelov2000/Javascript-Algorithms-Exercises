function solve() {

    class Posts {
        constructor(title, content) {
            this.title = title;
            this.content = content
        }
        toString() {
            return `${this.title}->${this.content}`
        }
    }


    class SocialMediaPost extends Posts {
        constructor(title, content, like, dislike) {
            super(title, content);
            this.like = like;
            this.dislike = dislike;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let string = super.toString() + `\nRaiting: ${this.like - this.dislike }`;
            if (this.comments.length > 0) {
                string += `\nComments:`;
                this.comments.forEach(c => string += `\n * ${c}`);
            }
            return string;
        }
    }

    class BlogPost extends Posts {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews:${this.views}`
        }
    }

    return {
        Posts,
        SocialMediaPost,
        BlogPost
    };

}
let posts=solve();
let currentPost=posts.Posts;

let socialMedia=posts.SocialMediaPost;
let blogPost=posts.BlogPost;

let newPost=new currentPost('Post','Content');
console.log(newPost.toString());

let scm=new socialMedia('TestTitle','Test Content',35,30);
scm.addComment('Just Post');
scm.addComment('Good Post');
scm.addComment('Wow');
console.log(scm.toString());

let blog=new blogPost(' testTitle ',' testContent ',5);
console.log(blog.toString());