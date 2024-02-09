export const useToggleCompleted = (refresh, setRefresh) => {
	const toggleCompleted = async (completed, id) => {
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify({
					completed: !completed,
				}),
			});
			const data = await response.json();
			console.log("UPDATE", data);
		} catch (e) {
			console.log(e);
		}finally {
			setRefresh(!refresh);
		}
	};
	return {
		toggleCompleted,
	};
};
