import React from 'react'
import Button,{ButtonSize,ButtonType} from './packages/button/index'
function App () {
return (
	<div>
		<Button
		 btnType={ButtonType.Link}
		 href="http://www.baidu.com"
		 > hello </Button>
		 <Button size={ButtonSize.small} btnType={ButtonType.Default}>你好</Button>
	</div>
)
}
export default App
