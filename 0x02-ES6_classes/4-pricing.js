import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for _amount
  get amount() {
    return this._amount;
  }

  // Setter for _amount
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter for _currency
  get currency() {
    return this._currency;
  }

  // Setter for _currency
  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
