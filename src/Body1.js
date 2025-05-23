import React from 'react';
function Guest({coin}) {
    return (
        <div>
           <h1>This is coin number {coin}</h1>
        </div>
    );
}
function AlertButton({message,children}) {
    return(
        <button onClick={()=>alert(message)}>
            {children}
        </button>

    );
    
}

export default function Body() {
    return (
     <div>
         <AlertButton message="This is Alert using passing props">
        Play Movie
      </AlertButton>
        <Guest coin={1} />
        <Guest coin={2} />
        <Guest coin={3} />
        </div>
    );
 }