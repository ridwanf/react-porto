import { FC, FormEvent, useState } from "react";
import { useActions } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypedSelector";
const RepositoriesList: FC = () => {
  const [term, setTerm] = useState('`');
  const {searchRepositories} = useActions();
  const {data, error, loading} = useTypeSelector((state) => state.repositories)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    searchRepositories(term);
  }
  return <div>
    <form onSubmit={onSubmit}>
      <input type="text"  value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>loading...</h3>}
    {!error && !loading && data.map((d) => {
      return (
        <div>
          {d}
        </div>
      )
    })}
  </div>
};

export default RepositoriesList;