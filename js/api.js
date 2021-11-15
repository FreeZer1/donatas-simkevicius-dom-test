const baseURL = "http://localhost:3000";

class API {

  static fetchApartments = (success, err) => {
    fetch(`${baseURL}/apartments`)
    .then(res => res.json())
    .then(success)
    .catch(err);
  };

  static deleteApartment = (id, success, err) => {
    fetch(`${baseURL}/apartments/${id}`, {method: 'DELETE'})
    .then(res => res.ok ? success() : err(res.statusText))
    .catch(err);
  };
  
};