import { Skeleton } from "@mui/material";

const AlbumCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" height={300} />
      <Skeleton variant="text" height={75} sx={{fontSize:'1rem'}}/>
      <Skeleton variant="rounded" height={100} />
    </>
  );
};
export default AlbumCardSkeleton;
