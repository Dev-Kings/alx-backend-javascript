import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const cl1 = new ClassRoom(19);
  const cl2 = new ClassRoom(20);
  const cl3 = new ClassRoom(34);

  return [cl1, cl2, cl3];
}
