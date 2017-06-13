input chairs from './chairs.json';

export default function filterChairs(searchText) {
    return chairs.filter((chair) => {
        if (chair.title.includes(serchText)) {
            return true;
        }
        if (chair.keywords.includes(searchText)) {
            return true;
        }
        return false;
    });
}