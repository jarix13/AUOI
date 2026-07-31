function App() {
  return (
    <iframe
      title="BYDAUTO.AE"
      src={`${import.meta.env.BASE_URL}bydauto.html`}
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
