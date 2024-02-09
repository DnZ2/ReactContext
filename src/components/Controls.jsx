import tick from '../assets/icons8-tick.svg'
import cross from '../assets/icons8-cross-26.png'
import edit from '../assets/edit-svgrepo-com.svg'
import remove from '../assets/garbage-trash-svgrepo-com.svg'
import PropTypes from 'prop-types';
import { useContext } from 'react'
import { TodosContext, RequestsContext } from '../context'

const Controls = (props) => {
	const {editingField, deletingField} = props

	Controls.propTypes={
	editingField: PropTypes.func,
	deletingField: PropTypes.func,
	}

	const {toggleCompleted} = useContext(RequestsContext)
	const {id, completed} = useContext(TodosContext)

  return (
	<div className='controls'>
		<img className='isCompletedToggle' src={completed? tick : cross} onClick={()=>toggleCompleted(completed, id)} />
		<img className='isHovered' src={edit} onClick={()=>editingField('open')} />
		<img className='isHovered' src={remove} onClick={()=>deletingField('open')} />
	</div>
  )
}

export default Controls
