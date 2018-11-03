import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props); //props: properties u can pass into components
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data : [ 1000, 900, 800, 700, 600, 500],
                        backgroundColor : [ 'red', 'blue', 'green', 'yellow', 'purple', 'orange']
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">
            <Bar
                data={this.state.chartData}
                options={{
                    //maintainAspectRatio: false
                }}
            />
            </div>
        )
    }
}

export default Chart;