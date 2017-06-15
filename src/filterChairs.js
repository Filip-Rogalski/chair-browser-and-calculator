import chairList from './chairs.json';

export default function filterChairs(searchText) {
    return chairList.filter((chair) => {
        if (chair.type.includes(searchText)) {
            return true;
        }
        if (chair.category.includes(searchText)) {
            return true;
        }
        return false;
    });
}
