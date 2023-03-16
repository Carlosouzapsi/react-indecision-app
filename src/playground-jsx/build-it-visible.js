// To run the app:

// babel src/playground-jsx/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

// app:

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibily Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
