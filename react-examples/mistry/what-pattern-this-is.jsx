const withLogger = (WrappedComponent) => {
  return class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} has mounted.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const EnhancedComponent = withLogger(MyComponent);
