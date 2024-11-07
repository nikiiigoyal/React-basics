// Reading props in event handlers
function AlertButton({ message, children }) {
  return (
    // reding message as message is passed as a prop
    <button onClick={() => alert(message)}>{children}</button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
