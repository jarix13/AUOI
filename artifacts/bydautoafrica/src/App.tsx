function App() {
  return (
    <iframe
      title="BYDAUTOAFRICA.COM"
      src={`${import.meta.env.BASE_URL}bydautoafrica.html`}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}

export default App;
