import { useSelector } from 'react-redux';

export default function Category() {
  const { status } = useSelector((state) => state.category);
  return (
    <div>{status}</div>
  );
}
