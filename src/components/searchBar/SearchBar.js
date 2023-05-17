import UseTaskContext from "../../hooks/use-task-context";
import { useState } from 'react'

function SearchBar () {
    const {taskList} = UseTaskContext();
    const [toSelect, setToSelect] = useState(false)
    
    if(!taskList) return null;

    const handleSearch = (e) => {
        console.log(e.nativeEvent.data)
        taskList.map(task => {
            if(task.value.startsWith(e.nativeEvent.data)){
                setToSelect(true)
            }
    
        })

    }

    return <div>
        <input placeholder='Search...' onChange={handleSearch}></input>
        <select></select>
        
         </div>
}

export default SearchBar;