import React from "react";
import { NoRestaurantsFound } from "./NoRestaurantsFound";

export const NoSearchTerm = () => <NoRestaurantsFound searchTerm="" />;

export const WithSearchTerm = () => <NoRestaurantsFound searchTerm="foo" />;
