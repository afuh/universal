import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';

const CatchErrors = ({ error, open, close } ) => (
  <Snackbar
    key="snack"
    open={open}
    message={error || 'Error'}
    autoHideDuration={2000}
    onRequestClose={close}
  />
)

CatchErrors.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.string,
  close: PropTypes.func.isRequired
}


export default CatchErrors
