import React, { useState } from 'react';
import {
  Anchor, Box, Button, Collapsible,
} from 'grommet';
import { Calendar, Menu, User } from 'grommet-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSelectors } from '../selectors';


const ContainerManagerPage = ({
  children,
  user: {
    firstName,
  },
}) => {
  const [openNotification, setOpenNotification] = useState(false);

  const toggleMenu = () => {
    setOpenNotification(!openNotification);
  };

  return (
    <Box fill>
      <Box
        as="header"
        direction="row"
        align="center"
        pad={{ vertical: 'small', horizontal: 'medium' }}
        justify="between"
        background="neutral-3"
        elevation="large"
        style={{ zIndex: '1000' }}
      >
        <Button
          onClick={() => toggleMenu()}
          icon={<Menu color="white" />}
        />
        <User />
        {firstName}
      </Box>
      <Box
        flex
        direction="row"
      >
        <Collapsible direction="horizontal" open={openNotification}>
          <Box
            flex
            width="small"
            background="light-1"
            pad={
              {
                vertical: 'large',
                horizontal: 'medium',
              }
            }
            elevation="xlarge"
          >
            <Anchor icon={<Calendar />} href="/calendar" primary label="Calendar" size="medium" />
          </Box>
        </Collapsible>
        <Box flex align="center" justify="center">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

ContainerManagerPage.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    firstSurname: PropTypes.string,
    secondSurname: PropTypes.string,
    email: PropTypes.string,
  }),
};

const mapStateToProps = (state) => {
  const user = loginSelectors.getUser(state);

  return { user };
};

export default connect(mapStateToProps, null)(ContainerManagerPage);
