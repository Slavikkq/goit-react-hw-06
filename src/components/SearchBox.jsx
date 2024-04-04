import { useDispatch } from "react-redux";
import { setSearchResults } from "../redux/contactsSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    dispatch(setSearchResults(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </div>
  );
}
