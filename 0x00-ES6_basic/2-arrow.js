export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (x) => {
    this.sanFranciscoNeighborhoods.push(x);
    return this.sanFranciscoNeighborhoods;
  };
}
