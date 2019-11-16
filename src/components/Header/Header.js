import React from 'react';
import { Jumbotron } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = props => {
  
    return (
        <Jumbotron className={`text-center text-md-left rounded-0 mb-4 ${styles.myJumbotron}`}>
            <h1 className={`display-3 
                ${styles.jumboH1}`}>
                 Notes App
            </h1>
            <hr className="my-2" />
        </Jumbotron>
    );
}

export default withRouter(Header);