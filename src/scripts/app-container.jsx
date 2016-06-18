const React = require('react');
const KegContainer = require('./components/keg-container.jsx');

const AppContainer = React.createClass({
    getInitialState() {
        return ({
            remValue1: 20,
            remValue2: 50,
            isPouring1: true,
            isPouring2: false,
            totalValue1: 100,
            totalValue2: 100
        });
    },

    componentWillUnmount() {
        // TODO: Fetch kegs from server
    },

    componentDidMount() {
        setInterval(function () {
            this.setState({
                remValue1: this.state.remValue1 + 1,
                remValue2: this.state.remValue2 - 1
            });
        }.bind(this), 1500);
    },

    componentWillUnmount() {
    },
    render() {
        return (
            <div className="app-wrapper container">
                <div className="title row center-align">

                    <div className="col s2 offset-s3 logo">
                        <img className="responsive-img" src="https://pbs.twimg.com/media/CD3-iUqWEAAVBxV.jpg:large"/>
                    </div>
                    <div className="col s4 titleText">
                        <div className="companyName">NC</div>
                        <div className="heading">Keg-o-meter</div>
                    </div>
                </div>
                <div className="row">
                    <KegContainer remValue={this.state.remValue1}
                                  totalValue={this.state.totalValue1}
                                  isPouring={this.state.isPouring1}
                                  gaugeID="gaugeLeft"/>
                    <KegContainer remValue={this.state.remValue2}
                                  totalValue={this.state.totalValue2}
                                  isPouring={this.state.isPouring2}
                                  gaugeID="gaugeRight"
                                  reverse={ true }/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
