import "./App.css";
import { useState } from "react";

const initData = [
    {fullName: "Nguyen Quang Huy", company: "Lap trinh", email: "huy@gmail.com", phoneNumber: "084324", subject: "Subject 1" },
    {fullName: "Nguyen Cong Hieu", company: "IT", email: "hieu@gmail.com", phoneNumber: "084324", subject: "Subject 2" },
    {fullName: "Dinh Quang Minh", company: "Design", email: "minh@gmail.com", phoneNumber: "2532542345", subject: "Subject 1" },
  ];
  
function App() {
	const [data, setData] = useState(initData);

	let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [company, setCompany] = useState("");
    let [email, setEmail] = useState("");
    let [area, setArea] = useState("");
    let [phone, setPhone] = useState("");
    let [subject, setSubject] = useState("");

    const valueFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const valueLastName = (e) => {
        setLastName(e.target.value);
    };
    const fullName = firstName + ' ' + lastName;

    const valueCompany = (e) => {
        setCompany(e.target.value);
    };

    const valueEmail = (e) => {
        setEmail(e.target.value);
    };

    const valueArea = (e) => {
            setArea(e.target.value);
    };

    const valuePhone = (e) => {
        setPhone(e.target.value);
    };
    const phoneNumber = area + phone;

    const valueSubject = (e) => {
        setSubject(e.target.value);
    };

    const valueCustomer = (e) => {};

    const addStudent = () => {
    let cloneData = [...data];
    cloneData.push({ fullName: fullName, company: company, email: email, phoneNumber: phoneNumber, subject: subject });
    setData(cloneData);
	};

    return (
    <div className="container">
        <div className="main-box">
            <div className="box-heading">
                <h2 className="box-heading-title">EVENT REGISTRATION FORM</h2>
            </div>
            <div className="box-body">
                <form action="">
                    <div className="form-group">
                        <div className="form-title">Name</div>
                        <div className="form-input">
                            <div className="input-group">
                                <input
                                    onChange={valueFirstName}
                                    className="w100px input-50h input-arena-code"
                                    type="text"
                                    name="first-name">
                                </input>
                                <p className="input-title">First Name</p>
                            </div>
                            <div className="input-group">
                                <input 
                                    onChange={valueLastName} 
                                    className="input-50h input-phone-number" 
                                    type="text" 
                                    name="last-name">
                                </input>
                                <p className="input-title">Last Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-alone">
                        <div className="form-title">Company</div>
                        <div className="form-input">
                            <input
                                onChange={valueCompany}
                                className="input-50h input-content"
                                type="text"
                                name="company"
                            ></input>
                        </div>
                    </div>
                    <div className="form-alone">
                        <div className="form-title">Email</div>
                        <div className="form-input">
                            <input
                                onChange={valueEmail}
                                className="input-50h input-content"
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                            ></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-title">Phone</div>
                        <div className="form-input">
                            <div className="input-group">
                                <input
                                    onChange={valueArea}
                                    className="w100px input-50h input-arena-code"
                                    type="text"
                                    name="area-code"
                                ></input>
                                <p className="input-title">Area Code</p>
                            </div>
                            <div className="input-group">
                                <input
                                    onChange={valuePhone}
                                    className="input-50h input-phone-number"
                                    type="text"
                                    name="phone-number"
                                ></input>
                                <p className="input-title">Phone Number</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-alone">
                        <div className="form-title">Subject</div>
                        <div className="form-input">
                            <select
                                onChange={valueSubject}
                                className="input-50h input-content"
                                defaultValue="Choose option"
                                aria-hidden="true"
                            >
                            <option disabled="disabled" role="presentation">
                                Choose option
                            </option>
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-check">
                        <h5 className="form-check-title">Are you an existing customer?</h5>
                        <div className="form-check-radio" onChange={valueCustomer}>
                            <div className="form-check-chirld">
                                <input className="radio-check" type="radio" defaultChecked name="exist"></input>
                                <span>Yes</span>
                            </div>
                            <div className="form-check-chirld">
                                <input className="radio-check" type="radio" name="exist"></input>
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={addStudent} className="btn-submit">
                            REGISTER
                        </button>
                    </div>
                    <div className="form-table">
                        <p>LIST STUDENT</p>
                        <table>
                            <tr>
                                <th>FullName</th>
                                <th>Company</th>
                                <th>Email</th>
                                <th>PhoneNumber</th>
                                <th>Subject</th>
                                <th>Delete</th>
                            </tr>
                        {data.map((e, i) => (
                            <tr>
                                <td>{e.fullName}</td>
                                <td>{e.company}</td>
                                <td>{e.email}</td>
                                <td>{e.phoneNumber}</td>
                                <td>{e.subject}</td>
                                <td>
                                    <button>Xoa</button>
                                </td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;