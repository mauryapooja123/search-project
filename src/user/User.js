import React, { useState, useEffect } from "react";
import axios from "axios";

//import Search from "../../component/form/Search";

const User = () => {
  const [user, setUser] = useState();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(" http://localhost:3004/posts");

    setUser(res.data);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    if (searchData) {
      let filter = user.filter(
        (us) => us.name.includes(value) || us.email.includes(value)
      );
      setUser(filter);
    } else {
      getData();
    }
    setSearchData(value);
  };

  console.log(searchData, "");
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(event) => handleSearch(event)}
      />
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {user &&
          user.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default User;
