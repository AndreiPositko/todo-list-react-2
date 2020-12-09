import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';

export const withLoader = (Comp) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        isShowLoader: true,
      };
    }
    showLoader = () => {
      this.setState({
        isShowLoader: true,
      });
    }

    hideLoader = () => {
      this.setState({
        isShowLoader: false,
      });
    };

    render() {
      const { isShowLoader } = this.state;
      return (
        <>
          {isShowLoader && <Loader />}
          <Comp
            showLoader={this.showLoader}
            hideLoader={this.hideLoader}
          />
        </>
      );
    }
  };
};
