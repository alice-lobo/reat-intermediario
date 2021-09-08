import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sabor: 'uva',
            casquinha: true,
            guardanapos: 'sim'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        const {sabor, casquinha, guardanapos } = this.state;
        alert('Seu sabor escolhido foi ' +sabor+ ', guardanapos ' +guardanapos+ ' e casquinha ' + casquinha);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
                <label>
                    <select name="sabor" value={this.state.sabor} onChange={this.handleInputChange}>
                        <option value="uva">UVA</option>
                        <option value="limao">LIMÂO</option>
                        <option value="coco">COCO</option>
                        <option value="chocolate">CHOCOLATE</option>
                        <option value="morango">MORANGO</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default App;