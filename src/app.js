// JSX - JavaScript XML: Provided by react, its not JavaScript:

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

const onRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];
  console.log(app.options);
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
      <p>Incremented array value + {app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>item one</li>
        <li>item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
