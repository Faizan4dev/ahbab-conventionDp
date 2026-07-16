export default function UploadButton({ setImage }) {
  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setImage(imageURL);
  }

  return (
    <label
      style={{
        background: "#2563eb",
        color: "#fff",
        padding: "14px 28px",
        borderRadius: "10px",
        cursor: "pointer",
        display: "inline-block",
        marginTop: "25px",
      }}
    >
      Upload Photo

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
}