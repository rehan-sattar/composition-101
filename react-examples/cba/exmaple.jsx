/**
 *
 * Composition Pattern 01: Nesting components
 *
 */
const Header = ({title}) => <h1>{title}</h1>;
const Sidebar = ({content}) => <aside>{content}</aside>;
const MainContent = ({articles}) => <article>{articles}</article>;

const App = ({title, content, articles}) => (
  <>
    <Header title={title} />
    <div className="container">
      <Sidebar content={content} />
      <MainContent articles={articles} />
    </div>
  </>
);

/**
 *
 * Composition Patterns 02: Passing data to separate components
 */
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message  ">{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />;
}

/***
 *
 * Composition Patterns 03: Passing whole components as Props to child components.
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
