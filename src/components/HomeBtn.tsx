import * as React from 'react';
import Button from 'react-bootstrap/Button'


class HomeBtn extends React.Component<any> {
    render() { 
        return ( 
            <Button
                    variant="outline-light"
                    href='http://localhost:3000'
            >
                Home
            </Button>
         );
    }
}
 
export default HomeBtn;