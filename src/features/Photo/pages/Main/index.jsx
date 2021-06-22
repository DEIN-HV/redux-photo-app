import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from '../AddEdit';
import NotFound from '../../../../component/NotFound';

Photo.propTypes = {};

function Photo(props) {

    const match = useRouteMatch();
    console.log(match);

    return (
        <Switch>
            {/* <Route exact path={match.url} component={Photo}/> */}

            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound} />
        </Switch>

    );
}

export default Photo;