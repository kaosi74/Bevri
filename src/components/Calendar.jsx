// import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function CalendarComponent() {
    // const [ value, setValue ] = useState(new Date());
    // const onChange = useCallback(
    //     (value) => {
    //         setValue(value)
    //     }, [setValue]
    // )
  return (
      <div>
          <Calendar />
    </div>
  )
}
