export const filterSorting = Object.freeze({
    0: (data) => {
        return data.sort((a, b) => b.createdDate - a.createdDate);
    },
    1: (data) => {
        return data.sort((a, b) => {
            if (a.votePoint === b.votePoint) {
                return b.lastVoteDate - a.lastVoteDate;
            }

            return b.votePoint - a.votePoint;
        });
    },
    2: (data) => {
        return data.sort((a, b) => {
            if (a.votePoint === b.votePoint) {
                return b.lastVoteDate - a.lastVoteDate;
            }

            return a.votePoint - b.votePoint;
        });
    }
})