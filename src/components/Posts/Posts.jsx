import React from 'react';

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
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
