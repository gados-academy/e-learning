"use client";

import { IconPhosphor } from "@/components/Icon/Icon";
import { Input } from "@/components/Input/Default/Input";

export default function Home() {
  return (
    <div>
      <Input
        placeholder="Enter text here"
        icon={<IconPhosphor name="Chats" />}
        status="success"
        rightComponent={
          <IconPhosphor
            name="ArrowRight"
            className="text-gray-500 cursor-pointer"
          />
        }
      />
    </div>
  );
}
