function App() {
  return (
    <iframe
      title="BYDAUTOASIA.COM"
      src={`${import.meta.env.BASE_URL}bydautoasia.html`}
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
