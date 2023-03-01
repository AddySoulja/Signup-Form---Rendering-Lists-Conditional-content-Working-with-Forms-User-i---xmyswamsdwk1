import React, {useState} from "react";
import '../styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = [];

    Object.keys(formData).map((key) => {
      if (formData[key] === "") {
        errors[0] = "All fields are mandatory";
        return;
      }
    });
    if (!/^[0-9a-zA-Z]+$/.test(formData.name)) {
      errors.push("Name is not alphanumeric");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      errors.push("Email must contain @");
    }
    if (!/^[0-9]/.test(formData.phoneNumber)) {
      errors.push("Phone Number must contain only numbers");
    }
    if (formData.password.length < 6) {
      errors.push("Password must contain atleast 6 letters");
    }
    if (errors.length === 0) {
      alert(
        `Hello ${formData.email.substring(0, formData.email.indexOf("@"))}`
      );
      return;
    }
    errors.map((err) => alert(err));
    errors = [];
  };

  return (
    <div id="main">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          data-testid="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ></input>
        <br />
        <br />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          data-testid="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></input>
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <select
          data-testid="gender"
          id="gender"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone</label>
        <input
          type="number"
          data-testid="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        ></input>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          data-testid="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        ></input>
        <br />
        <br />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default App;
