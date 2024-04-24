export function generateObjects() {
    const items = []
    const numberOfItems = Math.floor(Math.random() * 10); // Generate a random number of items till 10

    for (let i = 0; i < numberOfItems; i++) {
        items.push({
            id: i,
            value: `section-${Math.floor(Math.random() * 10)}`,
            position: i
        });
    }

    return items;
}

export default generateObjects