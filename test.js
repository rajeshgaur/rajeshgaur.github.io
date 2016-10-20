import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			code: ''
		}

	}
	onPaste(e) {
		debugger;
		let arr = e.target.value.trim().split(';').map(t => t.trim()).map((it) => {
			let index = it.indexOf('-')
			if (index > 0) {
				return `${it.slice(0,index)}${it[index+1].toUpperCase()}${it.slice(index+2,it.length)}`
			}
			return it
		}).filter(x => x)
		this.setState({
			code: arr.map((k, i) => {
				let css = k.split(':')
				let retVal = []
				let str
				if (k) str = `${css[0]?css[0]:''}:'${css[1]?css[1].trim():''}'`
				if (i === (arr.length - 1))
					retVal = <code><code>{str}</code></code>
				else if (k)
					retVal = <code><code>{str},</code><br></br></code>
				return retVal
			})
		})
	}
	render() {
		return <div style={{display:'flex',justifyContent:'space-around'}}>
					<div style={{width:'48%'}}>
						<h2>Paste Your CSS Here</h2>
						<textarea style={{resize:'none',height:'500px',width:'100%',boxSizing:'border-box',minWidth:'300px'}} placeholder="Paste your css here" onChange={this.onPaste.bind(this)}></textarea>
					</div>
					<div  style={{height:'500px',width:'100%',boxSizing:'border-box',width:'48%',minWidth:'300px'}}>
						<h2>Get  Your CSS Object Here</h2>
						<div style={{width:'100%',height:'100%',boxSizing:'border-box',border:'1px solid blue',padding:'10px 50px'}}>
							{this.state.code}
						</div>
					</div>
			   </div>
	}
}
ReactDOM.render(<App />, document.getElementById('app'))

/*e.target.value.trim().split(';').map(t => t.trim()).map((it) => {
	let index = it.indexOf('-', )
	if (index > 0) {
		return `${it.slice(0,index)}${it[index+1].toUppercase()}${it.slice(index,it.length)}`
	}
	return it
})*/