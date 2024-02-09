import './App.css'
import { useCreateTodo } from './requests/useCreateTodo'
import sort from './assets/sort-by-alphabet_icon-icons.com_73407.svg'
import { useState } from 'react'
import { useGetTodos } from './requests/useGetTodos'
import { debounce } from 'lodash'
import { Task } from './components/Task'
import { useToggleCompleted } from './requests/useToggleCompleted'
import { useDeleteTodo } from './requests/useDeleteTodo'
import { useEditTodo } from './requests/useEditTodo'
import { TodosContext, RequestsContext } from './context'

function App() {
	const [isSorted, setIsSorted] = useState(false)
	const [refresh, setRefresh] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [createValue, setCreateValue] = useState('')
	const [isValidValue, setIsValidValue] = useState(false)

	const {todos} = useGetTodos(refresh, isSorted, searchValue)
	const {createTodo} = useCreateTodo(refresh, setRefresh)
	const {toggleCompleted} = useToggleCompleted(refresh, setRefresh)
	const {deleteTodo} = useDeleteTodo(refresh, setRefresh)
	const {editTodo} = useEditTodo(refresh, setRefresh)

	const create = ({target}) =>{
		setCreateValue(target.value)
		if(target.value.length>=5){
			setIsValidValue(true)
		}
		else{
			setIsValidValue(false)
		}
	}

	const debounceSearch = debounce(()=>{setRefresh(!refresh)}, 500)

	const search = ({target}) =>{
		setSearchValue(target.value)
		debounceSearch()
	}

    return (
	<RequestsContext.Provider value={{ toggleCompleted, deleteTodo, editTodo}}>
	<main>
		<div className='formContainer'>
			<form className='inputContainer' onSubmit={()=>{createTodo(event, createValue);setCreateValue('');setIsValidValue(false)}}>
				<input onChange={create} value={createValue} type="text" placeholder='Создать новую задачу (не менее 5 символов)'/>
				<button disabled={!isValidValue} className='createTodo'>+</button>
			</form>
			<div className='inputContainer'>
				<input onChange={search} value={searchValue} type="text" placeholder='Поиск'/>
				<button onClick={()=>setIsSorted(!isSorted)} style={isSorted?{backgroundColor: 'rgba(0, 0, 0, 0.4)'}: null} className='searchTodo'>
					<img className='sortImg' src={sort} alt="sort"/>
				</button>
			</div>
		</div>

		<ul className='TodosList'>
		{todos.map(({id, title, completed})=>
		<TodosContext.Provider key={id} value={{id, title, completed}}>
		<Task/>
		</TodosContext.Provider>
		 )}
		</ul>
	</main>
	</RequestsContext.Provider>

  )
}

export default App
