import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isShowLoader: false,
    };
  }

  delayPosts = () => {
    this.setState({
      isShowLoader: true,
    });
    setTimeout(async () => {
      const posts = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then((result) => result.json());
      this.setState({
        posts,
        isShowLoader: false,
      });
    }, 2000);
  };

  componentDidMount() {
    this.delayPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <section>
          {this.state.isShowLoader && <h1>Loading...</h1>}
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}
