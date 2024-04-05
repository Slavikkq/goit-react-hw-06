import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/filtersSlice";
import { selectSearchTerm } from "../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}
