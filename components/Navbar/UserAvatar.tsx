import { AvatarProps } from "@radix-ui/react-avatar";
import Image from "next/image";
import { Avatar } from "../ui/avatar";

type UserAvatarProps = Partial<AvatarProps> & {
    user: {
        name: string;
        image: string;
    };
};
const UserAvatar = ({ user, ...avatarProps }: UserAvatarProps) => {
    return (
        <div className="flex items-center gap-3">
            <Avatar className="relative h-10 w-10" {...avatarProps}>
                <Image
                    src={user.image}
                    fill
                    alt={`${user?.name}'s profile picture`}
                    className="rounded-full object-cover"
                />
            </Avatar>
            <h1 className="text-xl font-normal">{user?.name}</h1>
        </div>
    );
};

export default UserAvatar;
