import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import ContainerManager from './ContainerManagerPage';

const App = ({ children }) => (
  <Box fill>
    <ContainerManager children={children} />
  </Box>
);


App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
