import React, {Component} from 'react';


class AlertD extends Component {
    render() {
        const { des } = this.props;
        return (
            <div className="alert">
                Hasil Convert = {des}
            </div>
        )
    }
}

export default AlertD;