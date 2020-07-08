import React from 'react';

export default (props) => {
return <p className="text-red-500">{props.error.message}</p>
}