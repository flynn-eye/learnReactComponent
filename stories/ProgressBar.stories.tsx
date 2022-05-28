import { Line } from '../components/Progress'

export default {
    title: 'Example/Progress',
    component: Line,
}

export const Simple = (args) => <Line {...args} />

Simple.bind({})

Simple.args = {
    percent: 20,
    trailWidth: 20,
    strokeColor: ['blue', 'red'],
}
