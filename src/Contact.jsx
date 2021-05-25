import React, { useState } from "react";

const Contact = () => {
    const [Data, setData] = useState(
        {
            fname: "",
            phone: "",
            email: "",
            comment: ""
        });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }
    const formSubmit = (event) => {
        event.preventDefault();
        alert(`You've submitted name: ${Data.fname}, Phone: ${Data.phone}, Email: ${Data.email} and your message: ${Data.comment}`)
    }
return (<>
    <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            Full Name
                            </label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="fname"
                            value={Data.fname}
                            onChange={InputEvent}
                            placeholder="Robin Reddy" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            Phone
                            </label>
                        <input type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="phone"
                            value={Data.phone}
                            onChange={InputEvent}
                            placeholder="9999999999" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            Email address
                            </label>
                        <input name="email"
                            value={Data.email}
                            onChange={InputEvent}
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Comment
                            </label>
                        <textarea
                            name="comment"
                            value={Data.comment}
                            onChange={InputEvent}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>);
}
export default Contact;