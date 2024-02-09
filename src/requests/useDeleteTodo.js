export const useDeleteTodo = (refresh, setRefresh) => {
	const deleteTodo = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: "DELETE",
			});
			const data = await response.json();
			console.log("Deleted", data);
		} catch (e) {
			console.log(e);
		} finally {
			setRefresh(!refresh);
		}
	};
	return {
		deleteTodo,
	};
};
