export default function UploadButton({
  setImage,
  setIsGenerating,
}) {

  function handleChange(e) {

    const file = e.target.files[0];

    if (!file) return;

    setIsGenerating(true);

    const url = URL.createObjectURL(file);

    setImage(url);

  }

  return (

    <label
      style={{
        background:"#2563eb",
        color:"#fff",
        padding:"14px 28px",
        borderRadius:"10px",
        cursor:"pointer",
        display:"inline-block",
        marginTop:"25px"
      }}
    >

      📷 Upload Photo

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

    </label>

  );

}