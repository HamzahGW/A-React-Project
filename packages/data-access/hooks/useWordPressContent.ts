import { useQuery } from "@tanstack/react-query";
import {
  EndPoints,
  fetchWordPressContent,
  fetchWordPressPost,
} from "../services/contents";

export function useWordPressContent(endpoint: EndPoints) {
  return useQuery({
    queryKey: ["wordpressContent", endpoint],
    queryFn: () => fetchWordPressContent(endpoint),
  });
}

export function useWordPressPost(endpoint: EndPoints) {
  return useQuery({
    queryKey: ["wordpressContent", endpoint],
    queryFn: () => fetchWordPressPost(endpoint),
  });
}
