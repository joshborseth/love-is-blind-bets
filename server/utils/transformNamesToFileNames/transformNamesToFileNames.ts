export const transformNamesToFileNames = (name: string) => {
	if (name.includes(' ')) {
		return name.split(' ').join('-').toLowerCase().replace('.', '');
	}

	return name.toLowerCase();
};
