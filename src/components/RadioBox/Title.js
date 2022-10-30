import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function Title() {
  const [title, setTitle] = useState('MR')
  return (
    <FormControl>
      <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      >
        <FormControlLabel value='MR' control={<Radio />} label='Mr.' />
        <FormControlLabel value='MRS' control={<Radio />} label='Mrs.' />
        <FormControlLabel value='MS' control={<Radio />} label='Ms.' />
        <FormControlLabel value='DR' control={<Radio />} label='Dr.' />
        <FormControlLabel value='REV' control={<Radio />} label='Rev.' />
        <FormControlLabel value='OTHER' control={<Radio />} label='Other' />
      </RadioGroup>
    </FormControl>
  )
}
