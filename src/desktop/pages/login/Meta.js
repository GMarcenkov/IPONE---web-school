import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMetaForUrl } from './MetaService';
import TestHelmet from './TestHelmet';

export default class Meta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: null,
      error: null,
      isLoading: true
    };

    this.scrollXHR = null;
    this.initialXHR = null;
  }

  fetchMeta(props) {
    getMetaForUrl(props.location.pathname, props.location.query)
      .then(meta => {
        this.setState({ meta, isLoading: false, error: null });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

  componentDidMount() {
    this.initialXHR = this.fetchMeta(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.scrollXHR = this.fetchMeta(nextProps);
  }

  componentWillUnmount() {
    this.stopInitialFetching();
    this.stopScrollFetching();
  }

  stopInitialFetching() {
    if (this.initialXHR) {
      this.initialXHR.cancel();
    }
  }

  stopScrollFetching() {
    if (this.scrollXHR) {
      this.scrollXHR.cancel();
    }
  }

  render() {
    const { meta } = this.state;

    return (
      <div>
        {get(meta, 'meta.title', null) && <TestHelmet meta={meta}/>}
        {this.props.children}
      </div>
    );
  }
}

Meta.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};
