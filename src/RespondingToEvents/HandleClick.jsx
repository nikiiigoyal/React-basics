// responding to event defined function and used it as a prop in button
export default function Button() {
  function handleCick() {
    alert("this is working now");
  }
  return (
    <>
      <button onClick={handleCick}>I don't do anything</button>;
    </>
  );
}
