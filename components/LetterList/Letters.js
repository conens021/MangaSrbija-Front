
import { Fab, Paper } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

function Letters() {

    const dispatch = useDispatch()

    const changeStartingLetter = (letter) => {
        dispatch({type:"SET_STARTING_LETTER",startingLetter : letter})
    }

    const letters = [
        "#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z",
    ]

    return ( 
        <Fragment>
            {letters.map(l => (
                <Fab key={l} onClick={() => changeStartingLetter(l)}  size="small" color={l === "#" ? "secondary" : "primary"} aria-label="add">
                    {l}
                </Fab>
            ))}
        </Fragment>
     );
}

export default Letters;