import { useSelector, useDispatch } from "react-redux";
import { toggle_is_visible } from "../store/profile";
import { ProfileForm } from "../components";

export const ProfilePage = () => {
  const { isVisible, firstName, lastName, numberTel } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  return (
    <>
      {isVisible && (
        <div>
          <h2>First name: {firstName}</h2>
          <h2>Last name: {lastName}</h2>
          <h2>Number tel: {numberTel}</h2>
        </div>
      )}
      <button onClick={() => dispatch(toggle_is_visible())}>iS Visible</button>
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        numberTel={numberTel}
      />
    </>
  );
};
