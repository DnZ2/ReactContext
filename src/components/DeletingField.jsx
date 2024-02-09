import PropTypes from 'prop-types';
import { useContext } from 'react'
import { RequestsContext, TodosContext } from '../context'

const DeletingField = (props) => {
	const {deletingField} = props

	DeletingField.propTypes={
	deletingField: PropTypes.func,
	}

	const {deleteTodo} = useContext(RequestsContext)
	const {id} = useContext(TodosContext)

  return (
	<div className='dialogControls'>
		<button onClick={()=>deleteTodo(id)}>Удалить</button>
		<button onClick={()=>deletingField('close')}>Отмена</button>
	</div>
  )
}

export default DeletingField
