import axios from "axios";
import React from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { useDebounce } from "react-use";

export const useAddressAutocomplete = (
    name: string,
    query: string,
    setQuery: UseFormSetValue<FieldValues>
) => {
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    const fetchSuggestions = async (query: string) => {
        try {
            const response = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    query
                )}.json`,
                {
                    params: {
                        access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
                        autocomplete: true,
                        limit: 3,
                        country: "UA",
                        bbox: "36.0903,49.9211,36.4311,50.0848",
                    },
                }
            );

            const filteredSuggestions = response.data.features.map(
                (feature: any) => {
                    const placeName = feature.place_name;
                    const addressParts = placeName
                        .split(",")
                        .map((part: string) => part.trim());
                    const filteredParts = addressParts.filter(
                        (part: string) =>
                            !part.match(/Ukraine/i) && !part.match(/^\d{5}$/)
                    );
                    return filteredParts.join(", ");
                }
            );

            setSuggestions(filteredSuggestions);
        } catch (e) {
            console.error(e);
        }
    };

    useDebounce(
        () => {
            if (query.length > 2) {
                fetchSuggestions(query);
            } else {
                setSuggestions([]);
            }
        },
        250,
        [query]
    );

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(name, suggestion);
        setSuggestions([]);
    };

    return {
        suggestions,
        handleSuggestionClick,
    };
};
