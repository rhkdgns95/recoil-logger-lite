import { useRecoilState } from "recoil";
import { countAtom, userAtom } from "./atoms";

export const App = () => {
  return (
    <>
      <Count />
      <User />
    </>
  );
};

const Count = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      count : {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrease</button>
    </>
  );
};

const User = () => {
  const [user, setUser] = useRecoilState(userAtom);
  return (
    <>
      <p>
        user-id :{" "}
        <input
          type="text"
          value={user.id}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, id: Number(e.target.value) }))
          }
        />
      </p>
      <p>
        user-name :{" "}
        <input
          type="text"
          value={user.username}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </p>
    </>
  );
};
