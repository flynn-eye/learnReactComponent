import { Collapse, CollapseItem } from '../components/Collapse'

export default {
    title: 'Example/Collapse',
    Component: Collapse,
}

export const simple = (args) => (
    <Collapse {...args}>
        <CollapseItem title={'步骤一'} name={'1'}>内容1</CollapseItem>
        <CollapseItem title={'步骤二'} name={'2'}>内容2</CollapseItem>
    </Collapse>
)

simple.bind({

})

simple.args = {
    accordion: true
}
