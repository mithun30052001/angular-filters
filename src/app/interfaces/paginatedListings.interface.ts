import { DataListing } from "./dataListings.interface";

export interface PaginatedListingsResult {
  paginatedListings: DataListing[];
  pageSize: number;
}