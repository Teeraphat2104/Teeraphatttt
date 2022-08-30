import React,{ Component } from 'react'


class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:'',search:'',username:'',password:'',color:""}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}



// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo ,search ,color} = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	Search : ${search}
	Your fevorite color : ${color}
	`)
}

alert(event){
	const { username, password } = this.state
	event.preventDefault()
	alert(`
	username : ${username}
	password : ${password}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

popUp(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}
// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
			<button>Create Account</button>
		</div>
		<div>
			<label htmlFor='search'>กรอกสิ่งที่ต้องการค้นหา</label>
			<input
				name='search'
				placeholder='Search'
				value={this.state.search}
				onChange={this.handleChange}
				/>
			<button>search</button>
		</div>
		<div>
			<label>Login</label>
		</div>
		<div>
			<label htmlFor='username'>username</label>
			<input	
				name='username'
				placeholder='Username'
				value={this.state.username}
				onChange={this.handleChange}
			/>
		</div>
		<div>
		<label htmlFor='password'>password</label>	
			<input
				name='password'
				placeholder='Password'
				value={this.state.password}
				onChange={this.alert}
				id="pwd"
				
			/>
		</div>
		<div>
			<label htmlFor='color'>Your fevorite color</label>
			<input 
				name='color'
				placeholder='Your color choose'
				value={this.state.color}
				onChange={this.handleChange}
			/>
		</div>
		<div>
			<label for="favcolor">Select your favorite color:</label>
 			<input 
				type="color" 
				id="favcolor" 
				name="favcolor"
			/>
		</div>
		<div>
			<label for="birthday">Your Birthday:</label>
  			<input 
				type="date" 
				id="birthday" 
				name="birthday"
			/>
		</div>
		<div>
		<label for="quantity">Quantity (between 1 and 100):</label>
  		<input 
			type="number" 
			id="quantity" 
			name="quantity" 
			min="1" 
			max="100"
		/>
		</div>
		<div>
		<label for="vol">Volume :</label>
  		<input 
			type="range" 
			id="vol" 
			name="vol" 
			min="0" 
			max="50"
		/>
		</div>


		
	</form>
	)
}
}

export default Form
