import React from 'react'
import Button,{ButtonSize,ButtonType} from './packages/button/index'
import Menu from './packages/menu/menu'
import MenuItem from './packages/menu/menuItem'
import SubMenu from './packages/menu/subMenu'
function App () {
return (
	<div>
		<Menu defaultIndex={'0'} mode="horizontal">
			<SubMenu title="test">
				<MenuItem disabled index={'1'}>1</MenuItem>
				<MenuItem index={'2'}>2</MenuItem>
			</SubMenu>
			<SubMenu title="test2">
				<MenuItem index={'3'}>3</MenuItem>
				<MenuItem index={'4'}>4</MenuItem>
			</SubMenu>
		</Menu>
	</div>
)
}
export default App
