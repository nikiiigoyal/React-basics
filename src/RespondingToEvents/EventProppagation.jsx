// here two messages apperas when clicke on a button one of its onclick and other of toolbar
export default function ToolKit() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      {/* stop propagtion now if clciked on this button so toolbar msg will not appear */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Playing!");
        }}
      >
        Play song
      </button>
      <button onClick={() => alert("Uploading!")}>Upload video</button>
    </div>
  );
}
