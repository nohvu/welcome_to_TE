import { Component, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

// functional component
const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, (prevProps, nextProps) => prevProps.user.name === nextProps.user.name && prevProps.user.age === nextProps.user.age);

// class component
class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps) {
    if (this.props.name === nextProps.name && this.props.age === nextProps.age) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps) {
    if (this.props.user.name === nextProps.user.name && this.props.user.age === nextProps.user.age) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
