import React from 'react'
import Dashboard from './Dashboard';

import TableListEvent from './Event/TableListEvent';
const ListEvent = ({ auth,
    counts,
    events,
    queryParams = null,
    success,
    paginationevent,
    urlpath,}) => {
      
  return (
    <Dashboard auth={auth}>
<TableListEvent 
 auth={auth} 
 urlpath={urlpath}
 events={events}
 queryParams={queryParams}
 paginationevent={paginationevent}
/>
    </Dashboard>
  )
}

export default ListEvent
