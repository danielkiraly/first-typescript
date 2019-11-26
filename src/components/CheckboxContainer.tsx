import React from 'react';
import PropTypes from 'prop-types';
// import checkboxes from '../data/Checkboxes';
import Checkbox from './Checkbox'; 


interface CheckboxContainerProps{
  doIt(checkedItems: Map<string, boolean>):void;
}

interface CheckBoxContainerState{
  checkedItems: Map<string, boolean>;
}

interface CheckboxData{
    name: string;
    label: string;
    key: string;
}

class CheckboxContainer extends React.Component<CheckboxContainerProps, CheckBoxContainerState> {
  private checkboxes: CheckboxData[];

  constructor(props: CheckboxContainerProps) {
    super(props);

    this.checkboxes = [{
      name: 'balanced',
      key: 'checkBox1',
        label: 'Check Box 1'},
    {
      name: 'high protein',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
    {
      name: 'low-fat',
      key: 'checkBox3',
      label: 'Check Box 3',
    },
    {
      name: 'low-carb',
      key: 'checkBox4',
      label: 'Check Box 4',
    },
    {
      name: 'vegan',
      key: 'checkBox5',
      label: 'Check Box 5',
    },
    {
      name: 'vegetarian',
      key: 'checkBox6',
      label: 'Check Box 6',
    },
    {
      name: 'sugar-conscious',
      key: 'checkBox7',
      label: 'Check Box 7',
    },
    {
      name: 'peanut-free',
      key: 'checkBox8',
      label: 'Check Box 8',
    },
    {
      name: 'tree-nut-free',
      key: 'checkBox9',
      label: 'Check Box 9',
    },
    {
      name: 'alcohol-free',
      key: 'checkBox10',
      label: 'Check Box 10',
    }];

    this.state = {
      checkedItems: new Map(),
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState({ checkedItems: this.state.checkedItems.set(item, isChecked) }, () => {
      this.props.doIt(this.state.checkedItems);
    });
    
  }

  render() {
    return (
      <>
        {
          this.checkboxes.map(item => (
            <label key={item.key} style={{ color: 'darkorange', textAlign: 'center', 
            marginLeft: '1.5%', fontSize: '20px', fontWeight: 'bold'}}>
              {item.name}
              <Checkbox 
                        name={item.name} 
                        checked={this.state.checkedItems.get(item.name)} 
                        onChange={this.handleChange} 
              />
            </label>
          ))
        }
      </>
    );
  }
}

export default CheckboxContainer;