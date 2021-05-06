import React from 'react';
import TextField from '@material-ui/core/TextField'

export default function SearchBar(props) {
  return (
    <div>
        <form noValidate autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth onChange={props.onChange}/>
        </form>
    </div>
  );
}