import React, {Component} from 'react';


var MedicationList = [
    {
        name: "Medication #1"
    },
    {
        name: "Medication #2"
    },
    {
        name: "Medication #3"
    }
];

class MedsListBody extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          medication: ''
        }
    }

    onInputChange = event =>{
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: target.value
        });
        event.preventDefault();
      }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addMedication(this.state.medication, this.props.userId);
    }


    render() {
        return (
                <nav className="panel">
                    <p className="panel-heading has-text-centered">
                        Medications
                    </p>
                    <div className="panel-block">
                        <div className="control has-icons-left">
                            <form onSubmit={this.handleSubmit} className="field has-addons">
                                <p className="control">
                                    <input className="input is-small" value={this.state.medication} onChange={this.onInputChange} type="text" name='medication' placeholder="Add medication"/>
                                </p>
                                <p className="control">
                                    <button type='submit' className="button is-small">Add</button>
                                </p>
                            </form>
                        </div>
                    </div>
                    <MedicationBlock MedicationList={this.props.medications} />
                </nav>

        )
    }
}


const MedicationBlock = ({MedicationList}) => {
        return(
            <div>
            {MedicationList.map((e, i) =>
                <a key={i} className="panel-block">
                    <span className="panel-icon">
                        <i className="fa fa-plus-square"></i>
                    </span>
                    {e.name}
                </a>
            )}
            </div>
        )
}


export default MedsListBody;
