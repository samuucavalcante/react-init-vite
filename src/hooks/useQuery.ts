export function useQuery<T extends string>() {
  const params = Object.fromEntries(new URLSearchParams(location.search))

  return params as Record<T, string | undefined>
}
