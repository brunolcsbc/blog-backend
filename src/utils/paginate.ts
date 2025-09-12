type PaginationResult = {
    currentPage: number;
    perPage: number;
    totalPages: number;
    totalRecords: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    previousPage: number | null;
    nextPage: number | null;
    from: number;
    to: number;
};

export function f_paginate(page: number, limit: number, totalRecords: number): PaginationResult {
    const totalPages = Math.max(Math.ceil(totalRecords / limit), 1);
    const currentPage = Math.min(Math.max(page, 1), totalPages);

    const hasPreviousPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    const previousPage = hasPreviousPage ? currentPage - 1 : null;
    const nextPage = hasNextPage ? currentPage + 1 : null;

    const from = (currentPage - 1) * limit;
    const to = Math.min(currentPage * limit, totalRecords);

    return {
        currentPage,
        perPage: limit,
        totalPages,
        totalRecords,
        hasPreviousPage,
        hasNextPage,
        previousPage,
        nextPage,
        from,
        to
    };
}
