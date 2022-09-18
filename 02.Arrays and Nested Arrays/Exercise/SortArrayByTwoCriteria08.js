function solve(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}

solve(['alpha',
    'beta',
    'gamma']
);

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

solve(['test',
    'Deny',
    'omen',
    'Default']
);