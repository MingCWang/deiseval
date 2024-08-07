import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../../utils/ColorTheme.jsx';



export default function DropdownSelection({ value, options, label, handleChange }) {
    return (
        <ThemeProvider theme={customTheme}>
            <Autocomplete
                onInputChange={(event, value) => handleChange(event, value)}
                disablePortal
                id='combo-box-demo'
                forcePopupIcon
                options={options}
				slotProps={{
					paper: {
					  sx: {
						'& .MuiAutocomplete-listbox': {
							backgroundColor: 'secondary.main',
						  '& .MuiAutocomplete-option': {
							color: 'background.main',
						  },
						},
					  },
					},
				  }}
                sx={{
					// color: 'secondary.main',
                    width: 280,
					
                    // // marginRight: '40px',
                    // '& .MuiInputBase-root': {
					// 	color: 'secondary.main',
                    // },
                    '@media (max-width: 665px)': {
                        width: '70%', // Width for screens smaller than 665px
                        marginRight: '0px',
                    },
                }}
                renderInput={(params) => (
                    <TextField {...params} label={label} sx={{color: '#232946'}}/>
                )}
                value={value}
            />
        </ThemeProvider>
    );
}
