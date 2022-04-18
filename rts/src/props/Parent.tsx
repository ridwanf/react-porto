import {ChildAsFC} from "./Child"

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('lalala')}>
    test test
  </ChildAsFC>
};

export default Parent;