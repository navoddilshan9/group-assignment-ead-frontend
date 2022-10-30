import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function Role() {
  const [role, setRole] = useState('FRONT_DESK')
  return (
    <FormControl>
      <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={role}
        onChange={(event) => {
          setRole(event.target.value)
        }}
      >
        <FormControlLabel
          value='FRONT_DESK'
          control={<Radio />}
          label='Front Desk'
        />
        <FormControlLabel
          value='LOAN_SECTION'
          control={<Radio />}
          label='Loan Section'
        />
        <FormControlLabel value='MANAGER' control={<Radio />} label='Manager' />
      </RadioGroup>
    </FormControl>
  )
}
