import React from "react"; 

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        };
    }

    render() {

        const { name } = this.props;
        const { count } = this.state;

        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: Bengaluru</h3>
                <h4>Contact: shubhanggpandey@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;