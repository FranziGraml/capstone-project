export function saveToLocal(key, value) {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

export function loadFromLocal(key) {
	try {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem(key));
		}
	} catch (error) {
		console.error(error);
	}
}
