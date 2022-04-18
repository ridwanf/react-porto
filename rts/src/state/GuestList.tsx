import {FC, useState} from "react"

const GuestList: FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName('');
    setGuests([...guests, name])
  }
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
}

export default GuestList;