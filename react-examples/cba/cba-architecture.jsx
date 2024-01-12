const Header = ({title}) => React.createElement("h1", null, title);

const Sidebar = ({content}) => React.createElement("aside", null, content);

const MainContent = ({articles}) => React.createElement("article", null, articles);

const App = ({title, content, articles}) =>
  React.createElement(
    "div",
    null,
    React.createElement(Header, {
      title: title,
    }),
    React.createElement(
      "div",
      {
        className: "container",
      },
      React.createElement(Sidebar, {
        content: content,
      }),
      React.createElement(MainContent, {
        articles: articles,
      })
    )
  );
