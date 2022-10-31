import { Card, CardHeader } from '@mui/material'
import React from 'react'

const HeaderCard = ({ title, subheader }) => {
  return (
    <Card
      variant='elevation'
      sx={{
        overflow: 'visible',
        '& .MuiCardHeader-subheader	': {
          color: 'white',
        },
        paddingLeft: '20px',
      }}
    >
      <CardHeader
        sx={{
          background: 'linear-gradient(to right bottom, #4caf50, #2e7d32)',
          marginLeft: '-20px',
          marginRight: '-20px',
          borderRadius: '5px',
          color: 'white',
        }}
        title={title}
        subheader={subheader}
      />
    </Card>
  )
}

export default HeaderCard
