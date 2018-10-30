import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Sum = (props) => {
    return <h1>
                Sum of {props.a} and {props.b} equals to {props.a + props.b}
            </h1>;
};

Sum.propTypes =  {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired

}
export default Sum;
