export const getBucketURL = (assetURL: string) => {
  return `${import.meta.env.VITE_SUPABASE_API_URL}/${assetURL}`;
};
