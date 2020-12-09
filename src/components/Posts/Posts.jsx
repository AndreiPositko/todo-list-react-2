import React from 'react';
import { Link } from 'react-router-dom'

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
    const { posts,isShowLoader } = this.state;
    return (
      <div>
        <section>
          { isShowLoader && <h1>Loading...</h1>}
          <h2>{ this.props.title}</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
