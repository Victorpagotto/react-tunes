import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import Loading from './Loading';

class Album extends React.Component {
  componentDidMount() {
    const { handleUser } = this.props;
    handleUser();
  }

  render() {
    const { userInfo, loading } = this.props;
    if (!loading) {
      return (
        <div data-testid="page-album">
          <Header userInfo={ userInfo } />
          <h1>Album Page</h1>
        </div>
      );
    }
    return <Loading />;
  }
}

Album.propTypes = {
  userInfo: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
  loading: propTypes.bool.isRequired,
  handleUser: propTypes.func.isRequired,
};

export default Album;