import React, { useState } from 'react';
import { addPhone } from '../../actions/PhoneAction';
import { connect } from 'react-redux';
import '../../styling/PhoneForm.css';

const PhoneForm = (props) => {
  const [state, setState] = useState({
    title: '',
    pros: '',
    cons: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', state.title);
    formData.append('pros', state.pros);
    formData.append('cons', state.cons);
    formData.append('image', state.image);
    props.addPhone(formData);
    setState({
      title: '',
      image: '',
      pros: '',
      cons: '',
    });
    window.location.reload(props.history.push(`/phones`));
  };

  const handleImageChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const value = state.value;

  return (
    <div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <p>Device Name:</p>
          <input
            type="text"
            name="title"
            id="phoneForm-title"
            placeholder="Your device"
            onChange={handleChange}
            value={value}
          />
          <br></br>
          <br></br>
          <input
            type="file"
            name="photo"
            accept="image/*"
            multiple={false}
            onChange={handleImageChange}
          />
          <br></br>
          <br></br>
          <p>Device Pros:</p>
          <textarea
            type="text"
            name="pros"
            id="phoneForm-pros"
            cols="52"
            rows="3"
            placeholder="What do you like about this Galaxy?"
            onChange={handleChange}
            value={value}
          />
          <p>Device Cons:</p>
          <textarea
            type="text"
            name="cons"
            id="phoneForm-cons"
            cols="52"
            rows="3"
            placeholder="What can we improve on your Galaxy?"
            onChange={handleChange}
            value={value}
          />
          <br></br>
          <button className="submit-phone" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default connect(null, { addPhone })(PhoneForm)
