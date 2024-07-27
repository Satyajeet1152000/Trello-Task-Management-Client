import { Skeleton } from "./ui/skeleton";

function ListSkeleton() {
    return (
        <div className="space-y-3">
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>

            <Skeleton className="h-[450px]" />
        </div>
    );
}

export function PostsSkeleton() {
    const min = 2;
    const max = 8;
    return (
        <>
            {Array.from({
                length: Math.floor(Math.random() * (max - min + 1)) + min,
            }).map((_, i) => (
                <>
                    <ListSkeleton />
                </>
            ))}
        </>
    );
}
