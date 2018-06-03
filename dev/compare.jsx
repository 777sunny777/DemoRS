import React from 'react';
import ReactDOM from 'react-dom';

import Select2 from 'react-select-v2';

import Select from 'react-select-v1';
import 'react-select-v1/less/select.less';


function arrowRenderer () {
  const style = {
    "borderLeft": "1px solid",
    "borderColor": "hsl(0,0%,80%)"
  }
  return (
    <div style={{ "padding": "8px" }}>
      <div role="button" className="insert-icon" style={style}><svg height="20" width="20" viewBox="0 0 20 20" focusable="false" role="presentation" style={{ "paddingLeft": "8px" }}><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div>  
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectValue1: '',
        selectValue2: '',
      }
      this.updateValue1 = this.updateValue1.bind(this);
      this.updateValue2 = this.updateValue2.bind(this);
  }
  updateValue1(newValue){
    this.setState({
      selectValue1: newValue,
    });
  }
  updateValue2(newValue){
    this.setState({
      selectValue2: newValue,
    });
  }

  render() {
    return (
      <div>
        <div className="test-select-v1">
          <h2>"react-select": "^1.2.1"</h2>
          <Select
            name="react-select-v1"
            value={this.state.selectValue1}
            onChange={this.updateValue1}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
              { value: 'four', label: 'Four' },
            ]}
          />
        </div>
        <div className="test-select-v2">
          <h2>"react-select": "^2.0.0-beta.6"</h2>
          <Select2
            name="react-select-v2"
            value={this.state.selectValue2}
            onChange={this.updateValue2}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
              { value: 'four', label: 'Four' },
            ]}
          />
        </div>
        <div className="test-select-refactor">
          <h2>refactor react select UI based on v1</h2>
          <Select
            name="react-select-v1"
            value={this.state.selectValue1}
            onChange={this.updateValue1}
            arrowRenderer={arrowRenderer}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
              { value: 'four', label: 'Four' },
            ]}
          />
        </div>
      </div>


    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);