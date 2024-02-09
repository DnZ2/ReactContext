import { useState, useEffect } from "react";

export const useGetTodos = (refresh, sortFlag, value) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((data) => {
				if (sortFlag) {
					data.sort((a, b) => {
						return a.title
							.toLowerCase()
							.localeCompare(b.title.toLowerCase());
					});
				}
				const filteredData = data.filter(({ title }) => {
					return title
						.toLowerCase()
						.includes(value.toLowerCase().trim());
				});
				setTodos(filteredData);
			})
			.catch((e) => console.log(e));
	}, [refresh, sortFlag]); //eslint-disable-line

	return {
		todos,
	};
};
