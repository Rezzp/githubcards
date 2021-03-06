import React from 'react';

class Form extends React.Component {

    state = {
        userName: ''
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(this.state.userName)
        const data = await fetch(`https://api.github.com/users/${this.state.userName}`).then((response) => response.json());


        if (data.message === 'Not Found') {
            console.log(data);
            console.log('Data not found!')
        } else {
            this.props.onSubmitting(data)
        }
    }



    onChangeHandler(e) {
        this.setState({
            userName: e.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Github Username..."
                        value={this.state.userName}
                        onChange={(e) => this.onChangeHandler(e)}
                    />
                    <button className="adduser">Add User</button>
                </form>


            </div >
        );
    };
};

export default Form;