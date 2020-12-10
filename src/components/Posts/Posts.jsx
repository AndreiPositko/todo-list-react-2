import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../Search';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isShowLoader: false,
      search: '',
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
    });
  };

  componentDidMount() {
    this.delayPosts();
  }

  updateSearch = (value) => {
        this.setState({
            search: value,
        })
        console.log(this.state.search);
    }

  render() {
    const { posts, isShowLoader, search } = this.state;
    return (
      <div>
        <section>
          <Search updateSearch={ this.updateSearch}/>
          { isShowLoader && <h1>Loading...</h1>}
          <h2>{ this.props.title}</h2>
          <ul>
            {posts.filter(post => post.title.includes(search)).map((post) => (
              <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
