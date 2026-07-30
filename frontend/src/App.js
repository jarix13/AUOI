import "@/App.css";

function App() {
  return (
    <iframe
      title="BYDAUTO.AE"
      src="/bydauto.html"
      data-testid="domain-preview-iframe"
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
