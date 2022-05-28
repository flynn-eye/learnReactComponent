import { CheckBox } from '../components/Checkbox'

export default {
    title: 'Example/Checkbox',
    component: CheckBox,
}

export const Disabled = (args) => <CheckBox {...args} />

Disabled.bind({})

Disabled.args = {
    disabled: true,
    title: '标题',
    onChange(value) {
        console.warn(value)
    },
}
