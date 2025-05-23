import React from 'react';
function Guest({coin}) {
    return (
        <div>
           <h1>This is coin number {coin}</h1>
        </div>
    );
}

export default function Body() {
    return (
        <div>
        <Guest coin={1} />
        <Guest coin={2} />
        <Guest coin={3} />
       
        </div>
    );
 }