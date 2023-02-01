type PlaceholderObject = {
	name: string
	randomNumber: number
	objectWithin: {
		uuid: number 
		someotherData: string | null

	}
}

const groupObjectsByValue = (objects: PlaceholderObject[]): PlaceholderObject[][] => {
	const groupedObjects: {[key: string]: PlaceholderObject[]} = {}

	objects.forEach((object) => {
		const {uuid} = object.objectWithin
		if (groupedObjects[uuid]) {
			groupedObjects[uuid].push(object)
		} else {
			groupedObjects[uuid] = [object]
		}
	})
	return Object.values(groupedObjects)
}
