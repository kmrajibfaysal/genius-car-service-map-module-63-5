import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage you services!</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{' '}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
