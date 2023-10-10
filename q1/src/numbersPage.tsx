import { useState } from "react";
import { useNavigate, Route } from "react-router-dom";
import Child1 from "./child1";

//import { Route } from "react-router-dom";

// import React from "react";

export const NumbersPage = () => {
  //const match = useMatch("/numbers");
  //const mainTab = '/numbers'
  //child routes
  // const childRoutes = userUrls.map((url) => {
  //   <Route key={url} path={`${mainTab}/${url}`} element={<ChildPage/>} />
  // })
  const navigate = useNavigate();
  // const [userUrls, setUserUrls] = useState<string[]>([]);
  const [userUrls, setUserUrls] = useState<string>("");
  const [predefinedUrls] = useState<string[]>([
    "/numbers/child1",
    "/numbers/child2",
    "/numbers/child3",
  ]);

  // const [childPages] = useState([
  //   { url: "/numbers/child1", numbers: [5, 2, 8] },
  //   { url: "/numbers/child2", numbers: [1, 9, 4] },
  //   { url: "/numbers/child3", numbers: [6, 3, 7] },
  // ]);

  // const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (predefinedUrls.includes(userUrls)) {
      // URL matches, proceed with submission
      navigate(userUrls);
    } else {
      // URL doesn't match, display an error statement
      alert("URL does not match any child route");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the userUrls array when the input changes
    setUserUrls(e.target.value);
  };

  return (
    <div>
      <h1>Number Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={userUrls}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Submit</button>
      </form>

      {/*create routes for child components */}
      <Route path="/numbers/child1" element={<Child1 />} />
    </div>
  );
};

export default NumbersPage;
