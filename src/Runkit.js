import React, { Component } from "react";

class RunKitCom extends Component {
  constructor() {
    super();
    this.addRunKit = this.addRunKit.bind(this);
  }

  componentDidMount() {
    if (!window) {
      return;
    }

    if (window.RunKit === undefined) {
      const script = document.createElement("script");
      script.src = "https://embed.runkit.com";
      document.body.appendChild(script);
      script.onload = this.addRunKit;
    } else {
      this.addRunKit();
    }
  }

  addRunKit() {
    if (this.element) {
      this.notebook = RunKit.createNotebook({
        element: this.element,
        source: this.props.source
      });
    }
  }

  componentWillUnmount() {
    this.notebook.destroy();
    this.notebook = null;
  }

  render() {
    return (
      <div className="RunKit">
        <div
          ref={c => {
            this.element = c;
          }}
        />
      </div>
    );
  }
}

export default RunKitCom;
