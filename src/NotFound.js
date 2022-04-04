import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <>
            <p>Something went wrong. Can't find that page.</p>
            <img src='https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8=' 
                alt='404 Page Not Found' />
            <Button>
                <Link className='Product-homeBtn' to='/'>Home</Link>   
            </Button>
        </>
    )
}

export default NotFound;