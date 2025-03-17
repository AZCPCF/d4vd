import { Skeleton } from "@mui/material";

const AlbumCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" height={300} />
      <Skeleton variant="rounded" height={100} sx={{mt:1}} />
    </>
  );
};
export default AlbumCardSkeleton;
