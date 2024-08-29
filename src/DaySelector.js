import { React } from "react";
import {MenuItem, Select} from "@mui/material";
import ActivityType from "./ActivityType";
import FormControl from '@mui/material/FormControl';


// TODO: Get the selected activity type to show in the select.

let activityMapping = [
    ActivityType.cross,
    ActivityType.run,
    ActivityType.pace,
    ActivityType.interval,
    ActivityType.run,
    ActivityType.rest,
    ActivityType.longRun
];

function DaySelector() {
  // const [age, setAge] = React.useState('');
  //
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <>
      {/*<FormControl fullWidth style={{display: 'flex', flexDirection: 'row'}}>*/}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {activityMapping.map((activityType, id) => (
          // <div style={{flex: '0 0 14.2857%'}} key={activityType}>
            <Select
              key={id}
              id={id + 'select'}
              value={activityMapping[id]}
              style={{flex: '0 0 14.2857%'}}
              // onChange={handleChange}
              >
              <MenuItem value={ActivityType.run}>{ActivityType.run}</MenuItem>
              <MenuItem value={ActivityType.cross}>{ActivityType.cross}</MenuItem>
              <MenuItem value={ActivityType.pace}>{ActivityType.pace}</MenuItem>
              <MenuItem value={ActivityType.interval}>{ActivityType.interval}</MenuItem>
              <MenuItem value={ActivityType.rest}>{ActivityType.rest}</MenuItem>
              <MenuItem value={ActivityType.longRun}>{ActivityType.longRun}</MenuItem>
            </Select>

            // <div>{activityType}</div>
            // </div>
            ))}
        {/*</FormControl>*/}
        </div>
    </>
  )
}

export default DaySelector;