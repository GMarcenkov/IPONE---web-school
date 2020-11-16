import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TestHelmet from './TestHelmet';
import Meta from './Meta';

export default function LayoutRoute({
  component: Component,
  ...restProps
}) {
  return (
    <Route
     {...restProps}
     render={props => {
       return (
         <Meta {...props}>
         
             <Component {...props}/>
         
         </Meta>
       );
     }}/>
  );
}

LayoutRoute.propTypes = {
  component: PropTypes.elementType.isRequired

};
