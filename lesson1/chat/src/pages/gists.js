import { useDispatch, useSelector } from "react-redux";
import { getGists, searchGists } from "../store/gists/thunks";
import { useEffect, useState } from "react";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export function GistPages() {
  const [value, setValue] = useState("bogdanq");
  const dispatch = useDispatch();
  const { gists, pending, error, searchGist, searchError, searchPending } =
    useSelector((state) => state.gists);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchGists(value));
  }, [dispatch, value]);

  if (pending || searchPending) {
    return <h1>pending....</h1>;
  }

  if (error || searchError) {
    return <h1>error....</h1>;
  }

  return (
    <div>
      <h1>Gist Pages</h1>

      {gists.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      {buttons.map((button) => (
        <button onClick={() => dispatch(getGists(button))} key={button}>
          {button}
        </button>
      ))}

      <hr />

      <div>
        <input value={value} onChange={setValue} placeholder="enter name" />
      </div>
      {searchGist.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}
    </div>
  );
}
