export const useEditTodo = (refresh, setRefresh) => {
	const editTodo = async (value, id) => {
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify({
					title: value,
				}),
			});
			const data = await response.json();
			console.log("edited", data);
		} catch (e) {
			console.log(e);
		}
		finally{
			setRefresh(!refresh)
		}
	};
	return {
		editTodo,
	};
};
