class ApartmentCardComponent {

  static USD_EUR = 0.88;

  constructor(props) {
    this.props = props;
    this.init();
  };

  init = () => {
    const {
      type,
      owner,
      roomCount,
      squares,
      address,
      price,
      imgSrc,
      onDelete
    } = this.props;
    const {
      city,
      country,
      street,
      number
    } = address;
    const {
      fullname,
      email,
      phone
    } = owner;
    const {
      amount,
      currency
    } = price;
    //                  'street-number, city, country.'
    const fullAddress = street + '-' + number + ', ' + city + ', ' + country + '.';
    const rooms = roomCount + ' rooms | ' + squares + '&#13221;';
    const finalPrice = currency === "$" ? amount * ApartmentCardComponent.USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100
    const pricePerSquare = formatedPrice / squares;
    const finalFormatedPrice = formatedPrice + '€'
    const finalPricePerSquare = Math.round(100 * pricePerSquare) / 100 + '&#13221;';

    this.htmlElement = document.createElement('article');
    this.htmlElement.classname = 'card';
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
    <div class="card-body">
      <h2 class="h5 text-center">${type} For Sale</h2>
      <ul>
        <li>
          <strong>${fullAddress}</strong>
        </li>
        <li class="text-muted">
          ${rooms}
        </li>
        <li>
        <strong>${finalFormatedPrice} | ${finalPricePerSquare}</strong>
      </li>
      </ul>
      <h3 class="h6 text-center">Contact</h3>
      <ul>
        <li>
          <strong>Name: ${fullname}</strong>
        </li>
        <li>
          <strong>Email: <a href="mailto:${email}" class="text-body">${email}</a></strong>
        </li>
        <li>
          <strong>Phone: <a href="tel:${phone}" class="text-body">${phone}</a></strong>
        </li>
      </ul>
      <div class="text-center">
        <button class="btn btn-danger">Delete</button>
      </div>
    <div>
    `
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
  };

};