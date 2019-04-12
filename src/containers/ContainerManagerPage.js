import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Text } from 'grommet';
import { Menu } from 'grommet-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSelectors } from '../selectors/';

export class ContainerManagerPage extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

  state = {
    openNotification: false
  };

  toggleMenu() {
    const { openNotification } = this.state;

    this.setState({ openNotification: !openNotification });
  }

  render() {
    const { children, user } = this.props;

    const { openNotification } = this.state;

    return (
      <Box fill>
        <Box
          as="header"
          direction="row"
          align="center"
          pad={ { vertical: "small", horizontal: "medium" } }
          justify="between"
          background="neutral-3"
          elevation="large"
          style={ { zIndex: "1000" } }
        >
          <Button
            onClick={ () => this.toggleMenu() }
            icon={ <Menu color="white"/> }
          />
          <Heading level={ 3 } margin="none" color="white">
            <strong>{ user.firstName }</strong>
          </Heading>
        </Box>
        <Box
          flex
          fill={ "vertical" }
          direction="row">
          <Collapsible direction="horizontal" open={ openNotification }>
            <Box
              flex
              width="small"
              background="light-2"
              pad="xsmall"
              elevation="small"
            >
              <Text size="xlarge">Sidebar</Text>
            </Box>
          </Collapsible>
          <Box flex align="center" justify="center">
            { children }
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const user = loginSelectors.getUser(state);

  console.debug('Loaded user', user);

  return { user };
};

export default connect(mapStateToProps, null)(ContainerManagerPage);
