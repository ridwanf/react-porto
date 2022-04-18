import {FC, ReactElement, useState} from "react";

interface User {
  name: string,
  age: number
}

const users = [
  {name: "ridwan", age: 20},
  {name: "areta", age: 20},
  {name: "fansuri", age: 20},
  {name: "zafira", age: 20},
]

const UserSearch: FC = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState<JSX.Element>()
  const onClick = () => {
    const searchResult = users.find(user => user.name === name)
    if(searchResult) {
      const resultDiv = <div>
        <label style={{padding: '10px', margin: '10px'}}>{searchResult.name}</label>
        <label>{searchResult.age}</label>
      </div>
      setResult(resultDiv)
    } else {
      setResult(<div>Not Found</div>)
    }
  }

  return (
    <div>
      User Search
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>

      {result}
    </div>
  )
}

export default UserSearch;
