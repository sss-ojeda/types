export interface SortOptions {
    order: 'ASC' | 'DESC';
    val: string;
}
export interface SearchOptions {
    sort: SortOptions[];
    offset: number;
    limit: number;
}
