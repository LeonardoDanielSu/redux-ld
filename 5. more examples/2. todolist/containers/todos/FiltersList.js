import React from 'react'
import Filter from './Filter'

const FiltersList = () => (
  <p>
    Show:
    {" "}
    <Filter filter="SHOW_ALL">
      All
    </Filter>
    {", "}
    <Filter filter="SHOW_ACTIVE">
      Active
    </Filter>
    {", "}
    <Filter filter="SHOW_COMPLETED">
      Completed
    </Filter>
  </p>
)
export default FiltersList