export const useCreateTodo = (refresh, setRefresh) => {
	const createTodo = async (event, value) => {
		event.preventDefault();
		try {
			const response = await fetch(`http://localhost:3000/todos`, {
				method: "POST",
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify({
					title: value,
					completed: false,
				}),
			});
			const data = await response.json();
			console.log("posted", data);
		} catch (e) {
			console.log(e);
		} finally {
			setRefresh(!refresh);
			value = "";
		}
	};
	return {
		createTodo,
	};
};
