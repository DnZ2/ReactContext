import PropTypes from 'prop-types';
import { useContext } from 'react'
import { RequestsContext, TodosContext } from '../context'

const EditingField = (props) => {
	const {isValidValue, editingField, value} = props

	EditingField.propTypes={
		value: PropTypes.string,
		isValidValue: PropTypes.bool,
		editingField: PropTypes.func,
	}

	const {editTodo} = useContext(RequestsContext)
	const {id} = useContext(TodosContext)

  return (
	<div className='dialogControls'>
		<button disabled={!isValidValue} onClick={()=>{editTodo(value ,id);editingField('close')}}>Изменить</button>
		<button onClick={()=>{editingField('close')}}>Отмена</button>
	</div>
  )
}

export default EditingField
