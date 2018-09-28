export const generateDates = posts => {
    const defaultStartDate = new Date(2018, 1, 1);
    const defaultEndDate = new Date(2018, 8, 26);
    const randomDate = (start = defaultStartDate, end = defaultEndDate) => {
        return new Date(
            +start + Math.random() * (end - start)
        ).toLocaleString();
    };
    posts.map(post => {
        post.date = randomDate();
    });
};
